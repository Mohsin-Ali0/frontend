import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "./custom-payment-form.css";

const CustomPaymentForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    try {
      const { data: clientSecret } = await axios.post("/api/payment_intents", {
        amount,
      });

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
      setError("Payment failed. Please try again.");
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="custom-payment-form">
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your email address"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="text"
            className="form-control"
            id="amount"
            value={`$ ${amount}`}
            disabled
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="card-element" className="form-label">
          Card Details
        </label>
        <CardElement id="card-element" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="card-element" className="form-label">
          PAYMENT Details
        </label>
        {/* <PaymentElement options={{ layout: "accordion" }} /> */}
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select id="country" className="form-control">
            <option value="Pakistan">Pakistan</option>
            {/* Add more country options as needed */}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || processing || succeeded}
        className="btn btn-primary w-100 mt-4"
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
      {succeeded && (
        <div className="alert alert-success mt-3">Payment succeeded!</div>
      )}
    </form>
  );
};

export default CustomPaymentForm;
