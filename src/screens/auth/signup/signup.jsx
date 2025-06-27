import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import "./signup.css";
import { Col, Form, Image, Row } from "react-bootstrap";
import { AuthLayout } from "../../../components/Layout/authLayout";
import { GoogleIcon } from "../../../assets/images";
import CustomInput from "../../../components/CustomInput";
import SiteButton from "../../../components/Button/button";
import usePageTitle from "../../../hooks/usePageTitle";

const SignUp = () => {
  usePageTitle("Sign Up");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/"; // Default to dashboard if no previous path

  const [formData, setFormData] = useState({});
  const [load, setLoad] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [updatesChecked, setUpdatesChecked] = useState(false);
  const [ErrorData, setErrorData] = useState({});

  const handleGoogleLogin = () => {
    // Redirect to the backend route for Google Login
    window.open("http://localhost:3004/auth/google", "_self");
    // window.open("https://backend.vidtrial.com/auth/google", "_self");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoad(true);
    setErrorData({ ...ErrorData, type: false });
    if (formData.email && formData.password && formData.firstName && formData.lastName && termsChecked) {
      setLoad(false);
      await axios
        .post("/auth/signup", formData)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.data);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.data}`;
          // navigate("/");
          navigate(from, { replace: true });
        })
        .catch((err) => {
          console.log(err);
          setErrorData({
            ...ErrorData,
            type: true,
            message: err.response.data.message,
          });
        }).finally(() => {
          setLoad(false);
        }
        );
    } else {
      setErrorData({
        ...ErrorData,
        type: true,
        message: "Please Fill All the fields",
      });
      setLoad(false);
    }
  };

  return (
    <>
      <AuthLayout authTitle="Sign Up" authPara="Sign In">
        <div className="buttonscontainer" onClick={handleGoogleLogin}>
          <button className="googlebtn">
            <Image src={GoogleIcon} className="googleicon" fluid />
            Sign in with google
          </button>
        </div>
        <div className="breakcontainer">
          <hr className="hrbar mob-resp" />
          <span className="mob-resp">or</span>
          <hr className="hrbar  mob-resp" />
        </div>
        {ErrorData.type ? (
          <div className="alert alert-danger" role="alert">
            <strong>Oops! </strong>
            {ErrorData.message}
          </div>
        ) : null}
        <Form onSubmit={handleLogin}>
          <Row className="d-flex justify-content-between">
            <Col md={6} sm={12} xs={12} className="d-flex flex-column ">
              <CustomInput
                label="First Name"
                labelClass="mainLabel bold mob-resp"
                type="text"
                id="firstName"
                placeholder="Enter your First Name"
                inputClass="mainInput"
                onChange={(e) => {
                  setFormData({ ...formData, firstName: e.target.value });
                  setErrorData({ ...ErrorData, type: false });
                }}
              />
            </Col>
            <Col md={6} sm={12} xs={12} className="d-flex flex-column">
              <CustomInput
                label="Last Name"
                labelClass="mainLabel bold mob-resp"
                type="text"
                id="lastName"
                placeholder="Enter your Last Name"
                inputClass="mainInput"
                onChange={(e) => {
                  setFormData({ ...formData, lastName: e.target.value });
                  setErrorData({ ...ErrorData, type: false });
                }}
              />
            </Col>
          </Row>
          <CustomInput
            label="Email"
            labelClass="mainLabel bold mob-resp"
            type="email"
            id="email"
            placeholder="Enter your Email Address"
            inputClass="mainInput"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setErrorData({ ...ErrorData, type: false });
            }}
          />
          <CustomInput
            label="Password"
            labelClass="mainLabel bold mob-resp"
            type="password"
            id="password"
            placeholder="Enter your password"
            inputClass="mainInput "
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              setErrorData({ ...ErrorData, type: false });
            }}
          />

         
          <div className="custom-checkboxes mt-2 mb-2">
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label={
                  <span>
                    I agree to the{" "}
                    <a href="/terms-and-service">Terms & Service</a>
                  </span>
                }
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox2">
              <Form.Check
                type="checkbox"
                label="Keep me updated about my promotions, channel performance and Providgate news"
                checked={updatesChecked}
                onChange={(e) => setUpdatesChecked(e.target.checked)}
              />
            </Form.Group>
          </div>
          <div className="mt-1 text-center">
            <SiteButton
              type="submit"
              className="site-btn"
              style={{ width: "100%" }}
              load={load}
            >
              Login
            </SiteButton>
          </div>
          <p
            style={{
              fontFamily: "Inter",
              fontStyle: "italic",
              // color: "#2E2F35",
              textAlign: "center",
            }}
            className="pt-5  mob-resp"
          >
            By signing up, I agree to VidTrial's{" "}
            <a href="/terms-and-services"> Terms of Service</a> and{" "}
            <a href="/privacy-policy"> Privacy Policy.</a>
          </p>
        </Form>
      </AuthLayout>
    </>
  );
};

export default SignUp;
