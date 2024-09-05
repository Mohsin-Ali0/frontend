import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import "./budgetslider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ViewsIcon } from "../../assets/images";

const BudgetSlider = ({ ChannelDetails, value, setValue, ViewsData }) => {
  const min = parseInt(ViewsData?.minviews?.value); // Set the minimum value of the slider
  const max = parseInt(ViewsData?.maxviews?.value); // Set the maximum value of the slider
  const step = 10; // Increment/Decrement value

  const [IconVal, setIconVal] = useState(true);

  console.log(ViewsData, "ViewsData");

  // const campaign_amount_aftertax =
  //   parseFloat(value) - parseFloat(ViewsData?.defaultrevenue);

  // Function to handle the slider change

  

  const handleChange = (e) => {
    let newValue = Math.round(e.target.value / 10) * 10;
    
    if (newValue > max) {
      setValue(max); // Allow setting the maximum value
    } else if (newValue < min) {
      setValue(min);
    } else {
      setValue(newValue);
    }
    
    setIconVal(true);
  };
  
  const handleChangeText = (e) => {
    setValue(e.target.value);
  };
  const OnFoustText = (e) => {
    setIconVal(false);
  };

  // Calculate background style based on the slider value

  const fillPercentage = ((value - min) / (max - min)) * 100;

  const sliderStyle = {
    background: `linear-gradient(to right, #070434 ${fillPercentage}%, white ${fillPercentage}%)`,
  };

  return (
    <Container>
      <Row className="justify-content-between align-items-center">
        <Col xl={8} className="col-one-cont p-3">
          <Col xl={12}>
            <div className="channel-info">
              <img
                src={ChannelDetails?.thumbnail}
                alt="Channel"
                className="channel-icon"
              />
              <div>
                <h2 className="channel-title">{ChannelDetails?.title}</h2>
                <p className="channel-subtitle">YouTube Channel</p>
              </div>
            </div>
          </Col>
          <Col xl={12}>
            <h4 className="d-flex align-items-center">
              Your &nbsp; Weekly <span className="bluetxt"> &nbsp; Budget</span>
              <InputGroup className="slider-input-container">
                {IconVal ? <InputGroup.Text>$</InputGroup.Text> : null}
                <FormControl
                  className="Custom-budget-input"
                  type="number"
                  value={value}
                  onChange={handleChangeText}
                  onBlur={handleChange}
                  onFocus={OnFoustText}
                />
              </InputGroup>
              <span
                style={{ fontSize: "14px", color: "gray", marginLeft: "20px" }}
              >
                (Min. ${min})
              </span>
            </h4>
          </Col>
          <InputGroup className="slider-input-container-mobresp">
            {IconVal ? <InputGroup.Text>$</InputGroup.Text> : null}
            <FormControl
             className="Custom-budget-input"
              type="number"
              value={value}
              onChange={handleChangeText}
              onBlur={handleChange}
              onFocus={OnFoustText}
            />
          </InputGroup>
          <Col xl={12}>
            <div className="slider-container pt-4 pb-2">
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                style={sliderStyle}
                className="custom-slider"
              />
            </div>
          </Col>
        </Col>
        <Col
          xl={4}
          className="d-flex flex-column justify-content-between align-items-center col-two-cont p-3"
        >
          <p className="p-txt">Your Results After One Week</p>
          <div className="p-2 d-flex gap-2 justify-content-between align-items-center">
            <Image width={50} height={32} src={ViewsIcon} />
           
            {/* <h1>{Views}</h1> */}
            <h1 className="mt-2">
              {" "}
              {Math.floor(
                parseFloat(value) /
                  parseFloat(ViewsData?.bidCost?.interactions?.loCpv?.value)
              )}
            </h1>
          </div>
          <p className=" p-2">Views</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BudgetSlider;
