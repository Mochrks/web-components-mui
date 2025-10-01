import PropTypes from "prop-types";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

export default function MpBreadcrumbs({ items }) {
  return (
    <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (isLast || !item.href) {
          return (
            <Typography key={index} color="text.primary" fontSize="14px">
              {item.label}
            </Typography>
          );
        }

        return (
          <Link key={index} href={item.href} underline="hover" color="inherit" fontSize="14px">
            {item.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

MpBreadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
};
