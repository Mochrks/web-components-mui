import { FormControlLabel, Checkbox } from "@mui/material";
import PropTypes from "prop-types";

export default function MpCheckbox({ label, ...props }) {
  if (!label) {
    return <Checkbox {...props} />;
  }

  return <FormControlLabel control={<Checkbox {...props} />} label={label} />;
}

MpCheckbox.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
