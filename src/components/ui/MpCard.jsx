import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function MpCard({ title, subtitle, children, action, ...props }) {
  return (
    <Card {...props}>
      {(title || subtitle || action) && (
        <CardHeader
          title={
            title && (
              <Typography variant="h6" fontWeight={600}>
                {title}
              </Typography>
            )
          }
          subheader={subtitle}
          action={action}
          sx={{ pb: 1 }}
        />
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
}

MpCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  action: PropTypes.node,
};
