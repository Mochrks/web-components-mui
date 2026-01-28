import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import { MpCard, MpInput, MpSelect, MpCheckbox, MpSwitch } from "../components";

export default function InputsShowcase() {
  const [selectValue, setSelectValue] = useState("a");

  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Inputs & Form Controls">
        <Stack spacing={2}>
          <MpInput label="Name" placeholder="Enter your name" />
          <MpInput label="Email" type="email" placeholder="you@example.com" />
          <MpSelect
            label="Select Option"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
            options={[
              { value: "a", label: "Option A" },
              { value: "b", label: "Option B" },
              { value: "c", label: "Option C" },
            ]}
          />
          <Stack direction="row" spacing={2} alignItems="center">
            <MpCheckbox label="I agree to terms" />
            <MpSwitch label="Enable notifications" />
          </Stack>
        </Stack>
      </MpCard>
    </Grid>
  );
}
