import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  useTheme,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Dashboard,
  People,
  ShoppingCart,
  Inventory,
  Settings,
  Analytics,
} from "@mui/icons-material";
import { useState } from "react";
import { Badge } from "../../../components";
import PropTypes from "prop-types";
const LayoutSidebar = ({ open, onClose, width = 240, items = [], variant = "persistent" }) => {
  const theme = useTheme();
  const [openSubmenus, setOpenSubmenus] = useState({});

  const handleSubmenuToggle = (itemId) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const defaultItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Dashboard />,
      href: "/dashboard",
      active: true,
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: <Analytics />,
      href: "/analytics",
    },
    {
      id: "users",
      label: "Users",
      icon: <People />,
      href: "/users",
      badge: { content: "3", color: "primary" },
    },
    {
      id: "products",
      label: "Products",
      icon: <Inventory />,
      href: "/products",
      children: [
        {
          id: "all-products",
          label: "All Products",
          href: "/products",
        },
        {
          id: "categories",
          label: "Categories",
          href: "/products/categories",
        },
        {
          id: "inventory",
          label: "Inventory",
          href: "/products/inventory",
          badge: { content: "Low", color: "warning" },
        },
      ],
    },
    {
      id: "orders",
      label: "Orders",
      icon: <ShoppingCart />,
      href: "/orders",
      badge: { content: "12", color: "error" },
    },
    {
      id: "settings",
      label: "Settings",
      icon: <Settings />,
      href: "/settings",
    },
  ];

  const menuItems = items.length > 0 ? items : defaultItems;

  const renderMenuItem = (item, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isSubmenuOpen = openSubmenus[item.id];

    return (
      <Box key={item.id}>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => {
              if (hasChildren) {
                handleSubmenuToggle(item.id);
              } else {
                onClose?.();
                // Handle navigation here
                console.log("Navigate to:", item.href);
              }
            }}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              pl: open ? depth * 2 + 2.5 : 2.5,
              backgroundColor: item.active ? "action.selected" : "transparent",
              "&:hover": {
                backgroundColor: "action.hover",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: item.active ? "primary.main" : "text.secondary",
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.label}
              sx={{
                opacity: open ? 1 : 0,
                "& .MuiTypography-root": {
                  fontSize: "0.875rem",
                  fontWeight: item.active ? 600 : 400,
                },
              }}
            />

            {item.badge && open && (
              <Badge color={item.badge.color} variant="filled" sx={{ ml: 1 }}>
                {item.badge.content}
              </Badge>
            )}

            {hasChildren && open && (
              <Box sx={{ ml: 1 }}>{isSubmenuOpen ? <ExpandLess /> : <ExpandMore />}</Box>
            )}
          </ListItemButton>
        </ListItem>

        {hasChildren && open && (
          <Collapse in={isSubmenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((childItem) => renderMenuItem(childItem, depth + 1))}
            </List>
          </Collapse>
        )}
      </Box>
    );
  };

  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      sx={{
        width: open ? width : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? width : 0,
          boxSizing: "border-box",
          borderRight: `1px solid ${theme.palette.divider}`,
          backgroundColor: "background.paper",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          overflowX: "hidden",
        },
      }}
    >
      <Box
        sx={{
          p: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 64,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            background: "linear-gradient(45deg, #1976d2, #00bcd4)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          MyApp
        </Typography>
      </Box>

      <List sx={{ flexGrow: 1, py: 1 }}>{menuItems.map((item) => renderMenuItem(item))}</List>

      {/* Sidebar Footer */}
      <Box
        sx={{
          p: 2,
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: "action.hover",
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          v1.0.0
        </Typography>
      </Box>
    </Drawer>
  );
};

LayoutSidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  width: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      href: PropTypes.string,
      active: PropTypes.bool,
      badge: PropTypes.shape({
        content: PropTypes.string,
        color: PropTypes.string,
      }),
      children: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          icon: PropTypes.node,
          href: PropTypes.string,
          active: PropTypes.bool,
        })
      ),
    })
  ).isRequired,
  variant: PropTypes.string,
};
export default LayoutSidebar;
