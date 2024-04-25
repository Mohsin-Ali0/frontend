import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./budgetslider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const BudgetSlider = ({ ChannelDetails, value, setValue, Views, setViews }) => {
  const min = 32; // Set the minimum value of the slider
  const max = 1010; // Set the maximum value of the slider
  const step = 10; // Increment/Decrement value

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
          <div className="p-2 d-flex">
            <FontAwesomeIcon icon={faEye} size="3x" />
            &nbsp; &nbsp;
            <h1>{Views}</h1>
          </div>
          <p className=" p-2">Views</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BudgetSlider;

// import React, { useState } from "react";
// import "./budgetslider.css"; // Make sure you link the CSS file

// const BudgetSlider = ({ ChannelDetails }) => {
//   const [budget, setBudget] = useState(32);

//   return (
//     <div className="slider-component">
// <div className="channel-info">
//   <img
//     src={ChannelDetails.thumbnail}
//     alt="Channel"
//     className="channel-icon"
//   />
//   <div>
//     <h2 className="channel-title">{ChannelDetails.title}</h2>
//     <p className="channel-subtitle">YouTube Channel</p>
//   </div>
// </div>
//       <div className="budget-container">
//         <div className="budget-info">
//           <label htmlFor="budget-range" className="budget-label">
//             Your Weekly Budget
//           </label>
//           <input
//             type="number"
//             value={budget}
//             onChange={(e) => setBudget(e.target.value)}
//             className="budget-input"
//           />
//           <span className="budget-min">Min. $32</span>
//         </div>
//         <div className="budget-slider-container">
//           <input
//             type="range"
//             min="32"
//             max="200"
//             value={budget}
//             className="budget-slider"
//             id="budget-range"
//             onChange={(e) => setBudget(e.target.value)}
//           />
// <div className="budget-amounts">
//   <div className="budget-amount">$48</div>
//   <div className="budget-amount most-popular">$48</div>
//   <div className="budget-amount">$48</div>
//   <div className="budget-amount">$48</div>
// </div>
//         </div>
//       </div>
//       <div className="views-container">
//         <div className="views-count">+3 133</div>
//         <div className="views-text">Views per week</div>
//         <div className="views-description">
//           Channel promotion has a cumulative effect. The longer the promotion,
//           more subscribers and views you get.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BudgetSlider;
