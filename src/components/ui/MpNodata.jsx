import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { Inbox } from "@mui/icons-material";

export default function MpNodata({ message = "No data available", icon }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="200px"
      gap={2}
    >
      {icon || <Inbox sx={{ fontSize: 48, color: "text.secondary", opacity: 0.5 }} />}
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
}

MpNodata.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.node,
};
