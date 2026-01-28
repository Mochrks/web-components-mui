import { Grid } from "@mui/material";
import { MpCard, MpLoading } from "../components";

export default function LoadingShowcase() {
  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Loading State">
        <MpLoading />
      </MpCard>
    </Grid>
  );
}
