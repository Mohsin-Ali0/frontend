import React from "react";
import { SiteFooter } from "../footer";
import { LoggedInHeader } from "./header/header";

export const LoginLayout = (props) => {
  const { showFooter  } = props;
  return (
    <>
      <LoggedInHeader />
      {props.children}
      {showFooter && <SiteFooter />}
    </>
  );
};
