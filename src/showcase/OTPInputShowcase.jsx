import { useState, useRef } from "react";
import { Grid, Box, Typography, Stack, TextField } from "@mui/material";
import { MpCard, MpButton } from "../components";

export default function OTPInputShowcase() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <Grid item xs={12} md={6}>
      <MpCard title="OTP / Verification Code">
        <Stack spacing={4} alignItems="center" py={2}>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Enter the 4-digit code sent to your email.
          </Typography>
          <Stack direction="row" spacing={2}>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                inputRef={(el) => (inputRefs.current[index] = el)}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: "center", fontSize: "1.5rem", fontWeight: "bold" },
                }}
                sx={{ width: 60 }}
                variant="outlined"
              />
            ))}
          </Stack>
          <Typography variant="caption" color="text.secondary">
            Entered Code:{" "}
            <Typography component="span" variant="caption" fontWeight="bold" color="primary">
              {otp.join("") || "—"}
            </Typography>
          </Typography>
          <MpButton fullWidth>Verify Code</MpButton>
          <Button variant="text" size="small">
            Resend Code
          </Button>
        </Stack>
      </MpCard>
    </Grid>
  );
}

import { Button } from "@mui/material";
