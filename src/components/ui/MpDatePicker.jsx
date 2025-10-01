"use client";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";

export default function MpDatePicker({ label, value, onChange, ...rest }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={(v) => onChange?.(v)}
        slotProps={{ textField: { size: "small" } }}
        {...rest}
      />
    </LocalizationProvider>
  );
}
MpDatePicker.propTypes = { label: PropTypes.node, value: PropTypes.any, onChange: PropTypes.func };
