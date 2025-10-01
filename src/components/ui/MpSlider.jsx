import PropTypes from "prop-types";
import { Slider } from "@mui/material";

export default function MpSlider(props) {
  return <Slider {...props} />;
}

MpSlider.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  valueLabelDisplay: PropTypes.oneOf(["auto", "on", "off"]),
};
