import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

export default function MpFieldValue({ label, value }) {
  return (
    <Box>
      <Typography variant="body2" color="text.secondary" fontWeight={500} gutterBottom>
        {label}
      </Typography>
      <Typography variant="body1" component="div">
        {value}
      </Typography>
    </Box>
  );
}

MpFieldValue.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]).isRequired,
};
