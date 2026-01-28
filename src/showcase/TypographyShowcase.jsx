import { Grid } from "@mui/material";
import { MpCard, MpTypography } from "../components";

export default function TypographyShowcase() {
  return (
    <Grid item xs={12}>
      <MpCard title="Typography">
        <MpTypography variant="h1">Heading 1</MpTypography>
        <MpTypography variant="h2">Heading 2</MpTypography>
        <MpTypography variant="h3">Heading 3</MpTypography>
        <MpTypography variant="h4">Heading 4</MpTypography>
        <MpTypography variant="h5">Heading 5</MpTypography>
        <MpTypography variant="h6">Heading 6</MpTypography>
        <MpTypography variant="body1">Body 1</MpTypography>
        <MpTypography variant="body2">Body 2</MpTypography>
        <MpTypography variant="subtitle1">Subtitle 1</MpTypography>
        <MpTypography variant="subtitle2">Subtitle 2</MpTypography>
        <MpTypography variant="caption">Caption</MpTypography>
        <MpTypography variant="button">Button</MpTypography>
        <MpTypography variant="overline">Overline</MpTypography>
      </MpCard>
    </Grid>
  );
}
