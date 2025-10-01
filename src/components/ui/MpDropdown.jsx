"use client";
import { Button, Menu, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

export default function MpDropdown({ label = "Open", options = [], onSelect }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <>
      <Button variant="outlined" onClick={(e) => setAnchorEl(e.currentTarget)}>
        {label}
      </Button>
      <Menu open={open} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
        {options.map((opt) => (
          <MenuItem
            key={opt.value ?? opt}
            onClick={() => {
              onSelect?.(opt.value ?? opt);
              setAnchorEl(null);
            }}
          >
            {opt.label ?? String(opt)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
MpDropdown.propTypes = {
  label: PropTypes.node,
  options: PropTypes.array,
  onSelect: PropTypes.func,
};
