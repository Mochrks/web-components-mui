import { Tooltip } from "@mui/material";
import PropTypes from "prop-types";

export default function MpTooltip(props) {
  return <Tooltip {...props} />;
}

MpTooltip.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.element.isRequired,
  placement: PropTypes.oneOf([
    "bottom-end",
    "bottom-start",
    "bottom",
    "left-end",
    "left-start",
    "left",
    "right-end",
    "right-start",
    "right",
    "top-end",
    "top-start",
    "top",
  ]),
  arrow: PropTypes.bool,
};
