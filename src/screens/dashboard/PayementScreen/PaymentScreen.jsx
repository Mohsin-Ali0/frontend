import React from "react";
// import ProductCard from "../components/ProductCard";
// import PRODUCT from "../productInfo";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../../../components/CheckoutForm/checkouform";
const stripePromise = loadStripe(
  "pk_test_51Om0TVENvJ1Tu9riMwQgVkQbuHuVAUnEiUM9SUK2KLmiMoNiuyqy3gvpCWSzvV9nPETxB7VLvYsXSaFSUqsfYR2V00OA3bbOJQ"
);
const options = {
  mode: "payment",
  amount: 1099,
  currency: "usd",
  // Fully customizable with appearance API.
  appearance: {
    /*...*/
  },
};

const Checkout = (props) => {
  //   const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  const stripePromise = loadStripe(
    "pk_test_51Om0TVENvJ1Tu9riMwQgVkQbuHuVAUnEiUM9SUK2KLmiMoNiuyqy3gvpCWSzvV9nPETxB7VLvYsXSaFSUqsfYR2V00OA3bbOJQ"
  );

  return (
    <div className="flex container mt-8">
      {/* <ProductCard {...PRODUCT} /> */}
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Checkout;
