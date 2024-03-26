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
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  ChannelDataLogo,
  TwoIcon,
  YoutubeLogoIcon,
} from "../../../assets/images";
import { ChannelsLogo } from "../../../assets/svg";
import ChannelSelector from "../channelSelector/channelselectos";
import "../../../assets/images/YoutubeLogo.png";
import axios from "axios";
import usePageTitle from "../../../hooks/usePageTitle";

export const ChannelList = () => {
  usePageTitle("Channels");
  const [formData, setFormData] = useState({});
  const [Channels, setChannels] = useState([]);
  const [selectedChannel, setselectedChannel] = useState([]);
  const [ShowSelected, setShowSelected] = useState(false);

  const SearchChannel = async () => {
    await axios
      .post("/channel", formData)
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

  const ParentClick = () => {
    console.log(selectedChannel, "selectedChannel");
    if (selectedChannel) {
      setShowSelected(true);
    } else {
      setShowSelected(false);
    }
  };
  const RemoveChannel = () => {
    setShowSelected(false);
    setselectedChannel([]);
  };
  return (
    <React.Fragment>
      <section>
        <Container>
          {/* Input CONTAINER */}
          <Row className="justify-content-between align-items-center p-3">
            <Col
              lg={8}
              // style={{ backgroundColor: "blue" }}
            >
              Enter the name of your YouTube channel or its link
              <Row
                className="justify-content-around align-items-center"
                // style={{ backgroundColor: "black" }}
              >
                <Col
                  lg={8}
                  md={8}
                  sm={8}
                  //   style={{ backgroundColor: "purple" }}
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
                        onChange={(e) =>
                          setFormData({ ...formData, url: e.target.value })
                        }
                      />
                    </InputGroup>
                  </Form>
                </Col>
                <Col
                  lg={3}
                  md={4}
                  sm={4}
                  //   style={{ backgroundColor: "pink" }}
                  className="align-items-center justify-content-center"
                >
                  <Button
                    variant="primary"
                    //    className="py-2 px-5"
                    style={{ height: "100%", width: "100%" }}
                    onClick={SearchChannel}
                  >
                    Get Started
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "33%",
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
                onClick={ParentClick}
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
                />
              ) : (
                <div className="ChannelLogocont">
                  {/* <ChannelsLogo /> */}
                  <Image src={ChannelDataLogo} />
                  <h4>{formData.message}</h4>
                </div>
              )}
            </Col>

            {ShowSelected ? (
              <Col
                xl={12}
                style={{ backgroundColor: "red" }}
                className="sticky-div"
              >
                <Container>
                  <Row
                    className="justify-content-around align-items-center"
                    // style={{ backgroundColor: "black" }}
                  >
                    <button onClick={RemoveChannel}>
                      Selected YouTube channel
                    </button>
                    <p>{selectedChannel?.title}</p>
                    <p>{selectedChannel?.thumbnail}</p>
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
