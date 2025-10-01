import { Chip } from "@mui/material";
import PropTypes from "prop-types";

export default function MpChip(props) {
  return <Chip {...props} />;
}

MpChip.propTypes = {
  label: PropTypes.node,
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ]),
  variant: PropTypes.oneOf(["filled", "outlined"]),
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium"]),
};
