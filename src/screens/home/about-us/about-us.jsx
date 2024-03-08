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
              <h1 className=" pt-3 pb-3">
                We are <span className="bluetxt">Reliable</span>
              </h1>
              <p className="p-txt">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus.”
              </p>
            </Col>
            <Col xl="4">
              <h1 className=" pt-3 pb-3">
                We are <span className="bluetxt">Efficinent</span>
              </h1>
              <p className="p-txt">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus.”
              </p>
            </Col>
            <Col xl="4">
              <h1 className=" pt-3 pb-3">
                Easy to <span className="bluetxt">Use</span>
              </h1>
              <p className="p-txt">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus.”
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
