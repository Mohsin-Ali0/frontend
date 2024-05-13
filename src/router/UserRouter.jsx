import React from "react";
import { Route, Routes } from "react-router-dom";
import "../assets/fonts/clash-display.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "../screens/Client.module.css";
import "swiper/css";
import Home from "../screens/home";
import GuestRoutes from "./GuestRoutes";
import UserLogIn from "../screens/auth/login";
import SignUp from "../screens/auth/signup/signup";
import ProtectedRoutes from "./Protectedroutes";
import { ChannelsScreen } from "../screens/channels";
import { DashBoard } from "../screens/dashboard";
import Checkout from "../screens/dashboard/PayementScreen/PaymentScreen";
import { PaymentSuccess } from "../screens/payments/success/paymentsuccess";
import { PaymentFailed } from "../screens/payments/failed/paymentfailed";
import { PageNotFound } from "../screens/page404";

export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      {/* Auth Screens Start */}
      <Route element={<GuestRoutes />}>
        <Route path="/login" element={<UserLogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      {/* Auth Screens End */}

      {/* UserScreen Start */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/channels" element={<ChannelsScreen />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard/checkout" element={<Checkout />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/failed" element={<PaymentFailed />} />
      </Route>

      {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
    </Routes>
  );
};

export default UserRouter;
