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
      {icon || (
        <Box
          component="img"
          src="/no-data.png"
          alt="No data illustration"
          sx={{ width: 120, height: "auto", opacity: 0.8 }}
          onError={(e) => {
            e.target.src = "https://cdn-icons-png.flaticon.com/512/7486/7486744.png";
          }}
        />
      )}
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
