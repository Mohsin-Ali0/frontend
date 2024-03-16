import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./login.css";
import { Form, Image } from "react-bootstrap";
import { AuthLayout } from "../../components/Layout/authLayout";
import SiteButton from "../../components/Button/button";
import usePageTitle from "../../hooks/usePageTitle";
import useAuth from "../../hooks/useAuth";
import { GoogleIcon } from "../../assets/images";
import CustomInput from "../../components/CustomInput";

const UserLogIn = () => {
  usePageTitle("Login");

  const navigate = useNavigate();
  const { setRole } = useAuth();
  const [formData, setFormData] = useState({});
  const [load, setLoad] = useState(false);

  const handleGoogleLogin = () => {
    // Redirect to the backend route for Google Login
    window.open("http://localhost:3004/auth/google", "_self");
  };

  const handleLogin = async (e) => {
    console.log("gelllo");
    return;
    e.preventDefault();
    setLoad(true);

    let resp = await axios
      .post("/login", formData)
      .then((response) => {
        // document.getElementById('response').innerHTML =
        // `<div class="alert alert-success" role="alert"><strong>Success! </strong>${response.data.message}</div>`;

        localStorage.setItem("_token", response.data.data.access_token);
        localStorage.setItem("user", JSON.stringify(response.data.data.user));

        setTimeout(() => {
          document.getElementById("response").hidden = true;
          setRole(response.data.data.user.role_id);
          setLoad(false);
          navigate("/");
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.data.access_token}`;
        }, 1000);
      })
      .catch((error) => {
        document.getElementById(
          "response"
        ).innerHTML = `<div class="alert alert-danger"role="alert"><strong>Opss! </strong>${error.response.data.message}</div>`;
        setLoad(false);
      });
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
        <div id="response"></div>
        <Form onSubmit={handleLogin}>
          <CustomInput
            label="Email"
            labelClass="mainLabel bold mob-resp"
            type="text"
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
              setFormData({ ...formData, email: e.target.value })
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
            By signing up, I agree to LogoIpsum{" "}
            <a href="google.com"> Terms of Service</a> and{" "}
            <a href="google.com"> Privacy Policy.</a>
          </p>
        </Form>
      </AuthLayout>
    </>
  );
};

export default UserLogIn;
