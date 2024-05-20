import React from "react";
import "./promote-channel.css";
import { Col, Container, Row } from "react-bootstrap";
import SiteButton from "../../../components/Button/button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export const PromoteChanel = () => {
  const navigate = useNavigate();
  const { User } = useAuth();
  const submitHandler = (e) => {
    if (User) {
      e.preventDefault();

      navigate("/channels");
    } else {
      navigate("/login");
    }
  };

  const handleGoogleLogin = () => {
    // Redirect to the backend route for Google Login
    // window.open("http://localhost:3004/auth/google", "_self");
    window.open("https://backend.vidtrial.com/auth/google", "_self");
  };
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
                Kick Off Your YouTube Promotion In Style
              </h1>
              <p className="promote-p-align">
                Real Views, Real Subscribers Gain A Global Followership For As
                Low As $49 Per Week
              </p>
              <SiteButton
                className="site-btn prmote-btn"
                // style={{ width: "40%" }}
                onClick={submitHandler}
              >
                Start Promotion
              </SiteButton>
              {User ? null : (
                <a
                  href="#GoogleSignIn"
                  onClick={handleGoogleLogin}
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
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
