"use client";

import PropTypes from "prop-types";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function MpDrawerSidebar({
  open,
  onClose,
  title,
  items,
  width = 280,
  anchor = "left",
}) {
  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      <Box sx={{ width }} role="presentation">
        {title && (
          <>
            <Box
              sx={{ p: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <Typography variant="h6" fontWeight={600}>
                {title}
              </Typography>
              <IconButton size="small" onClick={onClose} aria-label="close">
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <Divider />
          </>
        )}
        <List>
          {items.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  item.onClick?.();
                  if (item.closeOnClick !== false) {
                    onClose();
                  }
                }}
                selected={item.active}
                disabled={item.disabled}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "action.selected",
                  },
                }}
              >
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.label} secondary={item.description} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

MpDrawerSidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
  anchor: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.node,
      onClick: PropTypes.func,
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      closeOnClick: PropTypes.bool,
    })
  ).isRequired,
};
