import React from "react";
import "../index.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { LoginLayout } from "../../../components/Layout/loggedinlayout/loginLayout";
// import { PaymentSuccessIcon } from "../../../assets/images";
import SiteButton from "../../../components/Button/button";
import { PaymentFailedIcon } from "../../../assets/images";
import { useNavigate } from "react-router-dom";

export const PaymentFailed = () => {
  const navigate = useNavigate();
  const NavigateToDashboard = () => {
    navigate("/channels");
  };
  return (
    <React.Fragment>
      <LoginLayout showFooter={false}>
        <Container fluid>
          <Row className="justify-content-around align-items-center d-flex mt-5">
            <Col
              xl={6}
              md={5}
              className="justify-content-center align-items-center"
            >
              <div className="payment-icon-cont">
                {/* <ChannelsLogo /> */}
                <Image src={PaymentFailedIcon} />
              </div>
            </Col>
            <Col
              xl={6}
              md={6}
              className="justify-content-center align-items-center"
            >
              <h1>Something went wrong!</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur. Est pretium odio urna
                tellus risus sed nisl non sapien. Enim lobortis aliquam rhoncus
                semper. Lorem ipsum dolor sit amet consectetur. Est pretium odio
                urna tellus risus sed nisl non sapien. Enim lobortis aliquam
                rhoncus semper.
              </p>

              <Col xl={6} md={5} className="p-4 next-btn-container">
                <SiteButton
                  onClick={NavigateToDashboard}
                  className="site-btn next-btn"
                >
                  Next
                </SiteButton>
              </Col>
            </Col>
          </Row>
        </Container>
      </LoginLayout>
    </React.Fragment>
  );
};
