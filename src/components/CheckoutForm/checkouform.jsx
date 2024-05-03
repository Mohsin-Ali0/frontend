import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./checkoutform.css";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import SiteButton from "../Button/button";
import { useLocation } from "react-router-dom";
import { decodeToken } from "react-jwt";

export const CheckoutForm = () => {
  const { state } = useLocation();

  console.log(state, "state");
  const DecodedToken = decodeToken(state.UserToken);
  console.log(DecodedToken, "DecodedToken");

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState("");
  const [load, setLoad] = useState(false);

  // const [emailInput, setEmailInput] = useState(DecodedToken?.email);
  // const [emailInput, setEmailInput] = useState(DecodedToken?.email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoad(true);
    if (elements == null || stripe == null) {
      setLoad(false);
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
      // Show error to your customer
      setLoad(false);
      setErrorMessage(submitError.message);
      return;
    }

    const paymentResult = await axios.post("api/stripe/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currency: "usd",
        email: DecodedToken?.email,
        amount: state.CampaignDetails?.value * 100,
        paymentMethodType: "card",
        ChannelDetails: state.ChannelDetails,
        CampaignDetails: state.CampaignDetails,
        UserToken: state.UserToken,
      }),
    });

    const clientSecret = await paymentResult.data.client_secret;

    console.log(paymentResult.data.client_secret, "client_secret");
    console.log(clientSecret, "clientSecret");

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
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
      console.log(error, "-----");
      setErrorMessage(error.message);
      setLoad(false);
      window.location.href = `${window.location.origin}/payment/failed`;
    } else {
      setLoad(false);
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
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
      <PaymentElement />
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
    </form>
  );
};
