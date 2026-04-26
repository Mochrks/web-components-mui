import { useState } from "react";
import { Grid, Box, Typography, Stack, Button, Menu, MenuItem, Fade } from "@mui/material";
import { MpCard } from "../components";
import { ChevronDown, Layers, Layout, MousePointer2 } from "lucide-react";

export default function NavMenuShowcase() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item xs={12}>
      <MpCard title="Navigation Menu (Mega Menu)">
        <Stack direction="row" spacing={2}>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<ChevronDown size={16} />}
            variant="text"
            sx={{ fontWeight: 600 }}
          >
            Resources
          </Button>
          <Button variant="text" sx={{ fontWeight: 600 }}>
            Pricing
          </Button>
          <Button variant="text" sx={{ fontWeight: 600 }}>
            Documentation
          </Button>
        </Stack>

        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          PaperProps={{
            sx: {
              borderRadius: 3,
              mt: 1.5,
              minWidth: 400,
              boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
              p: 2,
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <MenuItem onClick={handleClose} sx={{ borderRadius: 2, py: 1.5 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ p: 1, borderRadius: 2, bgcolor: "blue.50", color: "blue.600" }}>
                      <Layers size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight="bold">
                        Components
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Ready to use UI building blocks.
                      </Typography>
                    </Box>
                  </Stack>
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{ borderRadius: 2, py: 1.5 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{ p: 1, borderRadius: 2, bgcolor: "green.50", color: "green.600" }}>
                      <Layout size={20} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" fontWeight="bold">
                        Layouts
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Flexible grid systems and containers.
                      </Typography>
                    </Box>
                  </Stack>
                </MenuItem>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  borderRadius: 3,
                  p: 3,
                  color: "white",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src="/featured-menu.png"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.3,
                  }}
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80";
                  }}
                />
                <Box sx={{ position: "relative" }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Featured
                  </Typography>
                  <Typography variant="caption">Check our latest updates.</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Menu>
      </MpCard>
    </Grid>
  );
}
