import { FormControlLabel, Switch } from "@mui/material";
import PropTypes from "prop-types";

export default function MpSwitch({ label, ...props }) {
  if (!label) {
    return <Switch {...props} />;
  }

  return <FormControlLabel control={<Switch {...props} />} label={label} />;
}

MpSwitch.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
