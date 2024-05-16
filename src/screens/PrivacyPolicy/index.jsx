import React from "react";
import Layout from "../../components/Layout/layout";
import { PrivacypolicyContent } from "../home/PrivacyPolicy/Privacypolicy";
import usePageTitle from "../../hooks/usePageTitle";

export const PrivacyPolicy = () => {
  usePageTitle("Privacy Policy")
  return (
    <React.Fragment>
      <Layout>
        <PrivacypolicyContent />
      </Layout>
    </React.Fragment>
  );
};
