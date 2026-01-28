import { Grid, Stack } from "@mui/material";
import { MpCard, MpBadge, MpChip } from "../components";

export default function BadgesValidationShowcase() {
  return (
    <Grid item xs={12} md={12}>
      <MpCard title="Badges & Chips">
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <MpBadge>Default</MpBadge>
            <MpBadge color="primary" variant="filled">
              Primary
            </MpBadge>
            <MpBadge color="success" variant="filled">
              Success
            </MpBadge>
            <MpBadge color="error" variant="filled">
              Error
            </MpBadge>
            <MpBadge color="warning" variant="filled">
              Warning
            </MpBadge>
          </Stack>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <MpChip label="Chip 1" />
            <MpChip label="Chip 2" color="primary" />
            <MpChip label="Deletable" onDelete={() => {}} />
            <MpChip label="Clickable" onClick={() => {}} />
          </Stack>
        </Stack>
      </MpCard>
    </Grid>
  );
}
