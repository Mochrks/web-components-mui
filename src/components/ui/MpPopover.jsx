"use client";

import { Popover } from "@mui/material";
import PropTypes from "prop-types";

export default function MpPopover({ anchorEl, onClose, children, ...rest }) {
  const open = Boolean(anchorEl);
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      {...rest}
    >
      {children}
    </Popover>
  );
}
MpPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
