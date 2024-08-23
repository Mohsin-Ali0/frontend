import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, useParams } from "react-router-dom";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
// import "./checkoutform.css";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
// import SiteButton from "../Button/button";
import { decodeToken } from "react-jwt";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css"; // Import the CSS for styling

const stripePromise = loadStripe(
  "pk_test_51Om0TVENvJ1Tu9riMwQgVkQbuHuVAUnEiUM9SUK2KLmiMoNiuyqy3gvpCWSzvV9nPETxB7VLvYsXSaFSUqsfYR2V00OA3bbOJQ"
);

const CustomPayments = () => {
  const { id } = useParams(); // Retrieve clientSecret from route parameters
  console.log(id, "id");
  const options = {
    appearance: {
      theme: "flat",
    },
  };
  useEffect(() => {
    getCampaginDetails();
  }, []);
  // 'stripe', 'flat', 'night'

  const getCampaginDetails = async () => {
    await axios
      .get(`/api/campaign/get-campaign/${id}`)
      .then((res) => {
        console.log(res.data, "res");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  return (
    <div className="flex container mt-8">
      <Elements stripe={stripePromise} options={options}>
        {/* <CustomCheckoutForm
          UserToken={state.UserToken}
          CampaignDetails={state.CampaignDetails}
          clientSecret={id}
        /> */}
      </Elements>
      <h1>Custom Payments</h1>
    </div>
  );
};

export default CustomPayments;

const CustomCheckoutForm = ({ UserToken, CampaignDetails, clientSecret }) => {
  const { state } = useLocation();

  const DecodedToken = decodeToken(state.UserToken);

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState("");
  const [load, setLoad] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoad(true);
    if (elements == null || stripe == null) {
      setLoad(false);
      return;
    }
    await axios
      .post("/api/stripe/complete-payment", {
        email: DecodedToken.email,
        amount: CampaignDetails.value * 100,
        UserToken,
        CampaignDetails,
        clientSecret,
      })
      .then(async (res) => {
        const { error: submitError } = await elements.submit();
        if (submitError?.message) {
          setLoad(false);
          setErrorMessage(submitError.message);
          setShowModal(true);
          console.log(submitError, "submitError error");
          return;
        }

        const { error } = await stripe.confirmPayment({
          elements,
          clientSecret,
          confirmParams: {
            return_url: `${window.location.origin}/payment/success`,
          },
        });

        if (error) {
          // This point will only be reached if there is an immediate error when
          // confirming the payment. Show error to your customer (for example, payment
          // details incomplete)
          console.log(error, "if error");
          setErrorMessage(error.message);
          setLoad(false);
          setShowModal(true);
        } else {
          setLoad(false);
          window.location.href = `${window.location.origin}/payment/failed`;

          // Your customer will be redirected to your `return_url`. For some payment
          // methods like iDEAL, your customer will be redirected to an intermediate
          // site first to authorize the payment, then redirected to the `return_url`.
        }
      })
      .catch((err) => {
        setLoad(false);
        setErrorMessage(err.message);
        setShowModal(true); // Trigger modal if there's an error
      });
  };

  const showAlert = () => {
    Swal.fire({
      title: "Payment Error",
      text: errorMessage || "Unknown error occurred.",
      icon: "error",
      confirmButtonText: "OK",
    }).then((result) => {
      // After user clicks OK button
      if (result.isConfirmed || result.isDismissed) {
        setShowModal(false); // Close the modal by setting state to false
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 py-4">
      <div className="mb-3">
        <Row className="justify-content-between align-items-center ">
          <Col xl={6} className="justify-content-between align-items-center">
            <label htmlFor="email-input">Email</label>
            <FormControl
              style={{ color: "black", padding: "20px" }}
              value={DecodedToken?.email}
              // onChange={(e) => setEmailInput(e.target.value)}
              type="email"
              id="email-input"
              placeholder="johndoe@gmail.com"
              className="checkout-email"
              readOnly
            />
          </Col>
          <Col xl={6} className="justify-content-between align-items-center">
            <label htmlFor="email-input">Amount</label>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl
                style={{ color: "black", padding: "20px" }}
                value={state.CampaignDetails?.value}
                // onChange={(e) => setEmailInput(e.target.value)}
                type="email"
                id="email-input"
                placeholder="johndoe@gmail.com"
                className="checkout-email"
                readOnly
              />
            </InputGroup>
          </Col>
        </Row>
      </div>
      <PaymentElement options={{ layout: "accordion" }} />
      <Row className="justify-content-between align-items-center">
        <Col
          xl={12}
          className="justify-content-center align-items-center d-flex py-5"
          //   style={{ backgroundColor: "red" }}
        >
          <SiteButton
            type="submit"
            disabled={!stripe || !elements}
            // className="checkout-btn"
            className="site-btn btn-width checkout-btn"
            load={load}
          >
            Pay
          </SiteButton>
        </Col>
      </Row>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
      {showModal && showAlert()} {/* Render modal if showModal is true */}
    </form>
  );
};
