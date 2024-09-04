import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./custom-payments.css";
import ReviewCustomCampaign from "./review-custom-campaign.jsx";
import { Elements } from "@stripe/react-stripe-js";
import CustomPaymentForm from "./custom-payment-form/custom-payment-form.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Container } from "react-bootstrap";
const stripePromise = loadStripe(
  "pk_test_51Om0TVENvJ1Tu9riMwQgVkQbuHuVAUnEiUM9SUK2KLmiMoNiuyqy3gvpCWSzvV9nPETxB7VLvYsXSaFSUqsfYR2V00OA3bbOJQ"
);

let Stripe_client_secret

const CustomPayments = () => {
  const [validationError, setValidationError] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [campaignData, setCampaignData] = useState(null);
  const [BidDetails, setBidDetails] = useState(null);
  const location = useLocation();

  // Extract the token from the pathname
  const pathname = location.pathname;
  const token = pathname.split("payementdetails=")[1]; // Extract the token after "payementdetails="

  useEffect(() => {
    if (token) {
      ValidateURLtoken(token);
    } else {
      setValidationError("No payment token found in the URL");
    }
  }, [token]);
  

  const ValidateURLtoken = async (token) => {
    try {
      const response = await axios.post(`/api/admin/campaign/verifyLinkUrl`, {
        token,
      });

      // Log the response for debugging

      if (response.data && response.data?.valid) {
        setIsValid(true); // Token is valid, proceed with payment

        // Log campaign ID before calling getPaymentDetails
        const campaignId = response.data?.data?.campaignId;
        Stripe_client_secret = response.data?.data?.client_secret;

        if (campaignId) {
          await getPaymentDetails(campaignId);
        } else {
          setValidationError("Invalid campaign details");
        }
      } else {
        setValidationError(response.data?.error || "Invalid payment link"); // Token is invalid, show error
      }
    } catch (error) {
      setValidationError("An error occurred during token validation");
    }
  };

  const getPaymentDetails = async (campaignId) => {
    try {
      const response = await axios.get(
        `/api/admin/campaign/getCustomCampaignDetails/${campaignId}`
      );
      let parseCampaignData = JSON.parse(
        response.data?.campaign.campaign_details
      );

      setCampaignData(parseCampaignData);
      getSystemConfig();
      // Proceed with payment logic
    } catch (error) {
      console.error("Error fetching payment details:", error);
      setValidationError("An error occurred while fetching payment details");
    }
  };

  const getSystemConfig = async () => {
    await axios
      .get("api/admin/configuration/getCustomCampaignDetails")
      .then((res) => {
        setBidDetails(res.data.data);
        // Proceed with payment logic
      })
      .catch((err) => {
        setValidationError("An error occurred while fetching Bid Details");
      });
  };
  
  const stripeOptions = {
    clientSecret: Stripe_client_secret, // Use clientSecret from route params
    appearance: {
      theme: "flat",
    },
  };
  return (
    <div>
      {validationError && <p className="error">{validationError}</p>}
      {isValid ? (
        <>
          {/*  */}
          {/* PAYMENT COMPONENT HERE */}
          {/*  */}
          <Container>
            <h1 className="PaymentMainHeading mt-4">Enter Payments Details</h1>
            
            <Elements stripe={stripePromise} options={stripeOptions}>
              <CustomPaymentForm amount={campaignData?.budget?.amount} clientSecret={Stripe_client_secret}  campaignData={campaignData} />
            </Elements>

            <h1 className="PaymentMainHeading my-5">Review Campaign Details</h1>

            <ReviewCustomCampaign
              campaignData={campaignData}
              BidDetails={BidDetails}
              
            />
          </Container>
        </>
      ) : (
        // Your payment logic here
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CustomPayments;





