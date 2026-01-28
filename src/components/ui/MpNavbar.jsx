"use client";

import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function MpNavbar({
  title,
  onMenuClick,
  actions,
  logo,
  mode = "light",
  onToggleColorMode,
}) {
  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        {onMenuClick && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {logo && <Box sx={{ mr: 2, display: "flex", alignItems: "center" }}>{logo}</Box>}

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
          {title}
        </Typography>

        {actions && (
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "text"}
                color={action.color || "inherit"}
                onClick={action.onClick}
                startIcon={action.icon}
              >
                {action.label}
              </Button>
            ))}

            {onToggleColorMode && (
              <IconButton
                onClick={onToggleColorMode}
                color="inherit"
                aria-label="toggle theme"
                sx={{ ml: 1 }}
              >
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            )}
          </Box>
        )}

        {!actions && onToggleColorMode && (
          <IconButton onClick={onToggleColorMode} color="inherit" aria-label="toggle theme">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

MpNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func,
  logo: PropTypes.node,
  mode: PropTypes.oneOf(["light", "dark"]),
  onToggleColorMode: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      icon: PropTypes.node,
      variant: PropTypes.oneOf(["text", "outlined", "contained", "soft"]),
      color: PropTypes.oneOf([
        "inherit",
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
      ]),
    })
  ),
};
