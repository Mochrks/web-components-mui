import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import { MpCard, MpDatePicker, MpDateRange } from "../components";

export default function DatePickersShowcase() {
  const [dateValue, setDateValue] = useState(null);
  const [dateRangeStart, setDateRangeStart] = useState(null);
  const [dateRangeEnd, setDateRangeEnd] = useState(null);

  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Date Pickers">
        <Stack spacing={2}>
          <MpDatePicker label="Select Date" value={dateValue} onChange={setDateValue} />
          <MpDateRange
            startValue={dateRangeStart}
            endValue={dateRangeEnd}
            onStartChange={setDateRangeStart}
            onEndChange={setDateRangeEnd}
          />
        </Stack>
      </MpCard>
    </Grid>
  );
}
