"use client";
import { Stack } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";

export default function MpDateRange({ start, end, onChange, labels = ["Start", "End"] }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack direction="row" gap={1}>
        <DatePicker
          label={labels[0]}
          value={start}
          onChange={(v) => onChange?.({ start: v, end })}
          slotProps={{ textField: { size: "small" } }}
        />
        <DatePicker
          label={labels[1]}
          value={end}
          onChange={(v) => onChange?.({ start, end: v })}
          slotProps={{ textField: { size: "small" } }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
MpDateRange.propTypes = {
  start: PropTypes.any,
  end: PropTypes.any,
  onChange: PropTypes.func,
  labels: PropTypes.arrayOf(PropTypes.string),
};
