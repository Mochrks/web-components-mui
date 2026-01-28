import { Box, Container, Typography, useTheme } from "@mui/material";
import { Card } from "../../components";
import PropTypes from "prop-types";
const AuthLayout = ({
  children,
  title = "Welcome Back",
  subtitle = "Please sign in to your account",
  maxWidth = "sm",
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        py: 4,
      }}
    >
      <Container
        component="main"
        maxWidth={maxWidth}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: "white",
            }}
          >
            MyApp
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              opacity: 0.9,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body1"
              sx={{
                color: "white",
                opacity: 0.8,
                mt: 1,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        <Card
          sx={{
            width: "100%",
            p: 4,
            boxShadow: theme.shadows[8],
            borderRadius: 2,
          }}
        >
          {children}
        </Card>
      </Container>
    </Box>
  );
};
AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  maxWidth: PropTypes.string,
};
export default AuthLayout;
