import React, { useState } from "react";
import "./channelslist.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ChannelDataLogo } from "../../../assets/images";
import ChannelSelector from "../channelSelector/channelselectos";
import "../../../assets/images/YoutubeLogo.png";
import axios from "axios";
import usePageTitle from "../../../hooks/usePageTitle";
import SiteButton from "../../../components/Button/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ChannelList = () => {
  usePageTitle("Channels");

  const navigate = useNavigate();
  let ChannaelName = JSON.parse(localStorage.getItem("url"));
  const [formData, setFormData] = useState(ChannaelName ? ChannaelName : {});
  const [Channels, setChannels] = useState([]);
  const [selectedChannel, setselectedChannel] = useState([]);
  const [ShowSelected, setShowSelected] = useState(false);

  useEffect(() => {
    GetChannelData(ChannaelName);
  }, []);

  const GetChannelData = async (ChannelName) => {
    console.log(ChannelName, "GetChannelData", formData);
    await axios
      .post("/channel", ChannelName)
      .then((response) => {
        console.log(response, "resss");
        setFormData({ ...formData, message: response.data.messege });
        setChannels(response.data.data);
      })
      .catch((error) => {
        console.log(error, "cathchhhh");
        // document.getElementById(
        //   "response"
        // ).innerHTML = `<div class="alert alert-danger"role="alert"><strong>Opss! </strong>${error.response.data.message}</div>`;
        // setLoad(false);
      });
  };

  const SearchChannel = async () => {
    await axios
      .post("/channel", formData)
      .then((response) => {
        console.log(response, "resss");
        setFormData({ ...formData, message: response.data.messege });
        setChannels(response.data.data);
        localStorage.setItem("url", JSON.stringify({ url: formData.url }));
      })
      .catch((error) => {
        console.log(error, "cathchhhh");
        // document.getElementById(
        //   "response"
        // ).innerHTML = `<div class="alert alert-danger"role="alert"><strong>Opss! </strong>${error.response.data.message}</div>`;
        // setLoad(false);
      });
  };

  const PromoteChannel = () => {
    console.log(selectedChannel, "selectedChannel");
    localStorage.setItem("channeldetails", JSON.stringify(selectedChannel));
    navigate("/dashboard");
  };
  const RemoveChannel = () => {
    setShowSelected(false);
    setselectedChannel([]);
  };
  const onClickUrl = (url) => {
    return () => openInNewTab(url);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <React.Fragment>
      <section>
        <Container>
          {/* Input CONTAINER */}
          <Row className="justify-content-between align-items-center p-3">
            <Col lg={8}>
              Enter the name of your YouTube channel or its link
              <Row className="justify-content-around align-items-center">
                <Col
                  lg={8}
                  md={8}
                  sm={8}
                  className="align-items-center justify-content-center"
                >
                  <Form style={{ width: "100%" }}>
                    <InputGroup>
                      <InputGroup.Text
                        style={{
                          backgroundColor: "white",
                          borderRight: "none",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faYoutube}
                          style={{ color: "#FF0000" }}
                          size="2x"
                        />
                      </InputGroup.Text>
                      <FormControl
                        style={{
                          backgroundColor: "white",
                          borderLeft: "none",
                        }}
                        placeholder="Enter your youtube channel name or url"
                        value={formData.url}
                        onChange={(e) =>
                          setFormData({ ...formData, url: e.target.value })
                        }
                      />
                    </InputGroup>
                  </Form>
                </Col>
                <Col
                  lg={4}
                  md={4}
                  sm={4}
                  //   style={{ backgroundColor: "pink" }}
                  className="align-items-center justify-content-center d-flex"
                >
                  <Button
                    variant="primary"
                    //    className="py-2 px-5"
                    style={{ height: "100%", width: "100%" }}
                    className="align-items-center justify-content-center d-flex"
                    onClick={SearchChannel}
                  >
                    Get Started
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        marginLeft: "5px",
                      }}
                    />
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col
              lg={4}
              //  style={{ backgroundColor: "palegoldenrod" }}
              className="align-items-center justify-content-center"
            >
              or add your channel via YouTube
              <Button
                // variant="primary"
                variant="light"
                //    className="py-2 px-5"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
                onClick={onClickUrl("https://youtube.com")}
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#FF0000", marginRight: "10px" }}
                  size="2x"
                />
                Get Started
              </Button>
            </Col>
          </Row>
          {/* CHANNNELS LIST COMPONENT */}
        </Container>
        <Container fluid>
          <Row
            className="justify-content-between align-items-center"
            style={{
              backgroundColor: "#f0f4f9",
            }}
          >
            <Col
              className="justify-content-center align-items-center p-5 "
              style={{
                backgroundColor: "#f0f4f9",
                // backgroundColor: "purple",
              }}
              xl={12}
            >
              {/* turnery here */}
              {Channels.length > 0 ? (
                <ChannelSelector
                  channels={Channels}
                  setselectedChannel={setselectedChannel}
                  selectedChannel={selectedChannel}
                  ShowSelected={setShowSelected}
                />
              ) : (
                <div className="ChannelLogocont">
                  {/* <ChannelsLogo /> */}
                  <Image src={ChannelDataLogo} />
                  <h4>{formData?.message}</h4>
                </div>
              )}
            </Col>

            {ShowSelected ? (
              <Col xl={12} className="sticky-div">
                <Container>
                  <Row className="justify-content-between align-items-center">
                    <Col
                      xl={8}
                      lg={8}
                      md={8}
                      sm={8}
                      className="flex-row d-flex justify-content-start align-items-center "
                    >
                      <div onClick={RemoveChannel} className="block-icon">
                        <Image
                          className="m-2 shadow-sm logo-style"
                          width={54}
                          height={54}
                          src={selectedChannel.thumbnail}
                          roundedCircle
                        />
                        <button style={{ display: "contents" }}>
                          <FontAwesomeIcon
                            color="grey"
                            className="fa-stack the-wrapper icon-tag"
                            icon={faTimes}
                          />
                        </button>
                      </div>
                      <Col
                        xl={8}
                        lg={8}
                        md={8}
                        sm={8}
                        className="justify-content-between align-items-center m-3"
                      >
                        <p style={{ color: "gray" }}>
                          Selected YouTube channel
                        </p>
                        <p>{selectedChannel?.title}</p>
                      </Col>
                    </Col>
                    <Col
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      className="d-flex justify-content-center align-items-center"
                    >
                      <SiteButton
                        onClick={PromoteChannel}
                        className="site-btn btn-width"
                      >
                        Promote
                      </SiteButton>
                    </Col>

                    {/* <Image src={selectedChannel.thumbnail}  /> */}
                  </Row>
                </Container>
              </Col>
            ) : null}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
