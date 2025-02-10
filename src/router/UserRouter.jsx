import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { PrivacyPolicy } from "../screens/PrivacyPolicy";
import { TermsandCondition } from "../screens/Terms-and-Condition";
import CustomPayments from "../screens/payments/custom-payments/custom-payments";
import About from "../screens/About/index";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "../components/PageTransition/PageTransition";
export const UserRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PageTransition>
              <PrivacyPolicy />
            </PageTransition>
          }
        />
        <Route
          path="/terms-and-services"
          element={
            <PageTransition>
              <TermsandCondition />
            </PageTransition>
          }
        />
        <Route
          path="/about-us"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        {/* <Route
          path="*"
          element={
            <PageTransition>
              <PageNotFound />
            </PageTransition>
          }
        /> */}

        {/* Auth Screens Start */}

        <Route element={<GuestRoutes />}>
          <Route
            path="/login"
            element={
              <PageTransition>
                <UserLogIn />
              </PageTransition>
            }
          />
          <Route
            path="/signup"
            element={
              <PageTransition>
                <SignUp />
              </PageTransition>
            }
          />
        </Route>

        {/* Auth Screens End */}

        {/* UserScreen Start */}

        <Route element={<ProtectedRoutes />}>
          <Route
            path="/channels"
            element={
              <PageTransition>
                <ChannelsScreen />
              </PageTransition>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PageTransition>
                <DashBoard />
              </PageTransition>
            }
          />
          <Route
            path="/dashboard/checkout/:id"
            element={
              <PageTransition>
                <Checkout />
              </PageTransition>
            }
          />
          <Route
            path="/payment/success"
            element={
              <PageTransition>
                <PaymentSuccess />
              </PageTransition>
            }
          />
          <Route
            path="/payment/failed"
            element={
              <PageTransition>
                <PaymentFailed />
              </PageTransition>
            }
          />
          <Route
            path="/custompayment/:id"
            element={
              <PageTransition>
                <CustomPayments />
              </PageTransition>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default UserRouter;
