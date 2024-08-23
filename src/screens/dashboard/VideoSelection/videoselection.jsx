import React from "react";
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
import "./videoselection.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import SiteButton from "../../../components/Button/button";
import { decodeGoogleSpecialCharacters } from "../../../utils/decodeSpecialchar";

// Install modules
SwiperCore.use([Navigation, Virtual]);

let options = [
  {
    id: 1,
    label: "Automatically select the much recent videos",
  },
  {
    id: 2,
    label: "Automatically select the most relevant videos",
  },
  {
    id: 3,
    label: "Select the video manually ",
  },
];

export const VideoSelection = ({
  ChannelDetails,
  handleStepChange,
  SelectedVideos,
  setSelectedVideos,
  selectedOption,
  setSelectedOption,
  setSelectedSlides,
  selectedSlides,
  limitReached,
  setLimitReached,
  VideoSeggestion,
  setVideoSuggestion,
  SearchVideoValue,
  setSearchVideoValue,
  SearchVideo,
}) => {
  const handleOptionChange = (event) => {
    setSelectedOption(parseInt(event.target.value));
  };

  // Render component based on selected option

  const renderComponent = () => {
    switch (selectedOption) {
      case 1:
        return (
          <RecentVideosComponent
            SelectedVideos={SelectedVideos}
            setSelectedVideos={setSelectedVideos}
          />
        );
      case 2:
        return (
          <RelevantVideosComponent
            SelectedVideos={reverse}
            setSelectedVideos={setSelectedVideos}
          />
        );
      case 3:
        return (
          <ManualSelectComponent
            SelectedVideos={SelectedVideos}
            setSelectedVideos={setSelectedVideos}
            ChannelDetails={ChannelDetails}
            selectedSlides={selectedSlides}
            setSelectedSlides={setSelectedSlides}
            limitReached={limitReached}
            setLimitReached={setLimitReached}
            VideoSeggestion={VideoSeggestion}
            setVideoSuggestion={setVideoSuggestion}
            SearchVideoValue={SearchVideoValue}
            setSearchVideoValue={setSearchVideoValue}
            SearchVideo={SearchVideo}
          />
        );
      default:
        return (
          <RecentVideosComponent
            SelectedVideos={SelectedVideos}
            setSelectedVideos={setSelectedVideos}
          />
        );
    }
  };
  return (
    <Container fluid="lg">
      <Row className="justify-content-between align-items-center flex-column">
        {/* SELCET VIDEO CONTAINER */}
        <Col
          xl={12}
          className="justify-content-start align-items-start flex-column d-flex"
        >
          <h1>Please Select Videos</h1>
          <Form>
            {options?.map((option) => (
              <div key={option.id} className="radio">
                <Form.Check
                  type="radio"
                  name="radioOption"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={handleOptionChange}
                  className="custom-radio" // Apply custom class for styling
                  id={`option-${option.id}`}
                />
                <Form.Check.Label
                  htmlFor={`option-${option.id}`}
                  className="custom-label"
                >
                  <p className="radio-label">{option.label}</p>
                </Form.Check.Label>
              </div>
            ))}
          </Form>
          <hr style={{ width: "100%" }} />
        </Col>
        {/* SELECTED Video ARRAY */}
        <Col xl={12}>{selectedOption && renderComponent()}</Col>
        <Row>
          <Col xl={6} md={5} className="p-4 next-btn-container">
            <SiteButton
              onClick={() => handleStepChange(2, SelectedVideos)}
              className="site-btn next-btn"
            >
              Next
            </SiteButton>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

// Example components to render based on selection
const RecentVideosComponent = ({ SelectedVideos }) => {
  return (
    <Row className="justify-content-between align-items-center flex-column">
      <Col xl={12}>
        <h4>Following videos will be used for the promotion:</h4>
      </Col>
      <Col xl={12}>
        <Row className="justify-content-between align-items-center p-4">
          {SelectedVideos?.map((item) => {
            return (
              <Col
                xl={6}
                lg={6}
                md={6}
                className="justify-content-start align-items-center flex-row d-flex pb-4"
              >
                <div className="block-icon">
                  <Image
                    className="m-2 shadow-sm logo-style"
                    width={54}
                    height={54}
                    src={item?.thumbnail}
                    rounded
                  />
                </div>
                <p className="video-title-txt">
                  {decodeGoogleSpecialCharacters(item?.title)}
                </p>
                {/* <Col xl={2} style={{ backgroundColor: "gold" }}>
                  <div className="block-icon">
                    <Image
                      className="m-2 shadow-sm logo-style"
                      width={54}
                      height={54}
                      src={item?.thumbnail}
                    />
                  </div>
                </Col>
                <Col xl={6} style={{ backgroundColor: "aqua" }}>
                  <p>{item?.title}</p>
                </Col> */}
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};
const RelevantVideosComponent = ({ SelectedVideos }) => {
  return (
    <Row className="justify-content-between align-items-center flex-column">
      <Col xl={12}>
        <h4>Following videos will be used for the promotion:</h4>
      </Col>
      <Col xl={12}>
        <Row className="justify-content-between align-items-center p-4">
          {SelectedVideos?.map((item) => {
            return (
              <Col
                xl={6}
                lg={6}
                md={6}
                className="justify-content-start align-items-center flex-row d-flex pb-4"
              >
                <div className="block-icon">
                  <Image
                    className="m-2 shadow-sm logo-style"
                    width={54}
                    height={54}
                    src={item?.thumbnail}
                    rounded
                  />
                </div>
                <p className="video-title-txt">
                  {decodeGoogleSpecialCharacters(item?.title)}
                </p>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

const ManualSelectComponent = ({
  ChannelDetails,
  setSelectedSlides,
  selectedSlides,
  limitReached,
  setLimitReached,
  VideoSeggestion,
  SearchVideoValue,
  SearchVideo,
  setSearchVideoValue,
}) => {
  const VideoSelect = (slideContent) => {
    setSelectedSlides((prevSelectedSlides) => {
      const isPresent = prevSelectedSlides.some(
        (obj) => obj.videoId === slideContent.videoId
      );

      // if (prevSelectedSlides.includes(slideContent)) {
      if (isPresent) {
        // If already selected, remove it from the array
        setLimitReached(false);
        return prevSelectedSlides.filter((i) => {
          console.log(i, "i");
          console.log(slideContent, "slideContent");
          // console.log(i == slideContent, "i != slideContent");
          return i.videoId !== slideContent.videoId;
        });
      } else {
        if (prevSelectedSlides.length < 2) {
          setLimitReached(false);

          return [...prevSelectedSlides, slideContent];
        } else {
          // If already 2 selected, do nothing
          setLimitReached(true);
          return prevSelectedSlides;
        }
        // If not selected, add the videoId to the array
        // setManualSelectedVideos(...prevSelectedSlides, videoId);
      }
    });
  };

  const isSelected = (Video) => {
    const isSelectedInSelectedSlides = selectedSlides.some((slide) => {
      return slide.videoId === Video.videoId;
    });

    return isSelectedInSelectedSlides;
  };

  return (
    <Row className="justify-content-between align-items-center flex-column">
      <Col xl={12}>
        <h4>Search the videos on your channel {ChannelDetails?.title}</h4>
        <p>Add the video URL or its title</p>
        <div style={{ width: "100%" }}>{/* <input /> */}</div>
        <Form>
          <InputGroup className="mb-5">
            <FormControl
              style={{ backgroundColor: "#EEEFF7", borderRight: "none" }}
              placeholder="Enter your youtube channel name or url"
              // value={SearchVideoValue}
              value={SearchVideoValue.url}
              onChange={(e) =>
                setSearchVideoValue({
                  ...SearchVideoValue,
                  url: e.target.value,
                })
              }
              id="channelsearch"
            />
            <InputGroup.Text
              className="search-container"
              style={{ backgroundColor: "#EEEFF7" }}
            >
              <Button
                variant="primary"
                className="getstartedbtn"
                style={{ width: "100%", textAlign: "center" }}
                // onClick={getStarted}

                // type="submit"
                name="getstarted"
                onClick={SearchVideo}
              >
                Search
              </Button>
            </InputGroup.Text>
          </InputGroup>
        </Form>
        <h4>We recommend adding 2-3 videos for the best results:</h4>

        <Container fluid>
          <Row>
            <Col xl={12}>asdf</Col>
          </Row>
        </Container>
        {limitReached ? (
          <p style={{ color: "red", textAlign: "center" }}>
            You can't add more than 2 videos
          </p>
        ) : null}

        <Swiper
          modules={[Navigation]}
          // navigation={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={50}
          slidesPerView={5}
          style={{ padding: "20px" }}
          // slidesPerView={1}
          virtual
          breakpoints={{
            // when window width is >= 350
            200: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            450: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              width: 640,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          // className="mySwiper"
        >
          {VideoSeggestion?.map((slideContent, index) => (
            <SwiperSlide
              key={slideContent.videoId}
              virtualIndex={index}
              onClick={() => VideoSelect(slideContent)}
              // className={limitReached ? "blur" : ""}
              // style={{ backgroundColor: "purple", width: "50%" }}
            >
              <button
                className={
                  isSelected(slideContent)
                    ? "selected-slide p-2 "
                    : `swiper-container p-2 ${limitReached ? "blur" : ""}`
                }
                title={limitReached ? "You can only select up to 2 videos" : ""}
              >
                <div className="swiper-image-container">
                  <Image
                    // className="m-2 shadow-sm logo-style"
                    className="swiper-image pb-2"
                    // width={54}
                    // height={54}
                    src={slideContent?.thumbnail}
                    rounded
                  />
                </div>
                <div className="swiper-text-container ">
                  <p
                    className={
                      isSelected(slideContent)
                        ? "video-title-txt-selected"
                        : "video-title-txt"
                    }
                  >
                    {decodeGoogleSpecialCharacters(slideContent?.title)}
                  </p>
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev swiper-prev-resp"></div>
        <div className="swiper-button-next swiper-next-resp"></div>
        {/* Outside of the Swiper component add custom buttons */}
      </Col>
      <Col xl={12}>
        <Row className="justify-content-between align-items-center p-4">
          <Col xl={12}>
            <h4>Following videos will be used for the promotion:</h4>
          </Col>
          {selectedSlides.length == 0 ? (
            <Col xl={12}>
              <h4 style={{ color: "red" }}>No Videos Selected</h4>
            </Col>
          ) : (
            selectedSlides?.map((item) => {
              return (
                <Col
                  xl={6}
                  lg={6}
                  md={6}
                  className="justify-content-start align-items-center flex-row d-flex pb-4"
                >
                  <div className="block-icon">
                    <Image
                      className="m-2 shadow-sm logo-style"
                      width={54}
                      height={54}
                      src={item?.thumbnail}
                      rounded
                    />
                  </div>
                  <p className="video-title-txt">
                    {decodeGoogleSpecialCharacters(item?.title)}
                  </p>
                </Col>
              );
            })
          )}
        </Row>
      </Col>
    </Row>
  );
};
