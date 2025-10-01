"use client";

import PropTypes from "prop-types";
import { Box, Container, Typography, Link, Divider, Stack } from "@mui/material";

export default function MpFooter({
  copyright,
  links,
  sections,
  socialLinks,
  backgroundColor = "background.paper",
}) {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        {sections && sections.length > 0 && (
          <>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: `repeat(${Math.min(sections.length, 4)}, 1fr)`,
                },
                gap: 4,
                mb: 4,
              }}
            >
              {sections.map((section, index) => (
                <Box key={index}>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    {section.title}
                  </Typography>
                  <Stack spacing={1}>
                    {section.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        color="text.secondary"
                        underline="hover"
                        sx={{ display: "block" }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Box>
            <Divider sx={{ mb: 3 }} />
          </>
        )}

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {copyright || `© ${new Date().getFullYear()} All rights reserved.`}
          </Typography>

          {(links || socialLinks) && (
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {links?.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="text.secondary"
                  underline="hover"
                  variant="body2"
                >
                  {link.label}
                </Link>
              ))}
              {socialLinks?.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  color="text.secondary"
                  aria-label={social.label}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {social.icon}
                </Link>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

MpFooter.propTypes = {
  copyright: PropTypes.string,
  backgroundColor: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ),
};
