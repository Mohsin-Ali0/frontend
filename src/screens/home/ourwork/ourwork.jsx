import React from "react";
import "./ourwork.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { FourIcon, OneIcon, ThreeIcon, TwoIcon } from "../../../assets/images";

export const OurWork = () => {
  return (
    <React.Fragment>
      <section className="bg_img txt-color">
        <Container>
          <Row className="justify-content-between align-items-center pt-4 pb-5 flex-column">
            <Col xl="5" style={{ textAlign: "center" }}>
              <h1>How Logoipsum works</h1>
            </Col>
            <Col xl="12" className="pt-4">
              <Row className="justify-content-around align-items-center align-content-betweeen">
                <Col xl="5" className="mb-3 py-4 px-5 container-cloud">
                  <Image src={OneIcon} className="icon-styles " />
                  <h4 className="bluetxt">Setup</h4>
                  <p className="work-p-txt">
                    Vestibulum ligula sapien, cursus sed consectetur nec,
                    tincidunt ac metus. Vivamus accumsan diam eget ultricies
                    auctor. Proin iaculis metus vel condimentum tincidunt.
                  </p>
                </Col>

                <Col xl="5" className="mb-3 py-4 px-5 container-cloud">
                  <Image src={TwoIcon} className="icon-styles " />
                  <h4 className="bluetxt">Promotion</h4>
                  <p className="work-p-txt">
                    Vestibulum ligula sapien, cursus sed consectetur nec,
                    tincidunt ac metus. Vivamus accumsan diam eget ultricies
                    auctor. Proin iaculis metus vel condimentum tincidunt.
                  </p>
                </Col>
                <Col xl="5" className="mb-3 py-4 px-5 container-cloud">
                  <Image src={ThreeIcon} className="icon-styles " />
                  <h4 className="bluetxt">Payment</h4>
                  <p className="work-p-txt">
                    Vestibulum ligula sapien, cursus sed consectetur nec,
                    tincidunt ac metus. Vivamus accumsan diam eget ultricies
                    auctor. Proin iaculis metus vel condimentum tincidunt.
                  </p>
                </Col>
                <Col xl="5" className="mb-3 py-4 px-5 container-cloud">
                  <Image src={FourIcon} className="icon-styles " />
                  <h4 className="bluetxt">Results</h4>
                  <p className="work-p-txt">
                    Vestibulum ligula sapien, cursus sed consectetur nec,
                    tincidunt ac metus. Vivamus accumsan diam eget ultricies
                    auctor. Proin iaculis metus vel condimentum tincidunt.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
