import { Col, Container, Image, Row } from "react-bootstrap";

import FooterBg from "../../assets/images/footer-bg.jpg";
import FooterLogoImg from "../../assets/images/logo-light.png";

import GoogleLogo from "../../assets/images/google-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        // minHeight: "50vh",
        color: "white", // Text color
        paddingTop: "20px", // Adjust as needed
        paddingBottom: "20px", // Adjust as needed
      }}
      className="headertext"
    >
      <Container>
        <Row
          className="justify-content-center align-items-center "
          // style={{ backgroundColor: "brown" }}
        >
          {/* <Col lg="8" className="col-12 "  style={{ backgroundColor: "red" ,alignItems:"center" , justifyContent:"center",display:"flex" }} > */}

          <h1 style={{ textAlign: "center" }}>Do You Have Furter Questions?</h1>
          <p style={{ textAlign: "center" }}>
            Please contact us via Live Chat
            <br />
            Or email at contact@Logoipsum.com
            <br />
            We will be happy to assist you!
          </p>
        </Row>
        <Row
          className="justify-content-between mt-5"
          // style={{ backgroundColor: "red" }}
        >
          <Col
            lg="3"
            className="d-flex justify-content-between flex-column"
            // style={{ backgroundColor: "brown" }}
          >
            <Image src={FooterLogoImg} height={50} width={170} />
            <br />
            <p>
              <span>@023 Logoipsm</span>
              <br />
              <span style={{ color: "grey" }}>
                Lorem ipsum dolor sit amet consectetur. Placerat ullamcorper
                ornare pulvinar consectetur id. Quis egestas justo lorem cras
                quis lectus id placerat viverra.
              </span>
            </p>
          </Col>
          <Col lg="7" className="d-flex  align-items-start ">
            <Row
              style={{ width: "100%" }}
              className="d-flex justify-content-evenly"
            >
              <Col
                lg="3"
                className=" d-flex flex-column justify-content-around anchor-align "
              >
                <a>About Us</a>
                <a> Pricing</a>
                <a>FAQ</a>
              </Col>
              <Col lg="6" className=" d-flex flex-column icon-align pt-3">
                <p>
                  <FontAwesomeIcon icon={faPhone} />
                  &nbsp; +1 (000) 000-0000
                </p>
                <br />
                <p>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                    &nbsp; contact@Logoipsum.com
                  </span>
                </p>
              </Col>
              <Col md="3" lg="3" sm="3" xs="3" xl="3">
                <img src={GoogleLogo} className="cover-img" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
