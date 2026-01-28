import { Grid, Stack } from "@mui/material";
import { MpCard, MpFieldValue, MpBadge } from "../components";

export default function FieldValuesShowcase() {
  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Field Values">
        <Stack spacing={2}>
          <MpFieldValue label="Full Name" value="John Doe" />
          <MpFieldValue label="Email" value="john.doe@example.com" />
          <MpFieldValue label="Role" value="Administrator" />
          <MpFieldValue
            label="Status"
            value={
              <MpBadge color="success" variant="filled">
                Active
              </MpBadge>
            }
          />
        </Stack>
      </MpCard>
    </Grid>
  );
}
