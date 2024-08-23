import React, { useEffect, useState } from "react";
import "./termsandconditions.css";
import { Container } from "react-bootstrap";
import axios from "axios";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

export const TermsandConditionContent = () => {
  const [data, setData] = useState({
    content: "",
    lastupdate: "",
  });

  useEffect(() => {
    getTermsandConditions("termsAndConditions");
  }, []);

  const getTermsandConditions = async (contentType) => {
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
    }
  };

  return (
    <Container fluid>
      <h1 className="title pt-5 pb-5">VidTrial Terms Of Service Page</h1>
      <div className="terms-container">
        {/* Parse and render sanitized HTML content */}
        {parse(data.content)}
        <p style={{ fontSize: 12 }}>
          Last update: {new Date(data.lastupdate).toLocaleString()}
        </p>
      </div>
    </Container>
  );
};
