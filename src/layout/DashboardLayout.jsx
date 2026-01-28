import { Box, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import MainLayout from "./MainLayout";
import { Breadcrumbs } from "../../components";

const DashboardLayout = ({
  children,
  title,
  breadcrumbs = [],
  actions,
  headerProps = {},
  ...layoutProps
}) => {
  const defaultBreadcrumbs =
    breadcrumbs.length > 0
      ? breadcrumbs
      : [{ label: "Dashboard", href: "/" }, { label: title || "Page" }];

  return (
    <MainLayout
      headerProps={{
        title: title || "Dashboard",
        ...headerProps,
      }}
      {...layoutProps}
    >
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 2,
            mb: 2,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                color: "text.primary",
              }}
            >
              {title || "Dashboard"}
            </Typography>

            <Breadcrumbs items={defaultBreadcrumbs} separator={<NavigateNext fontSize="small" />} />
          </Box>

          {actions && <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>{actions}</Box>}
        </Box>
      </Box>

      {children}
    </MainLayout>
  );
};
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ),
  actions: PropTypes.node,
  headerProps: PropTypes.object,
};
export default DashboardLayout;
