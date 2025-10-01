import PropTypes from "prop-types";
import { Skeleton } from "@mui/material";

export default function MpSkeleton(props) {
  return <Skeleton {...props} />;
}

MpSkeleton.propTypes = {
  variant: PropTypes.oneOf(["text", "rectangular", "circular"]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animation: PropTypes.oneOf(["pulse", "wave", false]),
};
