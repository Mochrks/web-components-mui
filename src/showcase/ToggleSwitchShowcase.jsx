import { useState } from "react";
import { Grid, Box, Typography, Stack, useTheme } from "@mui/material";
import { MpCard, MpSwitch } from "../components";
import { Moon, Sun, Bell, Mail, ShieldCheck } from "lucide-react";

export default function ToggleSwitchShowcase() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6}>
      <MpCard title="Toggle & Switch">
        <Stack spacing={3} py={2}>
          <Box
            sx={{
              p: 2.5,
              borderRadius: 3,
              bgcolor: "background.neutral",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Stack spacing={3}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, borderRadius: 2, bgcolor: "orange.50", color: "orange.600" }}>
                    <Sun size={20} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Dark Mode
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Switch between light and dark themes
                    </Typography>
                  </Box>
                </Stack>
                <MpSwitch />
              </Stack>

              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, borderRadius: 2, bgcolor: "blue.50", color: "blue.600" }}>
                    <Mail size={20} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Email Alerts
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Receive weekly activity reports
                    </Typography>
                  </Box>
                </Stack>
                <MpSwitch checked={emailNotif} onChange={(e) => setEmailNotif(e.target.checked)} />
              </Stack>

              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box sx={{ p: 1, borderRadius: 2, bgcolor: "green.50", color: "green.600" }}>
                    <ShieldCheck size={20} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" fontWeight="bold">
                      Security Notifications
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Get alerted about new logins
                    </Typography>
                  </Box>
                </Stack>
                <MpSwitch checked={true} />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </MpCard>
    </Grid>
  );
}
