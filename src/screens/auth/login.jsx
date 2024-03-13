import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./login.css";
import { Button, Form, Image } from "react-bootstrap";
import { AuthLayout } from "../../components/Layout/authLayout";
import SiteButton from "../../components/Button/button";
import usePageTitle from "../../hooks/usePageTitle";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { GoogleIcon } from "../../assets/images";

const UserLogIn = () => {
  usePageTitle("Login");

  const navigate = useNavigate();
  const { setRole } = useAuth();
  const [formData, setFormData] = useState({});
  const [load, setLoad] = useState(false);

  const handleLogin = async (e) => {
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
        <div className="buttonscontainer">
          <button className="googlebtn">
            <Image src={GoogleIcon} fluid />
            Sign in with google
          </button>
        </div>
        <div id="response"></div>
        <Form onSubmit={handleLogin}>
          <input
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
          />
          <div className="d-flex align-items-baseline justify-content-between mt-1">
            <div className="checkBox">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                className="me-1"
              />
              <label htmlFor="rememberMe" className="d-grey-color">
                Remember Me
              </label>
            </div>
            <Link
              to={"/forget-password"}
              className="d-grey-color text-decoration-underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-4 text-center">
            <SiteButton type="submit" className="site-btn" load={load}>
              Login
            </SiteButton>
          </div>
          <div className="mt-3 text-center">
            <p className="fw-bold text-black">
              Don't Have An Account
              <span className="ms-2">
                <Link className="text-decoration-none" to="/signup">
                  Signup
                </Link>
              </span>
            </p>
          </div>
        </Form>
      </AuthLayout>
    </>
  );
};

export default UserLogIn;
