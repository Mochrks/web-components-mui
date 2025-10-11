import { Box, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import LayoutHeader from "./components/LayoutHeader";
import LayoutSidebar from "./components/LayoutSidebar";
import LayoutContent from "./components/LayoutContent";
import LayoutFooter from "./components/LayoutFooter";
import PropTypes from "prop-types";
const MainLayout = ({
  children,
  headerProps = {},
  sidebarProps = {},
  contentProps = {},
  footerProps = {},
  showHeader = true,
  showSidebar = true,
  showFooter = true,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [colorMode, setColorMode] = useState("light");

  const handleToggleColorMode = () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      {/* Header */}
      {showHeader && (
        <LayoutHeader
          title="My Application"
          onMenuClick={handleSidebarToggle}
          mode={colorMode}
          onToggleColorMode={handleToggleColorMode}
          user={{ name: "John Doe", email: "john@example.com" }}
          notifications={[
            {
              id: 1,
              title: "New message",
              message: "You have a new message from Sarah",
              time: "5 min ago",
            },
            {
              id: 2,
              title: "System update",
              message: "System maintenance scheduled",
              time: "1 hour ago",
            },
          ]}
          {...headerProps}
        />
      )}

      {/* Main Content Area */}
      <Box sx={{ display: "flex", flex: 1, pt: showHeader ? "64px" : 0 }}>
        {/* Sidebar */}
        {showSidebar && (
          <LayoutSidebar
            open={sidebarOpen}
            onClose={handleSidebarClose}
            variant={isMobile ? "temporary" : "persistent"}
            {...sidebarProps}
          />
        )}

        {/* Content */}
        <LayoutContent
          sx={{
            ml: showSidebar && sidebarOpen && !isMobile ? `${sidebarProps.width || 240}px` : 0,
            transition: theme.transitions.create("margin-left", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
          {...contentProps}
        >
          {children}
        </LayoutContent>
      </Box>

      {/* Footer */}
      {showFooter && <LayoutFooter {...footerProps} />}
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  headerProps: PropTypes.object,
  sidebarProps: PropTypes.object,
  contentProps: PropTypes.object,
  footerProps: PropTypes.object,
  showHeader: PropTypes.bool,
  showSidebar: PropTypes.bool,
  showFooter: PropTypes.bool,
};
export default MainLayout;
