import { Grid, Stack } from "@mui/material";
import { MpCard, MpAlert } from "../components";

export default function AlertsShowcase() {
  return (
    <Grid item xs={12}>
      <MpCard title="Alerts">
        <Stack spacing={2}>
          <MpAlert severity="info" title="Info Alert">
            This is an informational message with shadcn-like styling.
          </MpAlert>
          <MpAlert severity="success">Operation completed successfully!</MpAlert>
          <MpAlert severity="warning">Please review your settings before proceeding.</MpAlert>
          <MpAlert severity="error">An error occurred. Please try again.</MpAlert>
        </Stack>
      </MpCard>
    </Grid>
  );
}
