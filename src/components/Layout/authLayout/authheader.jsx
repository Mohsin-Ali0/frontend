import React, { useState } from "react";
import { Col, Container, Nav, Navbar, Row, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPhone } from "@fortawesome/free-solid-svg-icons";
import SiteButton from "../../Button/button";
import HeaderLogo from "../../../assets/svg/headerlogo";
import "./authheader.css";
export const AuthHeader = () => {
  const [showOffCanvasMenu, setShowOffCanvasMenu] = useState(false);

  const toggleOffCanvasMenu = () => {
    setShowOffCanvasMenu(!showOffCanvasMenu);
  };
  return (
    <React.Fragment>
      <header className="header_main" style={{backgroundColor:"transparent", background:"transparent" , color:"black"}}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="12" className="col-12">
              <Navbar expand="lg" className="siteNav">
                <Navbar.Brand className="me-0" >
                  <Link to="/">
                    <HeaderLogo />
                  </Link>
                </Navbar.Brand>

                <Navbar.Collapse>
                  <Row
                    className="justify-content-around d-flex align-items-center "
                    style={{ width: "100%", boxSizing: "border-box" }}
                    // style={{ boxSizing: "border-box" }}
                  >
                    <Col
                      lg="6"
                      className="d-flex justify-content-end align-items-center"
                    >
                      <Nav
                        // style={{ backgroundColor: "purple" }}
                        className="align-items-lg-center"
                      >
                        <NavLink
                          activeclassname="active"
                          className="me-xl-4 me-lg-3 headertext no-wrap"
                          //   to="/ads"
                        >
                          <FontAwesomeIcon icon={faPhone} color="black" />
                          +1 (000) 000-0000
                        </NavLink>
                      </Nav>
                    </Col>
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
