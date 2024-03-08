import React from "react";
import Layout from "../../components/Layout/layout";
import { Banner } from "./banner/banner";
import { Views } from "./views/views";
import { Reviews } from "./reviews/reviews";
import { BoostViews } from "./boost-views/boostviews";
import { AboutUs } from "./about-us/about-us";
import { OurWork } from "./ourwork/ourwork";
import { PromoteChanel } from "./promote-channel/promote-channel";

function Home() {
  return (
    <React.Fragment>
      <Layout>
        <Banner />
        <Views />
        <Reviews />
        <BoostViews />
        <AboutUs />
        <OurWork />
        <PromoteChanel />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
