import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import SiteButton from "../../../components/Button/button";
import "./start-promoting.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ArrowUPIcon } from "../../../assets/images";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

export const StartPromoting = () => {
  const navigate = useNavigate();
  const { User } = useAuth();

  const submitHandler = (e) => {
    if (User) {
      e.preventDefault();
      console.log(e.target, "submitHandler  Pressed");
      const formData = new FormData(e.target);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });

      console.log(formDataObject, "asdasdsa");
      navigate("/channels");
      localStorage.setItem("url", JSON.stringify(formDataObject));
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
      <section className="reviews-bg">
        <Container>
          <Row className="justify-content-center align-items-center mb-5 pt-5 pb-5 color-black">
            <Col
              lg="12"
              style={{ textAlign: "center" }}
              className=" d-flex flex-column justify-content-center align-items-center text-align-center"
            >
              <h1 style={{ color: "#139DFF", width: "80%" }}>
                We will show your channel to your target audience directly on
                YouTube! Start at $39 per week
              </h1>

              <Row className="justify-content-center align-items-center d-flex start-promoting-row">
                <Col
                  lg="12"
                  className="justify-content-center d-flex flex-column pt-5 position-relative"
                >
                  <Form
                    onSubmit={submitHandler}
                    id="dekstop"
                    className="input-dekstop-resp"
                  >
                    <InputGroup className="mb-3 start-prmoting-shadow">
                      <InputGroup.Text className="start-prmoting-input">
                        <FontAwesomeIcon
                          icon={faYoutube}
                          style={{ color: "#FF0000" }}
                          size="2x"
                        />
                      </InputGroup.Text>
                      <FormControl
                        className="start-prmoting-input"
                        placeholder="Enter your youtube channel name or url"
                        name="url"
                        autoComplete="off"
                      />
                      <InputGroup.Text className="start-prmoting-input">
                        <SiteButton
                          className="site-btn start-prmoting-btn "
                          // style={{ width: "20px" }}
                          type="submit"
                        >
                          Start Promotion
                        </SiteButton>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form>

                  <Form onSubmit={submitHandler} className="input-mobile-resp">
                    <InputGroup className="mb-3 start-prmoting-shadow">
                      <InputGroup.Text className="start-prmoting-input">
                        <FontAwesomeIcon
                          icon={faYoutube}
                          style={{ color: "#FF0000" }}
                          size="2x"
                        />
                      </InputGroup.Text>
                      <FormControl
                        className="start-prmoting-input"
                        placeholder="Enter your youtube channel name or url"
                        name="url"
                        autoComplete="off"
                      />
                      <InputGroup.Text className="start-prmoting-input"></InputGroup.Text>
                    </InputGroup>
                    <SiteButton
                      className="site-btn start-prmoting-btn "
                      type="submit"
                      // style={{ width: "20px" }}
                    >
                      Start Promotion
                    </SiteButton>
                  </Form>
                  {User ? (
                    <div
                      href="#SignInGoogle"
                      style={{
                        color: "black",
                        alignSelf: "center",
                        marginTop: "5%",
                      }}
                    >
                      <br />
                    </div>
                  ) : (
                    <a
                      href="#SignInGoogle"
                      style={{
                        color: "black",
                        alignSelf: "center",
                        marginTop: "5%",
                      }}
                      onClick={handleGoogleLogin}
                    >
                      or sign up with youtube
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="promote-arrow-align"
                        style={{
                          color: "black",
                        }}
                      />
                    </a>
                  )}

                  <Image
                    src={ArrowUPIcon}
                    className="promote-arrow-suggestion"
                  />
                  <p className="promote-p-suggestion">
                    Start promoting your channel right now
                  </p>
                </Col>
              </Row>
              {/* <Row style={{  width: "100%" }}>
                <Col xl="12" style={{ }}>
                  <BudgetCard />
                </Col>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
