import "./index.css";
import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import { stats } from "../../../config/data";
import usePageTitle from "../../../hooks/usePageTitle";
import axios from "axios";
import { DashboardLayout } from "../../../components/Adminlayout/dashboardLayout";
import { PieChartCard } from "../../../components/Adminlayout/Charts/PieChartCard/piechart";
import { StatsCard } from "../../../components/Adminlayout/StatsCard/StatsCard";

export const Dashboard = () => {
  usePageTitle("Admin Dashboard");
  const [statistics, setStatistics] = useState([]);

  const loadStats = async () => {
    let data = await axios
      .get("/dashboard")
      .then((response) => setStatistics(response.data.data))
      .catch((err) => console.error(err.response.data.message));
  };

  useEffect(() => {
    loadStats();
  }, []);

  const chartTitles = [
    "Total Earning",
    "Mentees Registered",
    "Mentor Registered",
    "Requests Received",
  ];
  const StatsTitle = [
    "Users",
    "Weekly Sales",
    "Total Campaigns",
    "Bug Reports",
  ];

  return (
    <DashboardLayout>
      <Container fluid>
        <div className="dashCard mb-4 py-5 m-h">
          <h3 className="mainTitle">Dashboard</h3>
        </div>
        <div className="dashCard mb-5 py-5 m-h ">
          <h3 className="mainTitle">Stats Component</h3>
          <Row
            style={{ backgroundColor: "red" }}
          >
            {StatsTitle.map((title, index) => (
              <Col key={index}>
                <StatsCard key={index} title={title} />
              </Col>
            ))}
          </Row>
        </div>
        <Row>
          {chartTitles.map((title, index) => (
            <Col key={index} xl={12}>
              <PieChartCard key={index} title={title} />
            </Col>
          ))}
        </Row>
      </Container>
    </DashboardLayout>
  );
};
