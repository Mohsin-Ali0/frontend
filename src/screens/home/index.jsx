import React from "react";
import Layout from "../../components/Layout/layout";
import { Banner } from "./banner/banner";

function Home() {
  return (
    <React.Fragment>
        <Layout>
            <Banner/>
        </Layout>
    </React.Fragment>
  )
}

export default Home;
