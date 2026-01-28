import { useState } from "react";
import { Grid, Stack, Box, Typography } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { MpCard, MpDropdown, MpDropdownMenu, MpButton } from "../components";

export default function DropdownShowcase() {
  const [menuAnchor, setMenuAnchor] = useState(null);

  return (
    <Grid item xs={12}>
      <MpCard title="Dropdown Components">
        <Stack spacing={3}>
          <Box>
            <Typography variant="h6" gutterBottom>
              MpDropdownMenu (Context Menu)
            </Typography>
            <MpButton onClick={(e) => setMenuAnchor(e.currentTarget)} endIcon={<MoreVert />}>
              Open Dropdown Menu with end icon
            </MpButton>
            <MpDropdownMenu
              anchorEl={menuAnchor}
              open={Boolean(menuAnchor)}
              onClose={() => setMenuAnchor(null)}
              items={[
                { label: "Edit", onClick: () => console.log("Edit") },
                { label: "Duplicate", onClick: () => console.log("Duplicate") },
                { label: "Delete", onClick: () => console.log("Delete") },
              ]}
            />
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              MpDropdown (Standalone Dropdown)
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <MpDropdown
                label="Basic Options"
                options={["Option 1", "Option 2", "Option 3"]}
                onSelect={(value) => console.log("Selected:", value)}
              />

              <MpDropdown
                label="With Objects"
                options={[
                  { value: "edit", label: "Edit Item" },
                  { value: "delete", label: "Delete Item" },
                  { value: "archive", label: "Archive Item" },
                ]}
                onSelect={(value) => console.log("Selected value:", value)}
              />

              <MpDropdown
                label="User Actions"
                options={[
                  { value: "profile", label: "View Profile" },
                  { value: "settings", label: "Settings" },
                  { value: "logout", label: "Logout" },
                ]}
                onSelect={(value) => {
                  console.log("Action:", value);
                  alert(`Action: ${value}`);
                }}
              />
            </Stack>
          </Box>
        </Stack>
      </MpCard>
    </Grid>
  );
}
