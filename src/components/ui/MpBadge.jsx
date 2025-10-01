import { Chip } from "@mui/material";
import PropTypes from "prop-types";

export default function MpBadge({ children, variant = "outlined", ...props }) {
  return <Chip label={children} variant={variant} size="small" {...props} />;
}

MpBadge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["filled", "outlined"]),
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ]),
};
