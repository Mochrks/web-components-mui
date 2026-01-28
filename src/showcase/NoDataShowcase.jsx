import { Grid } from "@mui/material";
import { MpCard, MpNodata } from "../components";

export default function NoDataShowcase() {
  return (
    <Grid item xs={12} md={6}>
      <MpCard title="No Data State">
        <MpNodata message="No items found" />
      </MpCard>
    </Grid>
  );
}
