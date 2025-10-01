import { Alert, AlertTitle } from "@mui/material";
import PropTypes from "prop-types";

export default function MpAlert({ title, children, ...props }) {
  return (
    <Alert {...props}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </Alert>
  );
}

MpAlert.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  severity: PropTypes.oneOf(["error", "warning", "info", "success"]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
  onClose: PropTypes.func,
};
