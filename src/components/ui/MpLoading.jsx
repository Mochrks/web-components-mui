import PropTypes from "prop-types";
import { CircularProgress, Box } from "@mui/material";

export default function MpLoading({ size = 40, ...props }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px" {...props}>
      <CircularProgress size={size} />
    </Box>
  );
}

MpLoading.propTypes = {
  size: PropTypes.number,
};
