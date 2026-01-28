import { Grid, Stack } from "@mui/material";
import { MpCard, MpSkeleton } from "../components";

export default function SkeletonShowcase() {
  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Skeleton Loaders">
        <Stack spacing={1}>
          <MpSkeleton variant="text" width="60%" />
          <MpSkeleton variant="text" width="80%" />
          <MpSkeleton variant="rectangular" height={100} />
          <Stack direction="row" spacing={1}>
            <MpSkeleton variant="circular" width={40} height={40} />
            <MpSkeleton variant="text" width="100%" />
          </Stack>
        </Stack>
      </MpCard>
    </Grid>
  );
}
