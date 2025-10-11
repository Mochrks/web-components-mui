import { Box } from "@mui/material";
import PropTypes from "prop-types";
const BlankLayout = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
BlankLayout.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};
export default BlankLayout;
