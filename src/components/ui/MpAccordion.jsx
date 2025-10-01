"use client";

import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";

export default function MpAccordion({ items = [] }) {
  return (
    <>
      {items.map((item, idx) => (
        <Accordion key={idx}>
          <AccordionSummary expandIcon={<ChevronDown size={20} />}>
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{item.content}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}

MpAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
    })
  ),
};
