"use client";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import PropTypes from "prop-types";

export default function MpSelect({ label, value, onChange, options = [], ...rest }) {
  const id = rest.id || `sel-${label || "select"}`;
  return (
    <FormControl fullWidth size="small">
      {label && <InputLabel id={`${id}-label`}>{label}</InputLabel>}
      <Select
        labelId={`${id}-label`}
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        {...rest}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value ?? opt} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

MpSelect.propTypes = {
  label: PropTypes.node,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
};
