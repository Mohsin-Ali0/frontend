import React, { useState } from "react";
import { LoginLayout } from "../../components/Layout/loggedinlayout/loginLayout";
import StepSlider from "../../components/StepSlider/stepslider";
import { SubscriberAndUsers } from "./SubscribersandUsers/subscribersandusers";
import { VideoSelection } from "./VideoSelection/videoselection";
import { AudienceAndInterests } from "./AudienceAndInterests/audienceandIntrest";
import { StartThePromotion } from "./StartThePromotion/startpromotion";
const stepperDetails = [
  { count: 1, title: "Subscriber And Users", component: SubscriberAndUsers },
  { count: 2, title: "Video Selection", component: VideoSelection },
  {
    count: 3,
    title: "Audience And Interests",
    component: AudienceAndInterests,
  },
  { count: 4, title: "Start The Promotion", component: StartThePromotion },
];
export const DashBoard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (stepCount) => {
    setCurrentStep(stepCount);
  };

  const renderStepComponent = () => {
    const activeStepDetail = stepperDetails.find(
      (step) => step.count === currentStep
    );
    if (!activeStepDetail) return null; // Or a default/fallback component
    const ActiveComponent = activeStepDetail.component; // ActiveComponent is now a reference to the component to render
    return <ActiveComponent />;
  };
  return (
    <React.Fragment>
      <LoginLayout>
        <div
          className="stepper__view"
          style={{
            backgroundColor: "pink",
          }}
        >
          <StepSlider
            stepperDetails={[
              { count: 1, title: "Subscriber And Users" },
              { count: 2, title: "Video Selection" },
              { count: 3, title: "Audience And Interests" },
              { count: 4, title: "Start The Promotion" },
            ]}
            activeStep={currentStep}
            setActiveStep={handleStepChange}
          />
        </div>

        <div className="step-component-container">{renderStepComponent()}</div>
      </LoginLayout>
    </React.Fragment>
  );
};
