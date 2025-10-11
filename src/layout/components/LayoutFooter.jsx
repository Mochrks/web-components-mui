import { Footer } from "../../../components";
import PropTypes from "prop-types";
const LayoutFooter = ({ copyright, links, sx = {} }) => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer
      copyright={copyright || `© ${currentYear} MyApp. All rights reserved.`}
      links={
        links || [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
          { label: "Contact", href: "/contact" },
        ]
      }
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        ...sx,
      }}
    />
  );
};

LayoutFooter.propTypes = {
  copyright: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  sx: PropTypes.object,
};
export default LayoutFooter;
