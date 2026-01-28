import { useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { MpCard, MpPagination } from "../components";

export default function PaginationShowcase() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Grid item xs={12}>
      <MpCard title="Pagination">
        <Stack spacing={2} alignItems="center">
          <MpPagination
            count={10}
            page={currentPage}
            onChange={(event, page) => setCurrentPage(page)}
            color="primary"
          />
          <Typography variant="body2" color="text.secondary">
            Current page: {currentPage} of 10
          </Typography>
        </Stack>
      </MpCard>
    </Grid>
  );
}
