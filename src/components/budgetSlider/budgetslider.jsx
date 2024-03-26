import React, { useState } from "react";
import "./budgetslider.css"; // Make sure you link the CSS file

const BudgetSlider = () => {
  const [budget, setBudget] = useState(32);

  return (
    <div className="slider-component">
      <div className="channel-info">
        <img
          src="/path-to-your-tiger-image.jpg"
          alt="Channel"
          className="channel-icon"
        />
        <div>
          <h2 className="channel-title">Tiger story</h2>
          <p className="channel-subtitle">YouTube Channel</p>
        </div>
      </div>
      <div className="budget-container">
        <div className="budget-info">
          <label htmlFor="budget-range" className="budget-label">
            Your Weekly Budget
          </label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="budget-input"
          />
          <span className="budget-min">Min. $32</span>
        </div>
        <div className="budget-slider-container">
          <input
            type="range"
            min="32"
            max="200"
            value={budget}
            className="budget-slider"
            id="budget-range"
            onChange={(e) => setBudget(e.target.value)}
          />
          <div className="budget-amounts">
            <div className="budget-amount">$48</div>
            <div className="budget-amount most-popular">$48</div>
            <div className="budget-amount">$48</div>
            <div className="budget-amount">$48</div>
          </div>
        </div>
      </div>
      <div className="views-container">
        <div className="views-count">+3 133</div>
        <div className="views-text">Views per week</div>
        <div className="views-description">
          Channel promotion has a cumulative effect. The longer the promotion,
          more subscribers and views you get.
        </div>
      </div>
    </div>
  );
};

export default BudgetSlider;
