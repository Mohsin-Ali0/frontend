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
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
export const Banner = () => {
  const navigate = useNavigate();
  const { User } = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target, "submitHandler  Pressed");
    const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    // Do something with the form data, such as send it to a server
    // console.log(formDataObject);
    console.log(formDataObject, "asdasdsa");
    // console.log(e.nativeEvent.submitter.name, "submitHandler  Pressed");

    navigate("/channels");
    localStorage.setItem("url", JSON.stringify(formDataObject));

    // navigate("/channels", {
    //   state: formDataObject,
    // });

    // navigate(
    //   'thepath',
    //   {
    //     state: {
    //       //...values
    //     }
    //   }
    // })
    // console.log(e.target, "submitHandler  Pressed");
  };
  console.log(User, "User");
  return (
    <React.Fragment>
      <section className="bg_img">
        <Container>
          <Row className="justify-content-around align-items-center mobileresp">
            <Col xl="6">
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

                  <Form onSubmit={submitHandler}>
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
                        style={{ borderLeft: "none", color: "black" }}
                        className="channel-txt-input"
                        placeholder="Enter your youtube channel name or url"
                        name="url"
                        autoComplete="off"
                      />
                    </InputGroup>

                    <Row className="justify-content-around py-3">
                      <Col xl="6" className="py-3">
                        <Button
                          variant="primary"
                          className="py-2 px-5 getstartedbtn"
                          // onClick={getStarted}
                          type="submit"
                          name="getstarted"
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
                      {User ? (
                        <Col xl="6" className="py-3"></Col>
                      ) : (
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
                            type="submit"
                            name="signup"
                            // onClick={Signup}
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
                      )}
                    </Row>
                  </Form>
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
