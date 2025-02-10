import React from "react";
import Layout from "../../components/Layout/layout";
import { Banner } from "./banner/banner";
import { Reviews } from "./reviews/reviews";
import { BoostViews } from "./boost-views/boostviews";
import { AboutUs } from "./about-us/about-us";
import { OurWork } from "./ourwork/ourwork";
import { PromoteChanel } from "./promote-channel/promote-channel";
import { StartPromoting } from "./start-promoting/start-promoting";
import { Promotionforecast } from "./promotion-forecast/promotion-forecast";
import { Views } from "./Views/views";
import FadeIn from "../../components/FadeIn/FadeIn";

function Home() {
  return (
    <React.Fragment>
      <Layout>
        {/* Remove delay props since animations will trigger on scroll */}
        <FadeIn as="section" initialY={50}>
          <Banner />
          <Views />
        </FadeIn>

        <FadeIn>
          <Reviews />
        </FadeIn>

        <FadeIn>
          <BoostViews />
        </FadeIn>

        {/* Continue for other components */}
        <FadeIn>
          <AboutUs />
        </FadeIn>

        <FadeIn>
          <OurWork />
        </FadeIn>

        <FadeIn>
          <Promotionforecast />
        </FadeIn>

        <FadeIn>
          <PromoteChanel />
        </FadeIn>

        <FadeIn>
          <StartPromoting />
        </FadeIn>
      </Layout>
    </React.Fragment>
  );
}

export default Home;
