import { Box } from "@mui/material";
import PropTypes from "prop-types";
const LayoutContent = ({ children, sx = {}, maxWidth = "lg", disableGutters = false }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: disableGutters ? 0 : 3,
        ...sx,
      }}
    >
      <Box
        sx={{
          maxWidth:
            maxWidth === false
              ? "none"
              : {
                  xs: "100%",
                  sm: maxWidth,
                  lg: maxWidth,
                }[maxWidth] || maxWidth,
          mx: "auto",
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

LayoutContent.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  maxWidth: PropTypes.string,
  disableGutters: PropTypes.bool,
};
export default LayoutContent;
