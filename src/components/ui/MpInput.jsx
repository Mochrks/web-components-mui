import { TextField } from "@mui/material";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const MpInput = forwardRef((props, ref) => {
  return (
    <TextField
      ref={ref}
      variant="outlined"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
});

MpInput.displayName = "MpInput";

MpInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default MpInput;
