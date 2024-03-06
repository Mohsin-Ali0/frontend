import { Col, Container, Row } from "react-bootstrap";

import FooterLogo from "../../assets/images/footer-bg.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
  faSquarePinterest,
  faSquareTwitter,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const SiteFooter = () => {
  return (
    // <footer className=" pt-4 site_footer">
    //   <Container>
    //     <Row className="justify-content-center text-center bg-transparent">
    //      asdfasdf
    //     </Row>
    //   </Container>

    // </footer>

    <footer
      style={{
        backgroundImage: `url(${FooterLogo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        // minHeight: "50vh",
        color: "white", // Text color
        paddingTop: "20px", // Adjust as needed
        paddingBottom: "20px", // Adjust as needed
      }}
    >
      <Container>
        <h1>Footer Content</h1>
        <p>Some text here...</p>
      </Container>
    </footer>
  );
};
