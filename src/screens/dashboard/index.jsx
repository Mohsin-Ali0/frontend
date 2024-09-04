import React, { useEffect, useRef, useState } from "react";
import { LoginLayout } from "../../components/Layout/loggedinlayout/loginLayout";
import StepSlider from "../../components/StepSlider/stepslider";
import { SubscriberAndUsers } from "./SubscribersandUsers/subscribersandusers";
import { VideoSelection } from "./VideoSelection/videoselection";
import { AudienceAndInterests } from "./AudienceAndInterests/audienceandIntrest";
import { StartThePromotion } from "./StartThePromotion/startpromotion";
import usePageTitle from "../../hooks/usePageTitle";
import axios from "axios";

export const DashBoard = () => {
  usePageTitle("Dashboad");
  const [currentStep, setCurrentStep] = useState(1);
  const [ChannelDetails, setChannelDetails] = useState(
    JSON.parse(localStorage.getItem("channeldetails"))
  );

  // CHILD STATES
  const [videoSelectionData, setVideoSelectionData] = useState({}); // State to hold video selection data
  const [audienceAndInterestsData, setAudienceAndInterestsData] = useState({}); // State to hold audience and interests data

  const [value, setValue] = useState(32);
  const [Views, setViews] = useState(1408);

  // // VIDEO SELECTION STATE
  const [SelectedVideos, setSelectedVideos] = useState([]);
  const [selectedOption, setSelectedOption] = useState(1);
  const [selectedSlides, setSelectedSlides] = useState([]);
  const [limitReached, setLimitReached] = useState(false);
  const [VideoSeggestion, setVideoSuggestion] = useState([]);
  const [SearchVideoValue, setSearchVideoValue] = useState({ url: "" });

  // Function to extract video ID from YouTube video URL
  const getVideoIdFromUrl = (url) => {
    if (!url.startsWith("https://www.youtube.com/watch?v=")) {
      return null; // Not a valid YouTube video URL
    }
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get("v");
  };

  const SearchVideo = async () => {
    const isUrl = SearchVideoValue.url.startsWith(
      "https://www.youtube.com/watch?v="
    );

    // If it's a URL, extract the video ID
    const videoId = isUrl ? getVideoIdFromUrl(SearchVideoValue.url) : null;

    await axios
      .post("/getchannelvideos", {
        channelId: ChannelDetails.channelId,
        type: 4,
        SearchBody: {
          keyword: isUrl ? null : SearchVideoValue.url,
          videoId: isUrl ? videoId : null,
        },
      })
      .then((res) => {
        setVideoSuggestion(res.data.data.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getViewsConfig = async () => {
    await axios
      .get("api/admin/configuration/getFrontViewsDetails")
      .then((res) => {
        console.log(res.data.data,"Api Response");
        // Proceed with payment logic
      })
      .catch((err) => {
        setValidationError("An error occurred while fetching Bid Details");
      });
  };


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    getViewsConfig()
  }, []);

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, "latitude");
    console.log(longitude, "longitude");
    // Call function to determine country using reverse geocoding
    // determineCountry(latitude, longitude);
  };

  const isFirstRun = useRef(true);
  let Firstrender = true; // to run the useeffect when user changes video selection
  useEffect(() => {
    if (isFirstRun.current) {
      // Run your effect code only on the first render
      console.log(isFirstRun.current, "Effect Only runs once");
      isFirstRun.current = false; // Set isFirstRun to false to prevent future runs
      Firstrender = false;
      GetVideosData(
        ChannelDetails.channelId,
        selectedOption,
        SearchVideoValue.url
      );
    }
    if (Firstrender) {
      GetVideosData(
        ChannelDetails.channelId,
        selectedOption,
        SearchVideoValue.url
      );
    }
  }, [selectedOption]);

  const GetVideosData = async (channelId, selectedOption) => {
    await axios
      .post("/getchannelvideos", {
        channelId,
        type: selectedOption,
        SearchBody: SearchVideoValue.url,
      })
      .then((res) => {
        console.log("resssssssssssssssssss");
        setVideoSelectionData(res.data.data.videos);
        setSelectedVideos(res.data.data.videos);
        setVideoSuggestion(res.data.data.videos);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // AUDIENCE AND INTREST STATES
  const [checked, setChecked] = useState(true);
  const [selectedCountries, setselectedCountries] = useState([]);
  const [genders, setGenders] = useState("all");
  const [ages, setAges] = useState({
    all: false,
    "18-24": false,
    "25-34": false,
    "35-44": false,
    "45-54": false,
    "55-64": false,
    "65+": false,
    // ... Add other age ranges
  });
  const [interests, setInterests] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [keywordInput, setKeywordInput] = useState("");

  // COUNTRY
  const [show, setShow] = useState(true);

  const options = [
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
    // ... more options
  ];

  // FUNTIONS
  const handleGenderSelect = (gender) => {
    setGenders(gender);
  };

  const handleAgeCheck = (ageRange) => {
    if (ageRange === "all") {
      setAges({
        ...ages,
        all: !ages.all,
        "18-24": false,
        "25-34": false /* ... reset others */,
        "35-44": false,
        "45-54": false,
        "55-64": false,
        "65+": false,
      });
    } else {
      setAges({ ...ages, all: false, [ageRange]: !ages[ageRange] });
    }
  };

  const handleInterestCheck = (interest) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((int) => int !== interest));
    } else {
      if (interests.length < 3) {
        setInterests([...interests, interest]);
      } else {
        interests.shift();
        setInterests([...interests, interest]);
      }
    }
  };

  const handleKeywordAdd = (event) => {
    event.preventDefault();
    if (keywordInput && keywords.length < 10) {
      setKeywords([...keywords, keywordInput]);
      setKeywordInput("");
    }
  };

  const handleKeywordRemove = (indexToRemove) => {
    setKeywords(keywords.filter((_, index) => index !== indexToRemove));
  };

  const handleCheckboxClick = (key) => {
    switch (key) {
      case "Manual Selection":
        if (checked == true) {
          setShow(true);
        }
        break;
      case "Auto Selection":
        setChecked(true);
        setShow(false);
        break;

      default:
        setChecked(true);
        setShow(false);
        break;
    }
  };

  const OpenOptions = (type) => {
    switch (type) {
      case "Manual":
        setChecked(false);
        setShow(false);
        break;
      case "Auto":
        setChecked(true);
        setShow(false);
        break;

      default:
        break;
    }
  };

  const handleStepChange = (stepIndex, data) => {
    setCurrentStep(stepIndex);
    setShow(true);
  };

  return (
    <React.Fragment>
      <LoginLayout showFooter={true}>
        <div className="stepper__view pt-2">
          <StepSlider
            stepperDetails={[
              { count: 1, title: "Video Selection" },
              { count: 2, title: "Subscriber And Users" },
              { count: 3, title: "Audience And Interests" },
              { count: 4, title: "Start The Promotion" },
            ]}
            activeStep={currentStep}
            setActiveStep={handleStepChange}
          />
        </div>

        <div className="step-component-container">
          {currentStep === 1 && (
            <VideoSelection
              ChannelDetails={ChannelDetails}
              handleStepChange={handleStepChange}
              SelectedVideos={SelectedVideos}
              setSelectedVideos={setSelectedVideos}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
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
          )}
          {currentStep === 2 && (
            <SubscriberAndUsers
              ChannelDetails={ChannelDetails}
              handleStepChange={handleStepChange}
              value={value}
              setValue={setValue}
              Views={Views}
              setViews={setViews}
            />
          )}
          {currentStep === 3 && (
            <AudienceAndInterests
              ChannelDetails={ChannelDetails}
              handleStepChange={handleStepChange}
              audienceAndInterestsData={audienceAndInterestsData}
              setAudienceAndInterestsData={setAudienceAndInterestsData}
              checked={checked}
              setChecked={setChecked}
              genders={genders}
              setGenders={setGenders}
              ages={ages}
              setAges={setAges}
              interests={interests}
              setInterests={setInterests}
              keywords={keywords}
              setKeywords={setKeywords}
              keywordInput={keywordInput}
              setKeywordInput={setKeywordInput}
              selectedCountries={selectedCountries}
              setselectedCountries={setselectedCountries}
              show={show}
              setShow={setShow}
              handleGenderSelect={handleGenderSelect}
              handleAgeCheck={handleAgeCheck}
              handleInterestCheck={handleInterestCheck}
              handleKeywordAdd={handleKeywordAdd}
              handleKeywordRemove={handleKeywordRemove}
              handleCheckboxClick={handleCheckboxClick}
              OpenOptions={OpenOptions}
              options={options}
            />
          )}
          {currentStep === 4 && (
            <StartThePromotion
              value={value}
              Views={Views}
              ChannelDetails={ChannelDetails}
              VideoSelectionData={SelectedVideos}
              selectedOption={selectedOption}
              selectedSlides={selectedSlides}
              AudienceAndInterestsData={audienceAndInterestsData}
              handleStepChange={handleStepChange}
              checked={checked}
              genders={genders}
              ages={ages}
              interests={interests}
              keywords={keywords}
              keywordInput={keywordInput}
              show={show}
            />
          )}
        </div>
      </LoginLayout>
    </React.Fragment>
  );
};
