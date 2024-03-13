import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./promotion-forecast.css";
import SiteButton from "../../../components/Button/button";
import { BudgetCard } from "../../../components/Slider/slider";

export const Promotionforecast = () => {
  return (
    <React.Fragment>
      <section className="reviews-bg">
        <Container>
          <Row className="justify-content-center align-items-center mb-5 pt-5 pb-5 color-black">
            <Col xl="5" style={{ textAlign: "center" }}>
              <h1 className="bluetxt pb-3">Promotion Forecast</h1>
              <p style={{ color: "grey" }}>
                We use only official tools recommended by YouTube. That's why
                views, interactions, subscribers will be real and interested in
                your content
              </p>
            </Col>
            <Col xl="12" className="pt-4">
              <BudgetCard />
            </Col>
            <Row className="justify-content-center align-items-center mb-5 pt-5 pb-5 color-black">
              <Col xl="2">
                <SiteButton className="site-btn">Start Promotion</SiteButton>
              </Col>
              <Col xl="8">
                <p
                  style={{
                    color: "grey",
                    textAlign: "center",
                    marginTop: "2%",
                  }}
                >
                  Views forecast mostly depends on the content of your channel.
                  Please keep it interesting.
                </p>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
