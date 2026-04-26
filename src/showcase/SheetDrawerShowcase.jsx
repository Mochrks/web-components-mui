import { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  Button,
  Drawer,
  IconButton,
  TextField,
  Avatar,
  Divider,
} from "@mui/material";
import { MpCard, MpButton } from "../components";
import { X, User, Settings, Bell, Menu } from "lucide-react";

export default function SheetDrawerShowcase() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");

  const toggleDrawer = (p) => () => {
    setPlacement(p);
    setOpen(true);
  };

  return (
    <Grid item xs={12}>
      <MpCard title="Sheet / Side Panel (Drawer)">
        <Stack spacing={4}>
          <Typography variant="body2" color="text.secondary">
            Flexible side panels for mobile menus, filters, or quick editing.
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
            <Button
              variant="outlined"
              startIcon={<Menu size={18} />}
              onClick={toggleDrawer("right")}
            >
              Right Sheet
            </Button>
            <Button
              variant="outlined"
              startIcon={<Menu size={18} />}
              onClick={toggleDrawer("left")}
            >
              Left Sheet
            </Button>
            <Button variant="outlined" onClick={toggleDrawer("top")}>
              Top Sheet
            </Button>
            <Button variant="outlined" onClick={toggleDrawer("bottom")}>
              Bottom Sheet
            </Button>
          </Stack>
        </Stack>

        <Drawer
          anchor={placement}
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              width: placement === "top" || placement === "bottom" ? "auto" : 400,
              maxWidth: "100%",
              borderRadius:
                placement === "right"
                  ? "24px 0 0 24px"
                  : placement === "left"
                    ? "0 24px 24px 0"
                    : 0,
              p: 3,
            },
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}
          >
            <Typography variant="h6" fontWeight="bold">
              {placement === "right" ? "Edit Profile" : "Navigation"}
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <X size={20} />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 4 }} />

          {placement === "right" ? (
            <Stack spacing={4}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
                <Box sx={{ position: "relative" }}>
                  <Avatar src="/avatar-john.png" sx={{ width: 100, height: 100 }} />
                  <IconButton
                    size="small"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      bgcolor: "primary.main",
                      color: "white",
                      "&:hover": { bgcolor: "primary.dark" },
                    }}
                  >
                    <Settings size={16} />
                  </IconButton>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6">John Doe</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Software Engineer
                  </Typography>
                </Box>
              </Box>

              <Stack spacing={3}>
                <TextField label="Full Name" defaultValue="John Doe" fullWidth size="small" />
                <TextField label="Email" defaultValue="john@example.com" fullWidth size="small" />
                <TextField
                  label="Bio"
                  defaultValue="Building the future with MUI."
                  fullWidth
                  multiline
                  rows={3}
                  size="small"
                />
              </Stack>

              <Stack direction="row" spacing={2} pt={4}>
                <Button fullWidth variant="outlined" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <MpButton fullWidth onClick={() => setOpen(false)}>
                  Save Changes
                </MpButton>
              </Stack>
            </Stack>
          ) : (
            <Stack spacing={2}>
              <Button
                variant="text"
                fullWidth
                sx={{ justifyContent: "start", gap: 2 }}
                color="inherit"
              >
                <User size={18} /> Profile
              </Button>
              <Button
                variant="text"
                fullWidth
                sx={{ justifyContent: "start", gap: 2 }}
                color="inherit"
              >
                <Bell size={18} /> Notifications
              </Button>
              <Button
                variant="text"
                fullWidth
                sx={{ justifyContent: "start", gap: 2 }}
                color="inherit"
              >
                <Settings size={18} /> Settings
              </Button>
            </Stack>
          )}
        </Drawer>
      </MpCard>
    </Grid>
  );
}
