import { Avatar } from "@mui/material";
import PropTypes from "prop-types";

export default function MpAvatar({ src, alt, children, sx, className, ...props }) {
  return (
    <Avatar src={src} alt={alt} sx={sx} className={className} {...props}>
      {children}
    </Avatar>
  );
}

MpAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.object,
  className: PropTypes.string,
};
