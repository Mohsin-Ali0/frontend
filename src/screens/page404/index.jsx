import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { PageNotFountIcon } from "../../assets/images";
import { useMediaQuery } from "react-responsive";

export const PageNotFound = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 764 });
  return (
    <React.Fragment>
      <Container
        fluid
        className="min-vh-100 d-flex align-items-center justify-content-center"
      >
        <Row>
          <Col lg={12} className="text-center">
            <Image
              src={PageNotFountIcon}
              className="img-fluid"
              style={{ maxHeight: "60vh" }} // Control the size to be responsive
              alt="Page Not Found"
            />
            <p className="work-p-txt">
              Page not found. If you think you got here by mistake, and here
              must definitely be something {isTabletOrMobile ? " " : <br />}
              useful, please let us know -{" "}
              <a href="mailto:contact@Vidtrial.com">contact@Vidtrial.com </a> or
              simply go to the <a href="/">main page</a>.
              {/* <a href="https://youtube-ads.viralbunch.com/">main page</a>. */}
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
