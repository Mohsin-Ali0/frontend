import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BudgetCard } from "../../../components/Slider/slider";
import SiteButton from "../../../components/Button/button";
import "./subscribersandusers.css";
import BudgetSlider from "../../../components/budgetSlider/budgetslider";
export const SubscriberAndUsers = () => {
  return (
    <React.Fragment>
      <section style={{ height: "100%", width: "100%" }}>
        <Container>
          <Row className="justify-content-between align-items-center flex-column ">
            <Col xl={12} md={12}>
              <h1>Subscriber And Users Content </h1>
              <p style={{ color: "grey" }}>
                Please add your budget to see the estimates
              </p>
            </Col>
            <Col xl={12} md={12}>
              <BudgetCard />
              <BudgetSlider/>
            </Col>
            <Col xl={12} md={12}>
              <Row className="align-items-center  ">
                <Col xl={4} md={6} className="p-4">
                  <a href="google.com">Budget is greater then $1,000 a week?</a>
                </Col>
                <Col xl={6} md={5} className="p-4 next-btn-container">
                  <SiteButton className="site-btn next-btn ">Next</SiteButton>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
