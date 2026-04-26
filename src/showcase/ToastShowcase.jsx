import { Grid, Stack, Button, Typography } from "@mui/material";
import { MpCard, MpButton } from "../components";
import { useSnackbar } from "notistack";
import { CheckCircle2, AlertCircle, Info, Bell } from "lucide-react";

export default function ToastShowcase() {
  const { enqueueSnackbar } = useSnackbar();

  const handleToast = (variant) => {
    enqueueSnackbar(`This is a premium ${variant} notification!`, {
      variant,
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  };

  return (
    <Grid item xs={12}>
      <MpCard title="Toast / Notifications">
        <Stack spacing={4}>
          <Typography variant="body2" color="text.secondary">
            MUI integrated with Notistack for a premium notification experience.
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap gap={2}>
            <MpButton
              color="success"
              variant="contained"
              startIcon={<CheckCircle2 size={18} />}
              onClick={() => handleToast("success")}
            >
              Success Toast
            </MpButton>
            <MpButton
              color="error"
              variant="contained"
              startIcon={<AlertCircle size={18} />}
              onClick={() => handleToast("error")}
            >
              Error Toast
            </MpButton>
            <MpButton
              color="warning"
              variant="contained"
              startIcon={<AlertCircle size={18} />}
              onClick={() => handleToast("warning")}
            >
              Warning Toast
            </MpButton>
            <MpButton
              color="info"
              variant="contained"
              startIcon={<Info size={18} />}
              onClick={() => handleToast("info")}
            >
              Info Toast
            </MpButton>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<Bell size={18} />}
              onClick={() =>
                enqueueSnackbar("Welcome back to the dashboard!", {
                  variant: "default",
                  autoHideDuration: 3000,
                })
              }
            >
              Simple Notification
            </Button>
          </Stack>
        </Stack>
      </MpCard>
    </Grid>
  );
}
