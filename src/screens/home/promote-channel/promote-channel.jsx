import React from "react";
import "./promote-channel.css";
import { Col, Container, Row } from "react-bootstrap";
import SiteButton from "../../../components/Button/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PromoteChanel = () => {
  return (
    <React.Fragment>
      <section className="pormote-channel-bg">
        <Container>
          <Row className="justify-content-center align-items-center mb-5 mt-5 txt-color">
            <Col
              lg="8"
              className=" d-flex flex-column justify-content-center  align-items-center text-align-center"
            >
              <h1 className="promote-heading-align">
                Promote your YouTube channel now
              </h1>
              <p className="promote-p-align">
                YouTube Ads only Real subscribers, views and likes Start as low
                as $49 per week
              </p>
              <SiteButton
                className="site-btn prmote-btn"
                style={{ width: "20px" }}
              >
                Start Promotion
              </SiteButton>

              <a
                href="gooogle.com"
                style={{
                  paddingTop: "5%",
                }}
              >
                or sign up with youtube
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="promote-arrow-align"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
