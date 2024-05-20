import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./promotion-forecast.css";
import SiteButton from "../../../components/Button/button";
import { BudgetCard } from "../../../components/Slider/slider";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Promotionforecast = () => {
  const navigate = useNavigate();
  const { User } = useAuth();
  const submitHandler = (e) => {
    if (User) {
      e.preventDefault();

      navigate("/channels");
    } else {
      navigate("/login");
    }
  };
  return (
    <React.Fragment>
      <section className="reviews-bg">
        <Container>
          <Row className="justify-content-center align-items-center mb-5 pt-5 pb-5 color-black">
            <Col xl="8" style={{ textAlign: "center" }}>
              <h1 className="bluetxt pb-3">Forecasts Powered By Real Data</h1>
              <p style={{ color: "grey" }}>
                View promotion forecasts powered by YouTube’s official
                algorithm. Get real time forecasts for views, interactions,
                subscribers, and impressions of real potential YouTube users.
              </p>
            </Col>
            <Col xl="12" className="pt-4">
              <BudgetCard />
            </Col>
            <Row className="justify-content-between align-items-center  pt-5 pb-5 color-black">
              <Col
                xl={4}
                lg={4}
                md={4}
                className="d-flex align-items-center justify-content-center"
              >
                <SiteButton className="site-btn" onClick={submitHandler}>
                  Start Promotion
                </SiteButton>
              </Col>
              <Col xl={8} lg={8} md={8} className="mt-2">
                <p
                  style={{
                    color: "grey",
                    textAlign: "center",
                    // marginTop: "2%",
                  }}
                >
                  Views forecast mostly depends on the content of your channel.
                  Please keep it interesting.
                </p>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
