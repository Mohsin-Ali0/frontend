import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faPhone } from "@fortawesome/free-solid-svg-icons";
import { AuthImg } from "../../../assets/images";
import "./style.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import HeaderLogoImg from "../../../assets/images/logo-light.png";

export const AuthLayout = (props) => {
  return (
    <>
      <section className="authBg ">
        <Container fluid>
          <Row className="justify-content-around align-items-center">
            <Col xl="4" lg={4} className="authImage">
              <a href="/" style={{ width: "200px" }}>
                <Image src={HeaderLogoImg} height={50} width={170} />
              </a>
              <div>
                <p style={{ color: "white" }}>
                  “ My channel is finally taking off slowly but surely. It will
                  be a long road but I couldn't do it without VidTrial !“
                </p>
                <br />
                <p style={{ color: "grey" }}>Scott Runolfsdottir</p>
              </div>
            </Col>
            <Col xl="8" lg={8} style={{}} className="authcont">
              <Col xl={12} className="phiconcont mb-4">
                <FontAwesomeIcon icon={faPhone} color="black" />
                &nbsp; +1 (000) 000-0000
              </Col>
              <Col xl={12} className="logoiconcont mb-4 ">
                <a href="/" style={{ width: "200px" }}>
                  <Image src={HeaderLogoImg} height={50} width={170} />
                </a>
              </Col>
              <Col xl={6} lg={8} style={{ alignSelf: "center" }}>
                <div className="authFormHeader">
                  <h1 className="authtitle">{props?.authTitle}</h1>
                  <Link
                    to={props.authPara == "Sign Up" ? "/signup" : "/login"}
                    // to={"/login"}
                    style={{ color: "#139DFF" }}
                    className="text-decoration-underline"
                  >
                    {props?.authPara}
                  </Link>
                </div>
                <div className="fade-in">{props?.children}</div>

                {props?.backOption && (
                  <div className="text-center mt-4">
                    <Link
                      to={"/login"}
                      className=" fw-bold text-decoration-none primary_color"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faLeftLong} />{" "}
                      <span className="ms-2 text-dark">Back To Login </span>{" "}
                    </Link>
                  </div>
                )}
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
  return (
    <>
      {/* <SiteHeader /> */}
      <section className="authBg mentor-mentee">
        <div>
          <div className="row g-0 authBox">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="authImage ment-mentee-img">
                <img src={AuthImg} alt="authImage" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="authFormWrapper">
                <div className="authForm">
                  <div className="authLogo">
                    {/* <img src={logo} alt="authLogo" /> */}
                    <h1>asdsad</h1>
                  </div>
                  <div className="authFormHeader">
                    <h1 className="p-xxl primary_color">{props?.authTitle}</h1>
                    <p className="authPara d-grey-color">{props?.authPara}</p>
                  </div>
                  {props?.children}
                  {props?.backOption && (
                    <div className="text-center mt-4">
                      <Link
                        to={"/login"}
                        className=" fw-bold text-decoration-none primary_color"
                      >
                        {" "}
                        <FontAwesomeIcon icon={faLeftLong} />{" "}
                        <span className="ms-2 text-dark">Back To Login </span>{" "}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
