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
} from "@mui/material";

export default function MpSidebar({ open, onClose, title, items }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 280 }} role="presentation">
        {title && (
          <>
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight={600}>
                {title}
              </Typography>
            </Box>
            <Divider />
          </>
        )}
        <List>
          {items.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={item.onClick}
                selected={item.active}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "action.selected",
                  },
                }}
              >
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

MpSidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      onClick: PropTypes.func,
      active: PropTypes.bool,
    })
  ).isRequired,
};
