import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import GuestRoutes from "./GuestRoutes";
import UserLogIn from "../screens/auth/login";
import SignUp from "../screens/auth/signup/signup";
import ProtectedRoutes from "./Protectedroutes";
import { ChannelsScreen } from "../screens/channels";

function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Auth Screens Start */}
      <Route element={<GuestRoutes />}>
        <Route path="/login" element={<UserLogIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} /> */}
      </Route>
      {/* Auth Screens End */}

      {/* UserScreen Start */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/channels" element={<ChannelsScreen />} />
      </Route>
    </Routes>
  );
}

export default UserRouter;
