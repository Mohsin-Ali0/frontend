import React from "react";
import MobileImg from "../../../assets/images/mobile-img.png";
import "./banner.css";
import {
  Col,
  Container,
  Row,
  Form,
  InputGroup,
  Button,
  FormControl,
  Image,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export const Banner = () => {
 
  return (
    <React.Fragment>
      <section className="bg_img">
        <Container>
          <Row className="justify-content-around align-items-center mobileresp">
            <Col xl="6" >
              <Row className="justify-content-center txt-color">
                <Col xl="12">
                  <div className="bullet-text">
                    <span className="bullet">&#8226;</span> Google Partner
                  </div>
                  <h1>Designed to boost your YouTube views</h1>
                  <p style={{ fontSize: "18px" }}>
                    Get insights and guidance to keep your YouTube channel
                    growing.
                  </p>

                  <Form>
                    <InputGroup className="mb-3">
                      <InputGroup.Text
                        style={{
                          backgroundColor: "white",
                          borderRight: "none",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faYoutube}
                          style={{ color: "#FF0000" }}
                          size="2x"
                        />
                      </InputGroup.Text>
                      <FormControl
                        style={{ backgroundColor: "white", borderLeft: "none" }}
                        placeholder="Enter your youtube channel name or url"
                      />
                    </InputGroup>
                  </Form>

                  <Row className="justify-content-around py-3">
                    <Col xl="6" className="py-3">
                      <Button
                        variant="primary"
                        className="py-2 px-5 getstartedbtn"
                      >
                        Get Started
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "33%",
                          }}
                        />
                      </Button>
                    </Col>
                    <Col xl="6" className="py-3">
                      <Button
                        variant="outline-primary"
                        style={{
                          color: "white",
                          borderColor: "white",
                          width: "80%",
                          height: "3rem",
                          position: "relative",
                          textAlign: "left",
                        }}
                        className="py-2 px-5"
                      >
                        Sign up
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          style={{
                            position: "absolute",
                            right: "10px",
                            top: "33%",
                          }}
                        />
                      </Button>
                    </Col>
                  </Row>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "italic",
                      color: "#F1F1F1",
                    }}
                  >
                    By signing up, I agree to LogoIpsum{" "}
                    <a href="google.com"> Terms of Service</a> <br />
                    and <a href="google.com"> Privacy Policy.</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col
              xl="4"
              style={{
                display: "flex",
                alignItems: "flex-end",
                paddingTop: "10%",
              }}
            >
              <div className="mobile-container">
                <Image src={MobileImg} fluid />
                {/* <MobileLogo/> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
