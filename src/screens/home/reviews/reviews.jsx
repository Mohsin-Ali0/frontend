import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ReviewsIcon, ReviewsLogo } from "../../../assets/images";
import "./reviews.css";
export const Reviews = () => {
  return (
    <React.Fragment>
      <section className="reviews-bg">
        <Container>
          <Row className="justify-content-between flex-column align-items-center pt-4 reviews-txt">
            <Col lg="8" className="justify-content-between flex-column">
              <h1 style={{ textAlign: "center", color: "#139DFF" }}>
                User Reviews{" "}
              </h1>
            </Col>
            <Col lg="12" className="justify-content-around align-items-flex">
              <Row className="justify-content-center align-items-center flex-row">
                <Col xl="5" style={{ display:"flex", justifyContent: "center"}}>
                  <Image
                    src={ReviewsLogo}
                    style={{ height: "auto", width: "449px" }}
                  />
                </Col>
                <Col xl="4">
                  <h2>Our Customers Success Stories</h2>
                  <p style={{ color: "grey" }}>
                    “This is so easy to use! - It's such an impressive ad
                    automation service, it grew my account from 800 subscribers
                    to 18,000+ in two months. I'm now working on a paid
                    subscriber campaign for exclusive content. My video views
                    are crossing 40k for every one of my tutorial videos. Very
                    easy to set up, ads run on auto, and i get all the analytics
                    in my youtube analytics and vidtrial panel.”
                  </p>
                  <Image
                    src={ReviewsIcon}
                    style={{ height: "auto", width: "40%" }}
                  />
                  <br />
                  <br />
                  <h6>Nick Horner.</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
