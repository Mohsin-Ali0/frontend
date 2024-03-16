import React from "react";
import { SiteFooter } from "../footer";
import { LoggedInHeader } from "./header/header";

export const LoginLayout = (props) => {
  const { showFooter = true } = props;
  return (
    <>
      <LoggedInHeader />
      {props.children}
      {showFooter && <SiteFooter />}
    </>
  );
};
