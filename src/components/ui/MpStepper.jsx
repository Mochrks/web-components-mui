import PropTypes from "prop-types";
import { Stepper, Step, StepLabel } from "@mui/material";

export default function MpStepper({ steps, activeStep, ...props }) {
  return (
    <Stepper activeStep={activeStep} {...props}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

MpStepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  alternativeLabel: PropTypes.bool,
};
