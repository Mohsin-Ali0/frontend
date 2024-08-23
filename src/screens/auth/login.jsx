import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./login.css";
import { Form, Image } from "react-bootstrap";
import { AuthLayout } from "../../components/Layout/authLayout";
import SiteButton from "../../components/Button/button";
import usePageTitle from "../../hooks/usePageTitle";
import { GoogleIcon } from "../../assets/images";
import CustomInput from "../../components/CustomInput";

const UserLogIn = () => {
  usePageTitle("Login");

  const navigate = useNavigate();
  // const { setRole } = useAuth();
  const [formData, setFormData] = useState({});
  const [load, setLoad] = useState(false);
  const [ErrorData, setErrorData] = useState({});

  const handleGoogleLogin = () => {
    // Redirect to the backend route for Google Login
    window.open("http://localhost:3004/auth/google", "_self");
    // window.open("https://backend.vidtrial.com/auth/google", "_self");
  };

  const handleLogin = async (e) => {
    setLoad(true);
    if (formData.email && formData.password) {
      e.preventDefault();
      setErrorData({ ...ErrorData, type: false });
      // setLoad(true);
      console.log(formData, "formData");
      let resp = await axios
        .post("/auth/signin", formData)
        .then((response) => {
          console.log(response.data, "response.data");
          localStorage.setItem("token", response.data.data);
          setTimeout(() => {
            setLoad(false);
            navigate("/");
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${response.data.data.token}`;
          }, 1000);
        })
        .catch((error) => {
          console.log(error.response, "CATCH");
          setErrorData({
            ...ErrorData,
            type: true,
            message: error.response.data.message,
          });

          setLoad(false);
        });
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
      <AuthLayout authTitle="Sign In" authPara="Sign Up">
        <div className="buttonscontainer ">
          <button className="googlebtn" onClick={handleGoogleLogin}>
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
            <strong>Opss! </strong>
            {ErrorData.message}
          </div>
        ) : null}
        <Form onSubmit={handleLogin}>
          <CustomInput
            label="Email"
            labelClass="mainLabel bold mob-resp"
            type="email"
            id="email"
            placeholder="Enter your Email Address"
            inputClass="mainInput"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <CustomInput
            label="Password"
            labelClass="mainLabel bold mob-resp"
            type="password"
            id="password"
            placeholder="Enter your password"
            inputClass="mainInput "
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {/* <input
            label="Email Address"
            type="email"
            id="userEmail"
            placeholder="Enter Your Email Address"
            required
            labelClass="mainLabel"
            inputClass="mainInput"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            label="Password"
            type="password"
            id="pass"
            placeholder="Enter Password"
            required
            labelClass="mainLabel"
            inputClass="mainInput"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          /> */}
          <div className="d-flex align-items-baseline justify-content-between mt-1">
            <Link
              to={"/forget-password"}
              style={{ color: "#139DFF" }}
              className="text-decoration-underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4 text-center">
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

export default UserLogIn;
