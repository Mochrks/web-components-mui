import { Grid, Stack } from "@mui/material";
import { MpCard, MpButton } from "../components";

export default function ButtonsShowcase() {
  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Buttons">
        <Stack spacing={2}>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <MpButton>Primary</MpButton>
            <MpButton variant="outlined">Outlined</MpButton>
            <MpButton variant="soft" color="secondary">
              Soft
            </MpButton>
            <MpButton color="error">Destructive</MpButton>
          </Stack>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            <MpButton variant="text">Ghost</MpButton>
            <MpButton variant="link">Link Button</MpButton>
            <MpButton disabled>Disabled</MpButton>
            <MpButton size="small">Small</MpButton>
          </Stack>
        </Stack>
      </MpCard>
    </Grid>
  );
}
