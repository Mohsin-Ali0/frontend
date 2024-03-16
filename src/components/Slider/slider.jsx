import React, { useState } from "react";
import { Card,  InputGroup, FormControl } from "react-bootstrap";
import "./slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export const BudgetCard = () => {

  const min = 32; // Set the minimum value of the slider
  const max = 1010; // Set the maximum value of the slider
  const step = 10; // Increment/Decrement value

  const [value, setValue] = useState(min);
  const [Views, setViews] = useState(1408);
  const [IconVal, setIconVal] = useState(true);

  // Function to handle the slider change
  const handleChange = (e) => {
    const newValue = Math.round(e.target.value / 10) * 10;
    if (e.target.value > max) {
      setValue(max - 10);
      setViews((max * 97.8).toFixed(0));
    } else if (e.target.value < min) {
      setValue(min);
      setViews((min * 97.8).toFixed(0));
    } else {
      setValue(newValue);
      setViews((e.target.value * 97.8).toFixed(0));
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
    <div className="budget-cards-container">
      {/* Weekly Budget Card */}
      <Card className="card-one-conatiner">
        <Card.Body className="card-one-body">
          <Card.Title>
            <h4>
              Your Weekly <span className="bluetxt">Budget</span>
              <span
                style={{ fontSize: "14px", color: "gray", marginLeft: "20px" }}
              >
                (Min. ${min})
              </span>
            </h4>
          </Card.Title>
          <InputGroup className="mb-4 slider-txt-container">
            {IconVal ? <InputGroup.Text>$</InputGroup.Text> : null}
            <FormControl
              type="number"
              value={value}
              onChange={handleChangeText}
              onBlur={handleChange}
              onFocus={OnFoustText}
            />
          </InputGroup>
          {/* <Form.Range
           type="range"
           min={min}
           max={max}
           step={step}
           value={value}
           onChange={handleChange}
           style={sliderStyle}
           className="custom-slider"
          /> */}

          <div className="slider-container">
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
        </Card.Body>
      </Card>

      {/* Results After One Week Card */}
      <Card className="card-two-conatiner">
        <Card.Body className="card-two-body">
          <Card.Title>
            <p className="p-txt">Your Results After One Week</p>
          </Card.Title>
          <div className="p-2 d-flex">
            <FontAwesomeIcon icon={faEye} size="3x" />
            &nbsp; &nbsp;
            <h1>{Views}</h1>
          </div>
          <p className=" p-2">Views</p>
        </Card.Body>
      </Card>
    </div>
  );
};
