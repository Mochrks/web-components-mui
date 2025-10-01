import PropTypes from "prop-types";
import { Autocomplete, TextField } from "@mui/material";

export default function MpAutocomplete({ label, placeholder, error, helperText, ...props }) {
  return (
    <Autocomplete
      {...props}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
          variant="outlined"
          size="small"
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    />
  );
}

MpAutocomplete.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  options: PropTypes.array.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
