import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SiteButton from "../../../components/Button/button";
import "./subscribersandusers.css";
import BudgetSlider from "../../../components/budgetSlider/budgetslider";
export const SubscriberAndUsers = ({
  ChannelDetails,
  handleStepChange,
  value,
  setValue,
  ViewsData,
}) => {
  return (
    <React.Fragment>
      <section style={{ height: "100%", width: "100%" }}>
        <Container fluid="lg">
          <Row className="justify-content-between align-items-center flex-column  ">
            <Col xl={12} md={12}>
              <h1>Subscriber And Users Content </h1>
              <p style={{ color: "grey" }}>
                Please add your budget to see the estimates
              </p>
            </Col>
            <Col xl={12} md={12}>
              <BudgetSlider
                ChannelDetails={ChannelDetails}
                value={value}
                setValue={setValue}
                ViewsData={ViewsData}
              />
            </Col>
            <Col xl={12} md={12}>
              <Col xl={4} md={6} className="p-4">
                <a href="google.com">
                  Budget is greater then ${ViewsData?.maxviews?.value} a week?
                </a>
              </Col>
              <Row className="align-items-center ">
                <Col xl={6} md={5} className="p-4 next-btn-container">
                  <SiteButton
                    onClick={() => handleStepChange(1)}
                    className="site-btn next-btn"
                    style={{ backgroundColor: "white", color: "#139DFF" }}
                  >
                    Back
                  </SiteButton>
                </Col>
                <Col xl={6} md={5} className="p-4 next-btn-container">
                  <SiteButton
                    onClick={() => handleStepChange(3)}
                    className="site-btn next-btn"
                  >
                    Next
                  </SiteButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
