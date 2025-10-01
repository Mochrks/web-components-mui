"use client";

import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
export default function MpDropdownMenu({ label = "Menu", items = [], buttonProps }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <>
      <Button onClick={(e) => setAnchorEl(e.currentTarget)} {...buttonProps}>
        {label}
      </Button>
      <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
        {items.map((it, i) => (
          <MenuItem
            key={i}
            onClick={() => {
              it.onClick?.();
              setAnchorEl(null);
            }}
          >
            {it.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

MpDropdownMenu.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array,
  buttonProps: PropTypes.object,
};
