import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Navbar, Row, Offcanvas } from "react-bootstrap";
import { Link, NavLink, useNavigation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import SiteButton from "../Button/button";
import HeaderLogo from "../../assets/svg/headerlogo";
import useAuth from "../../hooks/useAuth";
import usePageTitle from "../../hooks/usePageTitle";

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
    window.location.reload();
  };
  useEffect(() => {
    console.log(User);
    if (User) {
      setCheckAuth(true);
      console.log(checkAuth, "checkAuth");
      console.log(User, "User");
    }
  }, [User]);

  return (
    <React.Fragment>
      <header className="header_main">
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" className="col-12">
              <Navbar expand="lg" className="siteNav">
                <Navbar.Brand className="me-0">
                  <Link to="/">
                    <HeaderLogo />
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
                          to="/"
                        >
                          About Us
                        </NavLink>
                        <NavLink
                          activeclassname="active"
                          className="me-xl-4 me-lg-3 headertext"
                          to="/featured-ads"
                        >
                          Pricing
                        </NavLink>
                        <NavLink
                          activeclassname="active"
                          className="me-xl-4 me-lg-3 headertext"
                          to="/ads"
                        >
                          FAQ
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
                          <NavLink
                            activeclassname="active"
                            className="me-xl-4 me-lg-3 m-2 headertext no-wrap"
                            onClick={HandleLogout}
                          >
                            <FontAwesomeIcon
                              icon={faRightFromBracket}
                              style={{ color: "white" }}
                            />
                          </NavLink>
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
                            to="/login"
                          >
                            <SiteButton
                              className="signinbtn "
                              onClick={toggleOffCanvasMenu}
                            >
                              Sign Up
                            </SiteButton>
                          </NavLink>
                        </Nav>
                      </Col>
                    )}
                  </Row>
                </Navbar.Collapse>
                <SiteButton
                  className="transparent-btn p-xl d-lg-none"
                  onClick={toggleOffCanvasMenu}
                  style={{ backgroundColor: "orange" }}
                >
                  <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
                </SiteButton>
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
          <Offcanvas.Body className="mob-menu">
            <Nav className="flex-column">
              <NavLink
                // exact
                activeclassname="active"
                className="me-xl-4 me-lg-3"
                to="/"
              >
                Home
              </NavLink>
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
                to="/featured-ads"
              >
                Featured Ads
              </NavLink>
              <NavLink
                activeclassname="active"
                className="me-xl-4 me-lg-3"
                to="/ads"
              >
                Ads
              </NavLink>
              <NavLink
                activeclassname="active"
                className="me-xl-4 me-lg-3"
                to="/contact-us"
              >
                Contact Us
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </React.Fragment>
  );
};
