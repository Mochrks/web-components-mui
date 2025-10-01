"use client";

import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import PropTypes from "prop-types";

export default function MpDialog({ title, children, actions, onClose, ...props }) {
  return (
    <Dialog onClose={onClose} {...props} maxWidth="sm" fullWidth>
      {title && (
        <DialogTitle
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          {title}
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </DialogTitle>
      )}
      {children && <DialogContent>{children}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
}

MpDialog.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  actions: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  maxWidth: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", false]),
  fullWidth: PropTypes.bool,
};
