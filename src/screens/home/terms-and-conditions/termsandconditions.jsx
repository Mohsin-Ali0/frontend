import React, { useEffect, useState } from "react";
import "./termsandconditions.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import FadeIn from "../../../components/FadeIn/FadeIn";

export const TermsandConditionContent = () => {
  const [data, setData] = useState({
    content: "",
    lastupdate: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTermsandConditions("termsAndConditions");
  }, []);

  const getTermsandConditions = async (contentType) => {
    setLoading(true);
    try {
      const res = await axios.get(
        "api/admin/configuration/getFrontConfigbyId",
        {
          params: { contentType },
        }
      );

      if (res.data && res.data.data) {
        const sanitizedContent = DOMPurify.sanitize(res.data.data.value || "");
        setData({
          content: sanitizedContent,
          lastupdate: res.data.data.lastUpdatedAt || "",
        });
      } else {
        console.error("No data found in the response");
      }
    } catch (error) {
      console.error("Error fetching terms and conditions:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid>
      <h1 className="title pt-5 pb-5">VidTrial Terms Of Service Page</h1>
      <div className="terms-container">
        {loading ? (
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <FadeIn>{parse(data.content)}</FadeIn>
            <p style={{ fontSize: 12 }}>
              Last update: {new Date(data.lastupdate).toLocaleString()}
            </p>
          </>
        )}
      </div>
    </Container>
  );
};
