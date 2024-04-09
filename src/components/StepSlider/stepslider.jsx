import React from "react";
import "./stepslider.scss";
import { useMediaQuery } from "react-responsive";

const func = (count) => {
  console.log(count, "CHILD");
};

// Adjusted step function to receive activeStep and a function to change it
const Step = ({
  stepDetails,
  index,
  activeStep,
  setActiveStep,
  isTabletOrMobile,
}) => (
  <React.Fragment>
    <input
      className="stepper__input"
      id={`stepper-flex-${index + 1}`}
      name="stepper-flex"
      type="radio"
      // Mark as checked if this step's index +1 matches the active step
      checked={activeStep === index + 1}
      // Change the active step when a new step is selected
      onChange={() => setActiveStep(index + 1)}
    />
    <div className="stepper__step">
      <label className="stepper__button" htmlFor={`stepper-flex-${index + 1}`}>
        {/* <span>{stepDetails.title}</span> */}
        {!isTabletOrMobile ? <span>{stepDetails.title}</span> : null}
      </label>
    </div>
  </React.Fragment>
);

// Adjusted to destructure props directly and added activeStep and setActiveStep props
export const StepSlider = ({ stepperDetails, activeStep, setActiveStep }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <ul className="container">
      <li className="container__item">
        <div className="stepper stepper--flexbox">
          {stepperDetails.map((step, index) => (
            <Step
              key={index}
              stepDetails={step}
              index={index}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              isTabletOrMobile={isTabletOrMobile}
            />
          ))}
        </div>
      </li>
    </ul>
  );
};

// const steps = (stepDetails, count, onStepClick) => (
//   <React.Fragment key={count}>
//     <input
//       className="stepper__input"
//       id={`stepper-flex-${count}`}
//       name="stepper-flex"
//       type="radio"
//       checked="checked"
//       onClick={() => {
//         onStepClick(stepDetails);
//         func(count);
//       }}
//       // onClick={() => func(count)}
//     />
//     <div
//       className="stepper__step"
//       // onClick={() => onStepClick(stepDetails, count)}
//     >
//       <label className="stepper__button" htmlFor={`stepper-flex-${count}`}>
//         {stepDetails.title}
//       </label>
//       <p className="stepper__content" htmlFor={`stepper-flex-${count}`}>
//         {stepDetails.componentView}
//       </p>
//     </div>
//   </React.Fragment>
// );

// const StepSlider = (props) => {
//   const [activeStep, setActiveStep] = useState();

//   const { stepperDetails, onStepClick } = props;
//   return (
//     <ul className="container">
//       <li className="container__item">
//         <div className="stepper stepper--flexbox">
//           {stepperDetails.map((step, index) => steps(step, index, onStepClick))}
//         </div>
//       </li>
//     </ul>
//   );

// return (
//   <div className="step-slider">
//     <div className="progress-bar-container">
//       <div
//         className="progress-bar"
//         style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
//       />
//     </div>
//     {steps.map((label, index) => (
//       <div
//         className={`step ${index <= activeStep ? "active" : ""}`}
//         // onClick={() => handleStepClick(index)}
//         key={label}
//       >
//         <div className="step-indicator">
//           {index < activeStep ? "✓" : index + 1}
//         </div>
//         <div className="step-label">{label}</div>
//       </div>
//     ))}
//   </div>
// );

// const StepSlider = ({ currentStep, onStepClick }) => {
//   const steps = [
//     "Subscriber And Users",
//     "Video Selection",
//     "Audience And Interests",
//     "Start The Promotion",
//   ];

//   return (
//     <div className="step-slider">
//       {steps.map((step, index) => {
//         const isCompleted = index < currentStep;
//         return (
//           <div key={step} className={`step ${isCompleted ? "completed" : ""}`}>
//             <div
//               className={`step-indicator ${isCompleted ? "completed" : ""}`}
//               onClick={() => onStepClick(index)}
//             >
//               {isCompleted && <span className="checkmark">✓</span>}
//             </div>
//             <div className="step-label">{step}</div>
//           </div>
//         );
//       })}
//       {/* ... rest of your component */}
//     </div>
//   );
// };

export default StepSlider;
