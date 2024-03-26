// import React, { useState } from "react";
// import {
//   Col,
//   Container,
//   Nav,
//   Navbar,
//   Row,
//   Offcanvas,
//   Dropdown,
// } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBars,
//   faEllipsisV,
//   faSignOut,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import SiteButton from "../../../Button/button";
// import { HeaderLogo, HeartLogo, LogoBlack } from "../../../../assets/svg";
// import "./header.css";

// export const LoggedInHeader = () => {
//   const [showOffCanvasMenu, setShowOffCanvasMenu] = useState(false);

//   const toggleOffCanvasMenu = () => {
//     setShowOffCanvasMenu(!showOffCanvasMenu);
//   };

//   return (
//     <React.Fragment>
//       <header className="customHeader">
//         <Container>
//           <Row className="justify-content-center">
//             <Col lg="12" className="col-12">
//               <Navbar expand="lg" className="siteNav">
//                 <Navbar.Brand className="me-0">
// <Link to="/">
//   <LogoBlack />
// </Link>
//                 </Navbar.Brand>

//                 <Navbar.Collapse
//                 >
//                   <Row
//                     className="justify-content-end d-flex align-items-center "
//                     style={{ width: "100%" }}
//                     // style={{ boxSizing: "border-box" }}
//                   >
//                     <Col
//                       lg="6"
//                       className="d-flex justify-content-end align-items-center"
//                       style={{
//                         boxSizing: "border-box",
//                         backgroundColor: "purple",
//                       }}
//                     >
//                       <Nav
//                         style={{ backgroundColor: "pink" }}
//                         className="align-items-lg-center"
//                       >
//                         <NavLink
//                           activeclassname="active"
//                           className="me-xl-4 me-lg-3 headertext no-wrap"
//                           // to="/login"
//                         >
//                           <Dropdown className="userDropdown">
//                             <Dropdown.Toggle
//                               variant="transparent"
//                               className="notButton toggleButton "
//                             >
//                               <div className="userImage">
//                                 <img
//                                   // src={SERVER_URL + profile.avatar}
//                                   src={HeaderLogo}
//                                   alt=""
//                                   className="img-fluid me-2"
//                                 />
//                               </div>
//                               <span className="me-2">
//                                 {/* {profile.first_name + " " + profile.last_name} */}
//                                 asdfsadfasdfxcvzxc
//                               </span>
//                             </Dropdown.Toggle>
//                             <Dropdown.Menu className="userMenu" align="end">
//                               <Link
//                                 className="userMenuItem"
//                                 to={"/admin/my-profile"}
//                               >
//                                 <FontAwesomeIcon
//                                   className="me-2 yellow-text"
//                                   icon={faUser}
//                                 />
//                                 My Profile
//                               </Link>
//                               <Link
//                                 className="userMenuItem"
//                                 // onClick={() => setShowModal(true)}
//                               >
//                                 <FontAwesomeIcon
//                                   className="me-1 yellow-text"
//                                   icon={faSignOut}
//                                 />
//                                 Logout
//                               </Link>
//                             </Dropdown.Menu>
//                           </Dropdown>
//                         </NavLink>
//                       </Nav>
//                     </Col>
//                   </Row>
//                 </Navbar.Collapse>
//                 <Navbar.Toggle className="order-4 order-lg-2 notButton">
//                   <FontAwesomeIcon className="bell-icon " icon={faEllipsisV} />
//                 </Navbar.Toggle>
//               </Navbar>
//             </Col>
//           </Row>
//         </Container>
//       </header>
//     </React.Fragment>
//   );
// };

import "./header.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Image,
  Offcanvas,
  NavLink,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faBars,
  faEllipsisV,
  faSignOut,
  faBaby,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { logo } from "../../../../assets/images/fourIcon.png";
import SiteButton from "../../../Button/button";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import {
  ArrowDown,
  ArrowUp,
  GoogleIcon,
  ProfilePic,
} from "../../../../assets/images";
import HeaderLogo from "../../../../assets/svg/headerlogoblack";

export const LoggedInHeader = (props) => {
  const navigate = useNavigate();
  const { clearRole } = useAuth();
  const [notificationState, setNotificationState] = useState([]);
  const [profile, setProfile] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showYesButton, setShowYesButton] = useState(true);
  const [showNoButton, setShowNoButton] = useState(true);
  const [isOpen, setisOpen] = useState(false);
  const [showOffCanvasMenu, setShowOffCanvasMenu] = useState(false);

  const toggleOffCanvasMenu = () => {
    setShowOffCanvasMenu(!showOffCanvasMenu);
  };

  useEffect(() => {
    // let user = JSON.parse(localStorage.getItem('user'));
    // setProfile(user);
    // setNotificationState(notifificationData);
  }, []);
  const ToggleIcon = () => {
    setisOpen(!isOpen);
    // alert("asdasdasdasd");
  };
  const handleLogout = async () => {
    localStorage.clear();
  };

  return (
    <header className="customHeader">
      <Navbar expand="md">
        <Container>
          <Navbar.Brand className="me-0">
            <Link to="/">
              <HeaderLogo />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className="order-4 order-lg-2 notButton">
            <FontAwesomeIcon
              className="bell-icon "
              icon={faEllipsisV}
              onClick={toggleOffCanvasMenu}
            />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="customCollapse order-3"
            // style={{ backgroundColor: "palegoldenrod" }}
          >
            <Nav className="ms-auto">
              <Dropdown
                className="userDropdown"
                show={isOpen}
                onToggle={(e) => setisOpen(e)}
                onClick={ToggleIcon}
              >
                <Dropdown.Toggle
                  variant="transparent"
                  className="notButton toggleButton "
                  // style={{ backgroundColor: "pink" }}
                >
                  <div className="userImage">
                    <img src={ProfilePic} alt="" className="img-fluid me-2" />
                  </div>
                  <span className="me-2">
                    {/* {profile.first_name + " " + profile.last_name} */}
                    profile name
                  </span>
                  <div className="userImage">
                    <Image
                      src={isOpen ? ArrowUp : ArrowDown}
                      style={{ width: "20px" }}
                    />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="userMenu" align="end">
                  <Link className="userMenuItem" to={"/admin/my-profile"}>
                    <FontAwesomeIcon
                      className="me-2 yellow-text"
                      icon={faUser}
                    />
                    My Profile
                  </Link>
                  <Link
                    className="userMenuItem"
                    to="/"
                    onClick={() => handleLogout()}
                  >
                    <FontAwesomeIcon
                      className="me-1 yellow-text"
                      icon={faSignOut}
                    />
                    Logout
                  </Link>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
  );
};
