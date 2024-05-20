import React from "react";
import "./boostviews.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { YoutubeViewsIcon } from "../../../assets/images";

export const BoostViews = () => {
  return (
    <React.Fragment>
      <section className="boostview-bg_img txt-color">
        <Container fluid>
          <Row className="justify-content-between flex-column align-items-center pt-5">
            <Col lg="12" style={{ textAlign: "center" }}>
              <h1>Dynamic Video Marketing & Analytics Dashboard</h1>
              <p>
                Improve Channel Visibility | Discover Impressive SEO Meta
                Recommendations | Generate More Views | <br/> Grow Subscribers |
                Monitor Performance From One Innovative Insights Hub
              </p>
            </Col>
            <Col lg="5" style={{ width: "80%" }} className="pt-3 pb-5">
              <Image
                src={YoutubeViewsIcon}
                style={{ height: "auto", width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
