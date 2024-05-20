import React from "react";
import "./views.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  YoutubeLogoIcon,
  HeartIcon,
  EyeIcon,
  UsersIcon,
} from "../../../assets/images/index";

export const Views = () => {
  return (
    <React.Fragment>
      <section className="view-bg_img">
        <Container>
          <Row className="justify-content-around align-items-center txt-color">
            <Col xl="5">
              <h2>
                Achievement Designed For{" "}
                <span style={{ color: "#139DFF" }}>YouTube Creators </span>{" "}
                <br />
              </h2>
              <p>Your Innovation Driven YouTube Promotion Tool </p>
            </Col>
            <Col xl="6" className="pt-4">
              <Row className="justify-content-around align-items-center">
                <Col xl="5">
                  <Row className="justify-content-around align-items-start ">
                    <Col xl="4">
                      <div style={{ maxWidth: "400px", maxHeight: "200px" }}>
                        <img
                          src={YoutubeLogoIcon}
                          alt=""
                          className="img-fluid"
                          style={{ maxWidth: "100%", maxHeight: "100%" }}
                        />
                      </div>
                    </Col>
                    <Col xl="8">
                      <h1>
                        125K<span className="plusIcon">+</span>
                      </h1>
                      <p>YouTube Videos Promoted</p>
                    </Col>
                  </Row>
                </Col>
                <Col xl="5">
                  <Row className="justify-content-around align-items-start ">
                    <Col xl="4">
                      <img src={UsersIcon} alt="" className="img-fluid" />
                    </Col>
                    <Col xl="8">
                      <h1>
                        5M<span className="plusIcon">+</span>
                      </h1>
                      <p>Subscribers Added</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-around align-items-center">
                <Col xl="5">
                  <Row className="justify-content-around align-items-start ">
                    <Col xl="4">
                      <img src={EyeIcon} alt="" className="img-fluid" />
                    </Col>
                    <Col xl="8">
                      <h1>
                        7K<span className="plusIcon">+</span>
                      </h1>
                      <p> Views Generated</p>
                    </Col>
                  </Row>
                </Col>
                <Col xl="5">
                  <Row className="justify-content-around align-items-start ">
                    <Col xl="4">
                      <img src={HeartIcon} alt="" className="img-fluid" />
                    </Col>
                    <Col xl="8">
                      <h1>
                        124<span className="plusIcon">+</span>
                      </h1>
                      <p>YouTube Channels Boosted </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
