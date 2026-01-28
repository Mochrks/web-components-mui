import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import { MpCard, MpStepper, MpButton } from "../components";

export default function StepperShowcase() {
  const [stepperActive, setStepperActive] = useState(0);

  return (
    <Grid item xs={12}>
      <MpCard title="Stepper">
        <Stack spacing={2}>
          <MpStepper
            steps={["Select campaign", "Create ad group", "Create ads"]}
            activeStep={stepperActive}
          />
          <Stack direction="row" spacing={2}>
            <MpButton
              disabled={stepperActive === 0}
              onClick={() => setStepperActive((prev) => prev - 1)}
            >
              Back
            </MpButton>
            <MpButton
              disabled={stepperActive === 2}
              onClick={() => setStepperActive((prev) => prev + 1)}
            >
              Next
            </MpButton>
          </Stack>
        </Stack>
      </MpCard>
    </Grid>
  );
}
