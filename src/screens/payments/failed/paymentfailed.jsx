import React from "react";
import "../index.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { LoginLayout } from "../../../components/Layout/loggedinlayout/loginLayout";
// import { PaymentSuccessIcon } from "../../../assets/images";
import SiteButton from "../../../components/Button/button";
import { PaymentFailedIcon } from "../../../assets/images";
import { useNavigate } from "react-router-dom";
import usePageTitle from "../../../hooks/usePageTitle";

export const PaymentFailed = () => {
  const navigate = useNavigate();
  const NavigateToDashboard = () => {
    navigate("/channels");
  };
  usePageTitle("Payment Failed")
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
              <h1 style={{ color: "red" }}> Oops!!!!</h1>
              <br />
              <h1>There Was An Issue Processing Your Payment</h1>
              <br />
              <p>
                Your transaction was declined by the bank. You can contact the
                bank for further details. Don't worry your funds are safe. In
                case your account was debited, your payment will be refunded
                automatically. You can retry payment with a different payment
                method, or recheck the details for your card and retry payment.
                The details of your transaction are below: Payment ID
                HARO5432198765 Date & Time Monday 29 April, 2024 at 5:50 PM
                VidTrial Account ID DJ James Michael
              </p>
              <p>
                Payment ID: <span style={{marginLeft:"10px"}}>HARO5432198765</span>
              </p>
              <p>
                Date & Time: <span style={{marginLeft:"10px"}}> Monday 29 April, 2024</span>
              </p>
              <p>
                VidTrial Account ID: <span style={{marginLeft:"10px"}}> DJ James Michael</span>
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
