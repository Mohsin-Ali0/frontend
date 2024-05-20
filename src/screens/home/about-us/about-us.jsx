import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./about-us.css";

export const AboutUs = () => {
  return (
    <React.Fragment>
      <section className="reviews-bg">
        <Container>
          <Row className="justify-content-around align-items-center pt-4 pb-5">
            <Col xl="4">
              <h2 className=" pt-3 pb-3">
                Built for <span className="bluetxt">Reliability</span>
              </h2>
              <p className="p-txt">
                “Crafted with unwavering dependability in mind, VidTrial is
                engineered to deliver consistent Ad marketing, ensuring reliable
                performance for every campaign and seamless user experiences.”
              </p>
            </Col>
            <Col xl="4">
              <h2 className=" pt-3 pb-3">
                Designed for <span className="bluetxt">Efficiency</span>
              </h2>
              <p className="p-txt">
                “ Precision-engineered for optimal efficiency, VidTrial
                automates promotions, maximizes productivity, and minimizes
                resource consumption, empowering you to improve ROI, subscriber
                growth & video views.”
              </p>
            </Col>
            <Col xl="4">
              <h2 className=" pt-3 pb-3">
                Optimized for Ease of<span className="bluetxt"> Use</span>
              </h2>
              <p className="p-txt">
                “VidTrial is intuitively designed for effortless navigation,
                simplifying YouTube promotions and providing a seamless user
                experience harnessing marketing automation and data insights.”
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
