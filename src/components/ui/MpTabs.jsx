"use client";

import { Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

export default function MpTabs({ tabs, defaultValue = 0 }) {
  const [value, setValue] = useState(defaultValue);

  return (
    <Box>
      <Tabs
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          mb: 2,
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} disabled={tab.disabled} />
        ))}
      </Tabs>
      <Box>{tabs[value]?.content}</Box>
    </Box>
  );
}

MpTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  defaultValue: PropTypes.number,
};
