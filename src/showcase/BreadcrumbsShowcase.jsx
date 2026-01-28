import { Grid } from "@mui/material";
import { MpCard, MpBreadcrumbs } from "../components";

export default function BreadcrumbsShowcase() {
  return (
    <Grid item xs={12}>
      <MpCard title="Breadcrumbs">
        <MpBreadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Components", href: "/components" },
            { label: "Showcase" },
          ]}
        />
      </MpCard>
    </Grid>
  );
}
