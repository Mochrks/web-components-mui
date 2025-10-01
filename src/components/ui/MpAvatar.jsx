import { Avatar } from "@mui/material";
import PropTypes from "prop-types";

export default function MpAvatar(props) {
  return <Avatar {...props} />;
}

MpAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.object,
};
