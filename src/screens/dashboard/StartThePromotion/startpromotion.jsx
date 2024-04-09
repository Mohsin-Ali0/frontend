import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SiteButton from "../../../components/Button/button";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Om0TVENvJ1Tu9riMwQgVkQbuHuVAUnEiUM9SUK2KLmiMoNiuyqy3gvpCWSzvV9nPETxB7VLvYsXSaFSUqsfYR2V00OA3bbOJQ"
);

export const StartThePromotion = ({
  value,
  Views,
  ChannelDetails,
  selectedOption,
  VideoSelectionData,
  checked,
  genders,
  selectedSlides,
  ages,
  interests,
  keywords,
  keywordInput,
}) => {
  const redirectToCheckout = async () => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
    let CampaignDetails = {
      value,
      Views,
      ChannelDetails,
      Videos: selectedOption == 3 ? selectedSlides : VideoSelectionData,
      AudienceData:
        checked == false ? { genders, ages, interests, keywords } : null,
    };

    // Call your backend to create the Checkout session
    await axios
      .post("api/stripe/create-checkout-session", {
        UserToken: localStorage.getItem("token"),
        ChannelDetails,
        CampaignDetails,
      })
      .then(async (res) => {
        console.log(res, "res");
        const { sessionId } = await res.data;
        console.log(sessionId, "sessionId");
        await stripe.redirectToCheckout({ sessionId });

        // const result = await stripe.redirectToCheckout({
        //   sessionId: session.id,
        // });

        // if (result.error) {
        //   // If `redirectToCheckout` fails due to a browser or network error,
        //   // display the localized error message to your customer.
        //   alert(result.error.message);
        // }
      })
      .catch((err) => console.log(err, "err"));

    // Redirect to Stripe Checkout
  };

  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout session

    await axios
      .post("api/stripe/create-checkout-session")
      .then(async (res) => {
        console.log(res, "res");
        const session = await res.json();
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network error,
          // display the localized error message to your customer.
          alert(result.error.message);
        }
      })
      .catch((err) => console.log(err, "err"));

    // const session = await response.json();

    // When the Checkout session is created, redirect to the Checkout page
    // const result = await stripe.redirectToCheckout({
    //   sessionId: session.sessionId,
    // });

    // if (result.error) {
    //   // If `redirectToCheckout` fails due to a browser or network error,
    //   // display the localized error message to your customer.
    //   alert(result.error.message);
    // }
  };

  const ProceedPay = async () => {
    await axios
      .post("api/stripe/create-checkout-session")
      .then(async (response) => {
        console.log(response, "resss");
        const session = await response.json();

        // Redirect to Stripe Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (error) {
          console.error(error);
        }
        // setFormData({ ...formData, message: response.data.messege });
        // setChannels(response.data.data);
      })
      .catch((error) => {
        console.log(error, "cathchhhh");
        // document.getElementById(
        //   "response"
        // ).innerHTML = `<div class="alert alert-danger"role="alert"><strong>Opss! </strong>${error.response.data.message}</div>`;
        // setLoad(false);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center d-flex mb-5 pt-5">
        <Row
          style={{
            backgroundColor: "#EEEFF7",
            borderRadius: "10px",
            width: "80%",
          }}
          className="justify-content-between align-items-center d-flex mb-5 "
        >
          <Col xl={4}>
            <div className="channel-info">
              <Image
                src={ChannelDetails.thumbnail}
                alt="Channel"
                // className="channel-icon"
                height={100}
                width={100}
                roundedCircle
              />
              <div style={{ paddingLeft: "20px" }}>
                <p className="channel-subtitle">Channel Promotion</p>
                <h2 className="channel-title">{ChannelDetails.title}</h2>
              </div>
            </div>
          </Col>
          <Col
            xl={4}
            style={{
              backgroundColor: "white",
              height: "100px",
              borderRadius: "20px",
              display: "flex",
            }}
            className="mt-5 mb-5"
          >
            <div className="channel-info">
              <div>
                <p className="channel-subtitle" style={{ fontSize: "18px" }}>
                  Total Amount:
                </p>
                <h2 className="channel-title">
                  ${value} per {Views} views
                  <p className="channel-subtitle">(~ ₨ 13,641.14)</p>
                </h2>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} md={5} className="p-4 next-btn-container">
            <SiteButton
              // onClick={() => handleStepChange(2)}
              className="site-btn next-btn"
              style={{ backgroundColor: "grey" }}
            >
              Back
            </SiteButton>
          </Col>
          <Col xl={6} md={5} className="p-4 next-btn-container">
            <SiteButton
              onClick={redirectToCheckout}
              className="site-btn next-btn"
            >
              Pay
            </SiteButton>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
