import React from "react";
import Layout from "../../components/Layout/layout";
import { TermsandConditionContent } from "../home/terms-and-conditions/termsandconditions";
import usePageTitle from "../../hooks/usePageTitle";

export const TermsandCondition = () => {
  usePageTitle("Terms and Services")
  return (
    <React.Fragment>
      <Layout>
        <TermsandConditionContent />
      </Layout>
    </React.Fragment>
  );
};



