import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import UserRouter from "./router";
import "./assets/fonts/clash-display.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "./screens/dashboard/PayementScreen/PaymentScreen";

import "swiper/css";
const stripePromise = loadStripe("your_publishable_key");
// In a CSS file

function App() {
  return (
    <BrowserRouter>
      <UserRouter />
  
    </BrowserRouter>
  );
}

export default App;

// pAs}*i1c!?sB CPANEL PASS
// Q9SwX]X(_x9! CPANEL PASS NEW
