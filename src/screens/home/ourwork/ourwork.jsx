import React from "react";
import "./ourwork.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FourIcon, OneIcon, ThreeIcon, TwoIcon } from "../../../assets/images";

export const OurWork = () => {
  return (
    <React.Fragment>
      <section className="bg_img txt-color">
        <Container>
          <Row className="justify-content-between align-items-center pt-4 pb-5 flex-column">
            <Col xl="12" style={{ textAlign: "center" }}>
              <h1>How The VidTrial Engine Operates </h1>
            </Col>
            <Col xl="12" className="pt-4">
              <Row className="justify-content-around align-items-center align-content-betweeen">
                <Col xl="5" className="mb-3 py-4 px-5 container-cloud">
                  <Image src={OneIcon} className="icon-styles " />
                  <h4 className="bluetxt">Setup</h4>
                  <p className="work-p-txt">
                    Subscribe to VidTrial by connecting your YouTube channel to
                    VidTrial. Customize your campaign settings and target
                    audience preferences effortlessly.
                  </p>
                </Col>

                <Col xl="5" className="mb-3 py-4 px-5 container-cloud">
                  <Image src={TwoIcon} className="icon-styles " />
                  <h4 className="bluetxt">Promotion</h4>
                  <p className="work-p-txt">
                    Set up ads from your YouTube videos for maximum exposure to
                    your target audience. Boost your channel's growth,
                    visibility, and reach.
                  </p>
                </Col>
                <Col xl="5" className="mb-3 py-4 px-5 container-cloud">
                  <Image src={ThreeIcon} className="icon-styles " />
                  <h4 className="bluetxt">Payment</h4>
                  <p className="work-p-txt">
                    Seamlessly manage your payment process through our secure
                    payment gateway. Choose from flexible payment options
                    tailored to your needs.
                  </p>
                </Col>
                <Col xl="5" className="mb-3 py-4 px-5 container-cloud">
                  <Image src={FourIcon} className="icon-styles " />
                  <h4 className="bluetxt">Results</h4>
                  <p className="work-p-txt">
                    Gain valuable insights into your campaign's performance
                    through a comprehensive analytics dashboard. Track
                    engagement metrics and optimize future strategies.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
