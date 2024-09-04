import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./custom-payment-form.css";
import { decodeToken } from "react-jwt";
import Swal from "sweetalert2";  // Import SweetAlert
const CustomPaymentForm = ({ amount, clientSecret, campaignData }) => {

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  let UserToken = localStorage.getItem("token");
  const DecodedToken = decodeToken(UserToken)
  const [showModal, setShowModal] = useState(false);

  const handleSubmit2 = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    try {
      // const { data: clientSecret } = await axios.post("/api/payment_intents", {
      //   amount,
      //   clientSecret,
      //   userToken,
      //   campaignData
      // });

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(`Payment failed: ${result.error.message}`);
        setProcessing(false);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          setSucceeded(true);
          setProcessing(false);
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        // text: "An error occurred while fetching Bid Details or Client Secret",
        text: error
      });
      setProcessing(false);
    }
  };


  const showAlert = () => {
    Swal.fire({
      title: "Payment Error",
      text: error || "Unknown error occurred.",
      icon: "error",
      confirmButtonText: "OK",
    }).then((result) => {
      // After user clicks OK button
      if (result.isConfirmed || result.isDismissed) {
        setShowModal(false); // Close the modal by setting state to false
      }
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);
    if (elements == null || stripe == null) {
      setProcessing(false);
      return;
    }
    await axios
      .post("/api/stripe/custom-campaign-payment", {
        amount,
        UserToken,
        CampaignDetails: campaignData,
        clientSecret,
      })
      .then(async (res) => {
        const { error: submitError } = await elements.submit();
        if (submitError?.message) {
          setProcessing(false);
          setError(submitError.message);
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
          setError(error.message);
          setProcessing(false);
          setShowModal(true);
        } else {
          setProcessing(false);
          window.location.href = `${window.location.origin}/payment/failed`;

          // Your customer will be redirected to your `return_url`. For some payment
          // methods like iDEAL, your customer will be redirected to an intermediate
          // site first to authorize the payment, then redirected to the `return_url`.
        }
      })
      .catch((err) => {
        console.log("cathchhhhh here", err)
        setProcessing(false);
        setShowModal(true); // Trigger modal if there's an error
        setError(err?.response?.data?.message);
      });
  };
  const paymentElementStyles = {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
    },
    complete: {
      color: '#4caf50',
    },
  };


  return (
    <form onSubmit={handleSubmit} className="custayment-form">

      <div className="row mt-5">
        <div className="col-md-6">
          <label htmlFor="email" className="CustomLables">Email</label>
          <input
            type="email"
            className="form-control mt-1"
            id="email"
            value={DecodedToken.email}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="CustomLables">Amount</label>
          <input
            type="text"
            className="form-control mt-1"
            id="amount"
            value={`$ ${amount}`}
            disabled
          />

        </div>


        <div className="mt-4">
          <label htmlFor="email" className="CustomLables">Card Details </label>

          <PaymentElement options={{ style: paymentElementStyles }} />
        </div>


      </div>
      <div className="row mt-4  d-flex justify-content-center">
        <div className="col-md-6">
          <button
            type="submit"
            disabled={!stripe || processing || succeeded}
            className="btn btn-primary Payment_Proc_btn w-100 my-4"
          >
            {processing ? "Processing..." : "Pay Now"}
          </button>
        </div>



      </div>



      {/* {error && <div className="alert alert-danger mt-3">{error}</div>} */}
      {/* {succeeded && (
        <div className="alert alert-success mt-3">Payment succeeded!</div>
      )} */}
      {showModal && showAlert()} {/* Render modal if showModal is true */}
    </form>
  );
};

export default CustomPaymentForm;
