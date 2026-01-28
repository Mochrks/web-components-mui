import { useState } from "react";
import { Grid, Stack, Typography, Box } from "@mui/material";
import { Home, Settings, Person, Notifications, Dashboard } from "@mui/icons-material";
import { MpCard, MpTabs, MpButton, MpDialog, MpPopover, MpDrawerSidebar } from "../components";

export default function TabsDialogShowcase() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerSidebarOpen, setDrawerSidebarOpen] = useState(false);
  const [popoverAnchor, setPopoverAnchor] = useState(null);

  return (
    <Grid item xs={12}>
      <MpCard title="Tabs & Dialog">
        <MpTabs
          tabs={[
            {
              label: "Overview",
              content: (
                <Typography>
                  This is the overview tab content with shadcn-inspired styling.
                </Typography>
              ),
            },
            {
              label: "Details",
              content: (
                <Typography>Detailed information goes here with consistent theming.</Typography>
              ),
            },
            {
              label: "Settings",
              content: <Typography>Configure your preferences in this tab.</Typography>,
            },
          ]}
        />
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <MpButton onClick={() => setDialogOpen(true)}>Open Dialog</MpButton>
          <MpButton onClick={(e) => setPopoverAnchor(e.currentTarget)}>Popover</MpButton>
          <MpButton onClick={() => setDrawerSidebarOpen(true)}>Drawer Sidebar</MpButton>
        </Stack>
      </MpCard>

      <MpDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Example Dialog"
        actions={
          <>
            <MpButton variant="outlined" onClick={() => setDialogOpen(false)}>
              Cancel
            </MpButton>
            <MpButton onClick={() => setDialogOpen(false)}>Confirm</MpButton>
          </>
        }
      >
        <Typography>
          This is a dialog with shadcn-inspired styling. It includes a title, content area, and
          action buttons.
        </Typography>
      </MpDialog>

      <MpDrawerSidebar
        open={drawerSidebarOpen}
        onClose={() => setDrawerSidebarOpen(false)}
        title="Drawer Navigation"
        items={[
          {
            label: "Dashboard",
            icon: <Dashboard />,
            onClick: () => setDrawerSidebarOpen(false),
          },
          {
            label: "Home",
            icon: <Home />,
            onClick: () => setDrawerSidebarOpen(false),
          },
          {
            label: "Profile",
            icon: <Person />,
            onClick: () => setDrawerSidebarOpen(false),
          },
          {
            label: "Settings",
            icon: <Settings />,
            onClick: () => setDrawerSidebarOpen(false),
          },
        ]}
      />

      <MpPopover
        open={Boolean(popoverAnchor)}
        anchorEl={popoverAnchor}
        onClose={() => setPopoverAnchor(null)}
      >
        <Box sx={{ p: 2, maxWidth: 300 }}>
          <Typography variant="subtitle2" fontWeight={600} gutterBottom>
            Popover Content
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a popover with custom content. You can put any component here.
          </Typography>
        </Box>
      </MpPopover>
    </Grid>
  );
}
