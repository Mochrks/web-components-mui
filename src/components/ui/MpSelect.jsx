"use client";

import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import PropTypes from "prop-types";

export default function MpSelect({
  label,
  value,
  onChange,
  options = [],
  error = false,
  helperText = "",
  required = false,
  placeholder,
  ...rest
}) {
  const id = rest.id || `sel-${label || "select"}`;

  return (
    <FormControl fullWidth size="small" error={error} required={required}>
      {label && <InputLabel id={`${id}-label`}>{label}</InputLabel>}
      <Select
        labelId={`${id}-label`}
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        displayEmpty={!!placeholder}
        {...rest}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            <em>{placeholder}</em>
          </MenuItem>
        )}

        {options.map((opt) => (
          <MenuItem key={opt.value ?? opt} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

MpSelect.propTypes = {
  label: PropTypes.node,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
  error: PropTypes.bool,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
};
