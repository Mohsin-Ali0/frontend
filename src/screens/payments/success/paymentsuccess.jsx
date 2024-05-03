import React from "react";
import "../index.css"
import { Col, Container, Image, Row } from "react-bootstrap";
import { LoginLayout } from "../../../components/Layout/loggedinlayout/loginLayout";
import { PaymentSuccessIcon } from "../../../assets/images";
import SiteButton from "../../../components/Button/button";

export const PaymentSuccess = () => {
  return (
    <React.Fragment>
      <LoginLayout showFooter={false}>
        <Container fluid>
          <Row
            className="justify-content-around align-items-center d-flex mt-5"
          >
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
              <h1>Thank You For Your Order</h1>
              <br />
              <p>
                Your Payment Has Been Successfully Received For Order Ref.
                Number#987654321. We have sent a confirmation email to your
                registered address at [ johnsmith@gmail.com ] with complete
                order details. Feel free to reach out to our customer service
                team for any questions or queries at [ customersupport@gmail.com
                ] or call us at 1 111 111 111 to talk to a support
                representative. We are delighted to have you onboard, and
                hope you have an awesome experience with [Company/Product Name].
              </p>

              <Col xl={6} md={5} className="p-4 next-btn-container">
                <SiteButton
                  //   onClick={() => handleStepChange(3, SelectedVideos)}
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
