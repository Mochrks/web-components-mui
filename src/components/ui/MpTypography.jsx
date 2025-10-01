import PropTypes from "prop-types";
import { Typography } from "@mui/material";

export default function MpTypography(props) {
  return <Typography {...props} />;
}

MpTypography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "button",
    "overline",
  ]),
  color: PropTypes.string,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  children: PropTypes.node,
};
