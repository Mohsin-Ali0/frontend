import "./index.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faBars,
  faEllipsisV,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { LogoBlack } from "../../../../assets/images/index";
// import { SERVER_URL, notifificationData } from "../../config/data";
// import CustomModal from "../../components/customModal";
import SiteButton from "../../../../components/Button/button";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";

export const AdminHeader = (props) => {
  const navigate = useNavigate();
  const { clearRole } = useAuth();
  const [notificationState, setNotificationState] = useState([]);
  const [profile, setProfile] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showYesButton, setShowYesButton] = useState(true);
  const [showNoButton, setShowNoButton] = useState(true);

  useEffect(() => {
    // let user = JSON.parse(localStorage.getItem('user'));
    // setProfile(user);
    // setNotificationState(notifificationData);
  }, []);

  const handleLogout = async () => {
    let logout = await axios
      .post("/logout")
      .then((res) => {
        clearRole();
        localStorage.clear();
        delete axios.defaults.headers.common["Authorization"];
        setShowModal(false);
        navigate("/");
      })
      .catch((err) => console.error(err.response.data));
  };

  return (
    <header>
      <Navbar className="customHeaderAdmin" expand="md">
        <Container fluid>
          <Link to={"/admin/dashboard"} className="siteLogo order-2 order-lg-1">
            <img src={LogoBlack} alt="Logo" />
          </Link>
          <Navbar.Toggle className="order-4 order-lg-2 notButton">
            <FontAwesomeIcon className="bell-icon " icon={faEllipsisV} />
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="customCollapse order-3"
          >
            <Nav className="ms-auto">
              <Dropdown className="notiDropdown me-2 ">
                <Dropdown.Toggle
                  variant="transparent pb-0"
                  className="notButton notifi-btn"
                >
                  <FontAwesomeIcon className="bellIcon" icon={faBell} />
                  <span className="badge">9+</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="notiMenu" align="end">
                  <div className="notificationsBody">
                    <div className="d-flex justify-content-between align-items-baseline pt-3 singleNoti notify-border">
                      <h6 className="fw-bold ">Notifications</h6>
                      <p className="notify-bg">5 New</p>
                    </div>
                    {notificationState.slice(0, 5).map((item) => (
                      <>
                        <div key={item.id}>
                          <Dropdown.Item
                            className="drop_icon"
                            key={item.id}
                            as={Link}
                            to="/admin/notifications"
                          >
                            <div className="d-flex">
                              <div className="mediaLeft">
                                <FontAwesomeIcon
                                  className="bell-icon"
                                  icon={faBell}
                                />
                              </div>
                              <div className="mediaRight">
                                <p className="notificationText mb-2 ">
                                  {item.notPara}
                                </p>
                                <div className="d-md-flex align-items-baseline justify-content-between">
                                  <p className="primaryColor mb-0 ">
                                    {item.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Dropdown.Item>
                        </div>
                      </>
                    ))}
                  </div>
                  <div className="notiFooter">
                    <Link to={"/admin/notifications"}>View All</Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="userDropdown">
                <Dropdown.Toggle
                  variant="transparent"
                  className="notButton toggleButton "
                >
                  <div className="userImage">
                    <img
                      // src={SERVER_URL + profile.avatar}
                      alt=""
                      className="img-fluid me-2"
                    />
                  </div>
                  <span className="me-2">
                    {/* {profile.first_name + " " + profile.last_name} */}
                  </span>
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
                    onClick={() => setShowModal(true)}
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
          <SiteButton className="notButton ms-md-2 order-lg-4 order-md-4 order-1">
            <FontAwesomeIcon
              className="bell-icon"
              onClick={props.sidebarToggle}
              icon={faBars}
            />
          </SiteButton>
        </Container>
      </Navbar>

      {/* <CustomModal
        show={showModal}
        close={() => setShowModal(false)}
        action={handleLogout}
        para="Are You Sure You Want To Logout?"
        showYesNoButtons={showYesButton || showNoButton}
      /> */}
    </header>
  );
};
