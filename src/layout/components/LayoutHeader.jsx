import { AppBar, Toolbar, IconButton, Typography, Box, useTheme } from "@mui/material";
import { Menu as MenuIcon, Notifications, AccountCircle } from "@mui/icons-material";
import { Badge, Button, Dropdown } from "../../../components";
import PropTypes from "prop-types";
const LayoutHeader = ({
  title,
  onMenuClick,
  user,
  notifications = [],
  onToggleColorMode,
  mode = "light",
}) => {
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: "background.paper",
        color: "text.primary",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onMenuClick}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component="h1"
          noWrap
          sx={{
            flexGrow: 1,
            fontWeight: 600,
            fontSize: "1.25rem",
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button variant="text" onClick={onToggleColorMode} sx={{ minWidth: "auto", px: 1 }}>
            {mode === "dark" ? "🌙" : "☀️"}
          </Button>

          <Dropdown
            trigger={
              <IconButton color="inherit">
                <Badge badgeContent={notifications.length} color="error" max={9}>
                  <Notifications />
                </Badge>
              </IconButton>
            }
            options={
              notifications.length > 0
                ? notifications.map((notif) => ({
                    value: notif.id,
                    label: notif.title,
                    description: notif.message,
                    time: notif.time,
                  }))
                : [{ value: "empty", label: "No new notifications" }]
            }
            onSelect={(value) => {
              if (value !== "empty") {
                console.log("Notification clicked:", value);
              }
            }}
            placement="bottom-end"
            sx={{ width: 320 }}
          />

          <Dropdown
            trigger={
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            }
            options={[
              {
                value: "profile",
                label: "Profile",
                icon: <AccountCircle fontSize="small" />,
              },
              { value: "divider", type: "divider" },
              {
                value: "logout",
                label: "Logout",
                icon: <AccountCircle fontSize="small" />,
                color: "error",
              },
            ]}
            onSelect={(value) => {
              if (value === "logout") {
                console.log("Logout clicked");
              }
            }}
            placement="bottom-end"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

LayoutHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func,
  user: PropTypes.object,
  notifications: PropTypes.arrayOf(PropTypes.object),
  onToggleColorMode: PropTypes.func,
  mode: PropTypes.string,
};
export default LayoutHeader;
