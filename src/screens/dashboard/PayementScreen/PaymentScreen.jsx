import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../../../components/CheckoutForm/checkouform";
import { useLocation, useParams } from "react-router-dom";
const stripePromise = loadStripe(
  "pk_test_51Om0TVENvJ1Tu9riMwQgVkQbuHuVAUnEiUM9SUK2KLmiMoNiuyqy3gvpCWSzvV9nPETxB7VLvYsXSaFSUqsfYR2V00OA3bbOJQ"
);

const Checkout = () => {
  const { state } = useLocation();
  const { id } = useParams(); // Retrieve clientSecret from route parameters
  console.log(id, "id");
  const options = {
    clientSecret: id, // Use clientSecret from route params
    appearance: {
      theme: "flat",
    },
  };
  // 'stripe', 'flat', 'night'
  return (
    <div className="flex container mt-8">
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm
          UserToken={state.UserToken}
          CampaignDetails={state.CampaignDetails}
          clientSecret={id}
        />
      </Elements>
    </div>
  );
};

export default Checkout;
