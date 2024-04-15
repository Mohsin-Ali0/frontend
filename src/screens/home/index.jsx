import React from "react";
import Layout from "../../components/Layout/layout";
import { Banner } from "./banner/banner";
import { Views } from "./views/views.jsx";
import { Reviews } from "./reviews/reviews";
import { BoostViews } from "./boost-views/boostviews";
import { AboutUs } from "./about-us/about-us";
import { OurWork } from "./ourwork/ourwork";
import { PromoteChanel } from "./promote-channel/promote-channel";
import { StartPromoting } from "./start-promoting/start-promoting";
import { Promotionforecast } from "./promotion-forecast/promotion-forecast";

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
        <Promotionforecast />
        <PromoteChanel />
        <StartPromoting />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
