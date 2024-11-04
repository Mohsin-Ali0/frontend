
import { useState, useEffect } from "react";
import './index.css'
import { Link } from "react-router-dom";
import {
    Navbar,
    Container,
    Nav,
    Dropdown,
    Image,
    Offcanvas,
    NavLink,
    NavDropdown
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser, faSignOut } from "@fortawesome/free-solid-svg-icons";


import { ArrowDown, ArrowUp, ProfilePic } from "../../../../../assets/images";
import HeaderLogo from "../../../../../assets/svg/headerlogoblack";
import HeaderLogoImg from "../../../../../assets/images/logo-dark.png";
import Cookies from "js-cookie";

export const StaticsHeader = ({ ChannelAlldata, selectedChannel, selectChannelfromDropDown }) => {
    console.log("===>", ChannelAlldata)
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
        Cookies.remove("token");
    };

    return (
        <header className="customHeader">
            <Navbar expand="md" sticky="top">

                <Container >
                    <Navbar.Brand className="me-0">
                        <Link to="/">
                            <Image src={HeaderLogoImg} height={50} width={170} />
                        </Link>
                    </Navbar.Brand>



                    <NavDropdown
                        title={
                            <span>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple logo" style={{ width: '20px', marginRight: '8px' }} />
                                {/* {ChannelAlldata[0].ChannelTitle} <FontAwesomeIcon icon={faCaretDown} /> */}
                                {selectedChannel.ChannelTitle} <FontAwesomeIcon icon={faCaretDown} />
                            </span>
                        }
                        id="basic-nav-dropdown"
                        className="ms-4 desktop-channel-dropdown"
                        style={{ minWidth: '200px' }}
                    >
                        {/* <NavDropdown.Item className="d-flex align-items-center" href="#apple">

                            <div className="">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="" style={{ width: '25px', marginRight: '8px' }} />
                                <span>sd</span>
                            </div>

                        // </NavDropdown.Item>
                        // <NavDropdown.Item className="d-flex align-items-center" href="/channels">
                        //     <span className="add-dropdown-icon" style={{ fontSize: '1em', marginRight: '8px', color: '#888' }}>+</span>
                        //     <span>Add Channel</span>

                        // </NavDropdown.Item>
                        <NavDropdown.Item className="d-flex align-items-center" href="#apple">

                            <div className="">
                                <img src="https://dummyimage.com/20x20/ffd700/000000.png&text=B" alt="" style={{ width: '25px', marginRight: '8px' }} />
                                <span> Apple España</span>
                            </div>

                        </NavDropdown.Item> */}

                        {/* <div className="">
                                <img src="https://dummyimage.com/20x20/ffd700/000000.png&text=B" alt="" style={{ width: '25px', marginRight: '8px' }} />
                                <span> Apple España</span>
                                </div> */}


                        <NavDropdown.Item className="d-flex align-items-center" href="/channels">
                            <span className="add-dropdown-icon" style={{ fontSize: '1em', marginRight: '8px', color: '#888' }}>+</span>
                           <span>Add Channel</span>

                         </NavDropdown.Item>

                        {ChannelAlldata.map((item, index) => (
                            <NavDropdown.Item key={index} className="d-flex align-items-center" href="#apple" onClick={() => { selectChannelfromDropDown(item) }}>
                                <div>
                                    <img src="https://dummyimage.com/20x20/ffd700/000000.png&text=B" alt="" style={{ width: '25px', marginRight: '8px' }} />
                                    <span>{item.ChannelTitle}</span>
                                </div>
                            </NavDropdown.Item>
                        ))}


                    </NavDropdown>


                    <Navbar.Toggle className="order-4 order-lg-2 notButton">
                        <input id="customCheckbox" type="checkbox" onClick={toggleOffCanvasMenu} />
                        <label class="customToggle" for="customCheckbox">
                            <div id="customBar1" class="customBars"></div>
                            <div id="customBar2" class="customBars"></div>
                            <div id="customBar3" class="customBars"></div>
                        </label>

                        {/* <FontAwesomeIcon
              className="bell-icon"
              icon={faEllipsisV}
              onClick={toggleOffCanvasMenu}
            /> */}
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
                                    <Link className="userMenuItem" style={{ color: "white" }} to={"/my-profile"}>
                                        <FontAwesomeIcon
                                            className="me-2  yellow-text"
                                            icon={faUser}
                                        />
                                        My Profile
                                    </Link>
                                    <Link
                                        className="userMenuItem"
                                        to="/"
                                        onClick={() => handleLogout()}
                                        style={{ color: "white" }}
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
                        <h2 className="mt-2">Menu</h2>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="mob-menu" >
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
        </header >
    );
};
