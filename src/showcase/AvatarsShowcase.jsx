import { Grid, Stack } from "@mui/material";
import { MpCard, MpTooltip, MpAvatar, MpTypography } from "../components";

export default function AvatarsShowcase() {
  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Avatars & Tooltips">
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} alignItems="center">
            <MpTooltip title="User Avatar">
              <MpAvatar>U</MpAvatar>
            </MpTooltip>
            <MpTooltip title="Admin User">
              <MpAvatar sx={{ bgcolor: "primary.main" }}>A</MpAvatar>
            </MpTooltip>
            <MpTooltip title="Profile Picture">
              <MpAvatar src="/placeholder.svg?height=40&width=40" />
            </MpTooltip>
            <MpTooltip title="Small Avatar">
              <MpAvatar sx={{ width: 32, height: 32 }}>S</MpAvatar>
            </MpTooltip>
            <MpTooltip title="Large Avatar">
              <MpAvatar sx={{ width: 56, height: 56 }}>L</MpAvatar>
            </MpTooltip>
          </Stack>
          <MpTypography variant="body2" color="text.secondary">
            Hover over avatars to see tooltips
          </MpTypography>
        </Stack>
      </MpCard>
    </Grid>
  );
}
