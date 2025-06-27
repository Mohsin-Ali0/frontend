import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Offcanvas,
  Image,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import SiteButton from "../Button/button";
import HeaderLogoImg from "../../assets/images/logo-light.png";

import useAuth from "../../hooks/useAuth";
import usePageTitle from "../../hooks/usePageTitle";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
// import "../Client.module.css";
export const SiteHeader = () => {
  usePageTitle("Home");
  const { User } = useAuth();
  const [showOffCanvasMenu, setShowOffCanvasMenu] = useState(false);
  const [checkAuth, setCheckAuth] = useState(false);

  const toggleOffCanvasMenu = () => {
    setShowOffCanvasMenu(!showOffCanvasMenu);
  };

  const HandleLogout = () => {
    localStorage.clear();
    Cookies.remove();

    window.location.href = "/";
  };
  useEffect(() => {
    if (User) {
      setCheckAuth(true);
    }
  }, [User]);



  const showAlert = () => {
    Swal.fire({
      title: "Are you Sure You Want to Logout?",
      icon: "warning",
      confirmButtonText: "OK",
    }).then((result) => {
      // After user clicks OK button
      if (result.isConfirmed) {
        HandleLogout(); // Close the modal by setting state to false
      }
    });
  };


  return (
    <React.Fragment>
      <header className="header_main">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" className="col-12">
              <Navbar expand="lg" className="siteNav">
                <Navbar.Brand className="me-0">
                  <Link to="/">
                    <Image src={HeaderLogoImg} height={50} width={170} />
                  </Link>
                </Navbar.Brand>

                <Navbar.Collapse>
                  <Row
                    className="justify-content-around d-flex align-items-center "
                    style={{ width: "100%", boxSizing: "border-box" }}
                  >
                    <Col lg="5">
                      <Nav className="mx-auto align-items-lg-center align-items-start position-relative d-lg-flex">
                        <NavLink
                          activeclassname="active"
                          className="me-xl-4 me-lg-3 headertext"
                          to="/about-us"
                        >
                          About Us
                        </NavLink>
                        <NavLink
                          activeclassname="active"
                          className="me-xl-4 me-lg-3 headertext"
                          to="/privacy-policy"
                        >
                          Privacy Policy
                        </NavLink>
                        <NavLink
                          activeclassname="active"
                          className="me-xl-4 me-lg-3 headertext"
                          to="/terms-and-services"
                        >
                          TOS
                        </NavLink>
                      </Nav>
                    </Col>

                    {checkAuth ? (
                      <Col
                        lg="6"
                        className="d-flex justify-content-end align-items-center"
                        style={{ boxSizing: "border-box" }}
                      >
                        <Nav className="align-items-lg-center">
                          <a
                            className="me-xl-4 me-lg-3 headertext no-wrap"
                            href="tel:+10000000000"
                          >
                            +1 (000) 000-0000
                          </a>
                          <NavLink
                            activeclassname="active"
                            className="me-xl-4 me-lg-3 headertext no-wrap"
                            to="/channels"
                          >
                            <SiteButton
                              className="signinbtn "
                              // onClick={toggleOffCanvasMenu}
                              to="/channel"
                            >
                              DashBoard
                            </SiteButton>
                          </NavLink>

                          <a
                            activeclassname="active"
                            className="me-xl-4 me-lg-3 m-2 headertext no-wrap"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              showAlert();
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faRightFromBracket}
                              style={{ color: "white" }}
                            />
                          </a>
                        
                        </Nav>
                      </Col>
                    ) : (
                      <Col
                        lg="6"
                        className="d-flex justify-content-end align-items-center"
                        style={{ boxSizing: "border-box" }}
                      >
                        <Nav className="align-items-lg-center">
                          <NavLink
                            activeclassname="active"
                            className="me-xl-4 me-lg-3 headertext no-wrap"
                            to="/ads"
                          >
                            +1 (000) 000-0000
                          </NavLink>
                          <NavLink
                            activeclassname="active"
                            className="me-xl-4 me-lg-3 headertext no-wrap"
                            to="/login"
                          >
                            Sign In
                          </NavLink>

                          <NavLink
                            activeclassname="active"
                            className="me-xl-4 me-lg-3 headertext no-wrap"
                            to="/signup"
                          >
                            <SiteButton
                              className="signinbtn "
                            // onClick={toggleOffCanvasMenu}
                            >
                              Sign Up
                            </SiteButton>
                          </NavLink>
                        </Nav>
                      </Col>
                    )}
                  </Row>
                </Navbar.Collapse>



                <input id="customCheckbox" type="checkbox" onClick={toggleOffCanvasMenu} />
                <label className="customToggle transparent-btn p-xl d-lg-none" htmlFor="customCheckbox">
                  <div id="customBar1" className="customBars"></div>
                  <div id="customBar2" className="customBars"></div>
                  <div id="customBar3" className="customBars"></div>
                </label>
              </Navbar>
            </Col>
          </Row>
        </Container>
        {/* Mobile Sidebar */}
        <Offcanvas
          show={showOffCanvasMenu}
          onHide={toggleOffCanvasMenu}
          className="off-convas-header"
        >
          <Offcanvas.Header closeButton className="position-relative ">
            <Offcanvas.Title>
              <h2>Menu</h2>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            className="mob-menu"

          >
            <Nav className="flex-column">
              <NavLink
                activeclassname="active"
                className="me-xl-4 me-lg-3"
                to="/about-us"
              >
                About Us
              </NavLink>
              <NavLink
                activeclassname="active"
                className="me-xl-4 me-lg-3"
                to="/privacy-policy"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                activeclassname="active"
                className="me-xl-4 me-lg-3"
                to="/terms-and-services"
              >
                Terms & Service
              </NavLink>


              {checkAuth ? (<>
                <NavLink
                  activeclassname="active"
                  className="me-xl-4 me-lg-3"
                  to="/channels"
                >
                  DashBoard
                </NavLink>

                <a
                  className="me-xl-4 me-lg-3"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showAlert();
                  }}
                >
                  Logout
                </a>

              </>) : (
                <>
                  <NavLink
                    activeclassname="active"
                    className="me-xl-4 me-lg-3"
                    to="/login"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    activeclassname="active"
                    className="me-xl-4 me-lg-3"
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                </>
              )}
              <a
                className="me-xl-4 me-lg-3 headertext no-wrap"
                href="mailto:contact@Vidtrial.com"
              >
                Contact Us
              </a>

            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </React.Fragment>
  );
};



