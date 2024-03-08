import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { ReviewsIcon, ReviewsLogo } from "../../../assets/images";
import "./reviews.css";
export const Reviews = () => {
  return (
    <React.Fragment>
      <section className="reviews-bg">
        <Container>
          <Row className="justify-content-between flex-column align-items-center pt-5 reviews-txt">
            <Col lg="8" className="justify-content-between flex-column">
              <Row className="justify-content-center align-items-center">
                <Col lg="4">
                  <p style={{ textAlign: "center" }}>REVIEWS</p>
                </Col>
              </Row>
              <h1 style={{ textAlign: "center", color: "#139DFF" }}>
                What Our Users Say <br/> About Us?
              </h1>
            </Col>
            <Col lg="12" className="justify-content-around align-items-flex">
              <Row className="justify-content-center align-items-center flex-row">
                <Col xl="5">
                  <Image
                    src={ReviewsLogo}
                    style={{ height: "auto", width: "100%" }}
                  />
                </Col>
                <Col xl="4">
                  <h2>
                    The Best For YouTube <br /> Channel Grow!
                  </h2>
                  <p style={{ color: "grey" }}>
                    “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                    ultricies. In ultrices malesuada elit mauris etiam odio.
                    Duis tristique lacus, et blandit viverra nisl velit. Sed
                    mattis rhoncus, diam suspendisse sit nunc, gravida eu.
                    Lectus eget eget ac dolor neque lorem sapien, suspendisse
                    aliquam.”
                  </p>
                  <Image
                    src={ReviewsIcon}
                    style={{ height: "auto", width: "40%" }}
                  />
                  <br />
                  <br />
                  <h6>Nick Jonas.</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
