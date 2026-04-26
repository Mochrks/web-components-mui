import {
  Grid,
  Box,
  Typography,
  Stack,
  Tooltip,
  Popover,
  Avatar,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import { MpCard } from "../components";
import { useState } from "react";
import { Info, User, Heart, Share2 } from "lucide-react";

export default function TooltipHoverShowcase() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeUser, setActiveUser] = useState(null);

  const handlePopoverOpen = (event, user) => {
    setAnchorEl(event.currentTarget);
    setActiveUser(user);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setActiveUser(null);
  };

  const open = Boolean(anchorEl);

  const users = [
    {
      id: 1,
      name: "John Doe",
      username: "@johndoe",
      avatar: "/avatar-john.png",
      bio: "Full-stack developer. Building amazing web experiences.",
      tags: ["React", "TS"],
    },
    {
      id: 2,
      name: "Sarah Design",
      username: "@sarahdesign",
      avatar: "/avatar-sarah.png",
      bio: "UI/UX Designer passionate about creating beautiful interfaces.",
      tags: ["Figma", "UI/UX"],
    },
  ];

  return (
    <Grid item xs={12}>
      <MpCard title="Tooltip & Hover Card">
        <Stack spacing={6}>
          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Interactive Tooltips
            </Typography>
            <Stack direction="row" spacing={3}>
              <Tooltip title="Delete this item" arrow placement="top">
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </Tooltip>
              <Tooltip title="Add to wishlist" arrow placement="top">
                <IconButton color="secondary">
                  <Heart size={20} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share with friends" arrow placement="right">
                <IconButton color="primary">
                  <Share2 size={20} />
                </IconButton>
              </Tooltip>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle2" gutterBottom>
              Hover Cards (Popovers)
            </Typography>
            <Stack direction="row" spacing={4}>
              {users.map((user) => (
                <Box
                  key={user.id}
                  aria-owns={open ? "mouse-over-popover" : undefined}
                  aria-haspopup="true"
                  onMouseEnter={(e) => handlePopoverOpen(e, user)}
                  onMouseLeave={handlePopoverClose}
                  sx={{ cursor: "pointer" }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="center">
                    <Avatar src={user.avatar} size="small" />
                    <Typography variant="body2" fontWeight="bold" color="primary">
                      {user.username}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Stack>

            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
              PaperProps={{
                sx: {
                  p: 3,
                  width: 300,
                  borderRadius: 4,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                  pointerEvents: "auto",
                },
              }}
            >
              {activeUser && (
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={activeUser.avatar} sx={{ width: 56, height: 56 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {activeUser.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {activeUser.username}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {activeUser.bio}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    {activeUser.tags.map((tag) => (
                      <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                  </Stack>
                </Stack>
              )}
            </Popover>
          </Box>
        </Stack>
      </MpCard>
    </Grid>
  );
}
