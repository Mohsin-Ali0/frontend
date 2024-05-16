import React from "react";
import "../index.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { LoginLayout } from "../../../components/Layout/loggedinlayout/loginLayout";
import { PaymentSuccessIcon } from "../../../assets/images";
import SiteButton from "../../../components/Button/button";
import { useLocation, useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import usePageTitle from "../../../hooks/usePageTitle";

export const PaymentSuccess = () => {
  const navigate = useNavigate();
  const NavigateToDashboard = () => {
    navigate("/channels");
  };
  usePageTitle("Payment Success")
  const UserDetails = decodeToken(localStorage.getItem("token"));
  console.log(UserDetails, "DecodedToken");
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
                <Image src={PaymentSuccessIcon} />
              </div>
            </Col>
            <Col
              xl={6}
              md={6}
              className="justify-content-center align-items-center"
            >
              <h1 style={{ color: "green" }}>Congratulations!</h1>
              <br />
              <h1>Your Payment Has Been Successfully Processed</h1>
              <br />
              <p>
                Your payment was successfully received for order number
                #5432198765. You can now set up personalized YouTube video ad
                campaigns with VidTrial. We have also sent a confirmation email
                to your registered account{" "}
                <a href={`mailto:${UserDetails.email}`}>{UserDetails.email} </a>{" "}
                with your VidTrial account and campaign details. In the
                meantime, if you have any questions or queries feel free to
                email us at
                <a href="mailto:contact@vidtrial.com">support@vidtrial.com</a> ,
                call us at +1100001101, or join one of our customer support
                representatives for a Live Chat session. We hope you have an
                outstanding experience.
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
