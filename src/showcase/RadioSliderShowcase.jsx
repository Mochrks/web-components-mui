import { useState } from "react";
import { Grid, Stack, Box, Typography } from "@mui/material";
import { MpCard, MpRadioGroup, MpSlider } from "../components";

export default function RadioSliderShowcase() {
  const [radioValue, setRadioValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Radio Groups & Sliders">
        <Stack spacing={3}>
          <MpRadioGroup
            label="Choose an option"
            value={radioValue}
            onChange={(e) => setRadioValue(e.target.value)}
            options={[
              { value: "option1", label: "Option 1" },
              { value: "option2", label: "Option 2" },
              { value: "option3", label: "Option 3" },
            ]}
          />
          <Box>
            <Typography variant="body2" fontWeight={500} gutterBottom>
              Volume: {sliderValue}%
            </Typography>
            <MpSlider
              value={sliderValue}
              onChange={(_, value) => setSliderValue(value)}
              valueLabelDisplay="auto"
            />
          </Box>
        </Stack>
      </MpCard>
    </Grid>
  );
}
