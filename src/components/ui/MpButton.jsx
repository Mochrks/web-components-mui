import { Button } from "@mui/material";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const MpButton = forwardRef(({ variant = "contained", ...props }, ref) => {
  return <Button ref={ref} variant={variant} {...props} />;
});

MpButton.displayName = "MpButton";

MpButton.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text", "soft", "link"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary", "error", "warning", "info", "success"]),
};

export default MpButton;
