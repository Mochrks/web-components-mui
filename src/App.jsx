"use client";

import { Container, Grid, Stack, Typography, Box } from "@mui/material";
import { useState } from "react";
import { useColorMode } from "./theme/AppThemeProvider";
import {
  MpNavbar,
  MpButton,
  MpCard,
  MpInput,
  MpSelect,
  MpCheckbox,
  MpBadge,
  MpTabs,
  MpDialog,
  MpTable,
  MpForm,
  MpSwitch,
  MpSlider,
  MpRadioGroup,
  MpAlert,
  MpAvatar,
  MpTooltip,
  MpChip,
  MpSkeleton,
  MpLoading,
  MpNodata,
  MpFieldValue,
  MpBreadcrumbs,
  MpAutocomplete,
  MpDatePicker,
  MpDateRange,
  MpStepper,
  MpSidebar,
  MpDropdownMenu,
  MpPopover,
  MpTypography,
  MpAccordion,
  MpPagination,
  MpDrawerSidebar,
  MpDropdown,
} from "./components";
import { Home, Settings, Person, Notifications, Dashboard, MoreVert } from "@mui/icons-material";

export default function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [drawerSidebarOpen, setDrawerSidebarOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("a");
  const [radioValue, setRadioValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const [accordionExpanded, setAccordionExpanded] = useState("panel1");
  const [dateValue, setDateValue] = useState(null);
  const [dateRangeStart, setDateRangeStart] = useState(null);
  const [dateRangeEnd, setDateRangeEnd] = useState(null);
  const [autocompleteValue, setAutocompleteValue] = useState("");
  const [stepperActive, setStepperActive] = useState(0);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [popoverAnchor, setPopoverAnchor] = useState(null);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  const { mode, toggleColorMode } = useColorMode();

  const tableRows = [
    { id: 1, name: "Alice Johnson", role: "Admin", status: "Active" },
    { id: 2, name: "Bob Smith", role: "User", status: "Active" },
    { id: 3, name: "Charlie Brown", role: "Editor", status: "Inactive" },
    { id: 4, name: "Diana Prince", role: "User", status: "Active" },
  ];

  const tableColumns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (row) => (
        <MpBadge color={row.status === "Active" ? "success" : "default"}>{row.status}</MpBadge>
      ),
    },
  ];

  const autocompleteOptions = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

  const navbarActions = [
    {
      label: "Profile",
      onClick: () => console.log("Profile clicked"),
      variant: "text",
    },
    {
      label: "Settings",
      onClick: () => console.log("Settings clicked"),
      variant: "outlined",
    },
  ];

  return (
    <>
      <MpNavbar
        title="Showcase Web UI MUI Components by @mochrks"
        onMenuClick={() => setSidebarOpen(true)}
        mode={mode}
        onToggleColorMode={toggleColorMode}
        actions={navbarActions}
      />

      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MpCard title="Typography">
              <MpTypography variant="h1">Heading 1</MpTypography>
              <MpTypography variant="h2">Heading 2</MpTypography>
              <MpTypography variant="h3">Heading 3</MpTypography>
              <MpTypography variant="h4">Heading 4</MpTypography>
              <MpTypography variant="h5">Heading 5</MpTypography>
              <MpTypography variant="h6">Heading 6</MpTypography>
              <MpTypography variant="body1">Body 1</MpTypography>
              <MpTypography variant="body2">Body 2</MpTypography>
              <MpTypography variant="subtitle1">Subtitle 1</MpTypography>
              <MpTypography variant="subtitle2">Subtitle 2</MpTypography>
              <MpTypography variant="caption">Caption</MpTypography>
              <MpTypography variant="button">Button</MpTypography>
              <MpTypography variant="overline">Overline</MpTypography>
            </MpCard>
          </Grid>

          <Grid item xs={12}>
            <MpCard title="Breadcrumbs">
              <MpBreadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Components", href: "/components" },
                  { label: "Showcase" },
                ]}
              />
            </MpCard>
          </Grid>

          <Grid item xs={12}>
            <MpCard title="Alerts">
              <Stack spacing={2}>
                <MpAlert severity="info" title="Info Alert">
                  This is an informational message with shadcn-like styling.
                </MpAlert>
                <MpAlert severity="success">Operation completed successfully!</MpAlert>
                <MpAlert severity="warning">Please review your settings before proceeding.</MpAlert>
                <MpAlert severity="error">An error occurred. Please try again.</MpAlert>
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12}>
            <MpCard title="Accordion">
              <MpAccordion
                items={[
                  {
                    id: "panel1",
                    title: "What is this component library?",
                    content:
                      "This is a collection of Material-UI components styled to look like shadcn/ui. It provides a consistent design system with beautiful, accessible components.",
                  },
                  {
                    id: "panel2",
                    title: "How do I use these components?",
                    content:
                      "Simply import the components you need and use them in your React application. Each component follows the same API patterns as Material-UI with additional shadcn-inspired styling.",
                  },
                  {
                    id: "panel3",
                    title: "Can I customize the theme?",
                    content:
                      "Yes! The theme is fully customizable. You can modify the createShadcnTheme function to adjust colors, typography, spacing, and more to match your brand.",
                  },
                ]}
                expanded={accordionExpanded}
                onChange={(panel) => setAccordionExpanded(panel)}
              />
            </MpCard>
          </Grid>

          <Grid item xs={12} md={12}>
            <MpCard title="Badges & Chips">
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <MpBadge>Default</MpBadge>
                  <MpBadge color="primary" variant="filled">
                    Primary
                  </MpBadge>
                  <MpBadge color="success" variant="filled">
                    Success
                  </MpBadge>
                  <MpBadge color="error" variant="filled">
                    Error
                  </MpBadge>
                  <MpBadge color="warning" variant="filled">
                    Warning
                  </MpBadge>
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <MpChip label="Chip 1" />
                  <MpChip label="Chip 2" color="primary" />
                  <MpChip label="Deletable" onDelete={() => {}} />
                  <MpChip label="Clickable" onClick={() => {}} />
                </Stack>
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="Buttons">
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <MpButton>Primary</MpButton>
                  <MpButton variant="outlined">Outlined</MpButton>
                  <MpButton variant="soft" color="secondary">
                    Soft
                  </MpButton>
                  <MpButton color="error">Destructive</MpButton>
                </Stack>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <MpButton variant="text">Ghost</MpButton>
                  <MpButton variant="link">Link Button</MpButton>
                  <MpButton disabled>Disabled</MpButton>
                  <MpButton size="small">Small</MpButton>
                </Stack>
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="Inputs & Form Controls">
              <Stack spacing={2}>
                <MpInput label="Name" placeholder="Enter your name" />
                <MpInput label="Email" type="email" placeholder="you@example.com" />
                <MpSelect
                  label="Select Option"
                  value={selectValue}
                  onChange={(e) => setSelectValue(e.target.value)}
                  options={[
                    { value: "a", label: "Option A" },
                    { value: "b", label: "Option B" },
                    { value: "c", label: "Option C" },
                  ]}
                />
                <Stack direction="row" spacing={2} alignItems="center">
                  <MpCheckbox label="I agree to terms" />
                  <MpSwitch label="Enable notifications" />
                </Stack>
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="Avatars & Tooltips">
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <MpTooltip title="User Avatar">
                    <MpAvatar>U</MpAvatar>
                  </MpTooltip>
                  <MpTooltip title="Admin User">
                    <MpAvatar sx={{ bgcolor: "primary.main" }}>A</MpAvatar>
                  </MpTooltip>
                  <MpTooltip title="Profile Picture">
                    <MpAvatar src="/placeholder.svg?height=40&width=40" />
                  </MpTooltip>
                  <MpTooltip title="Small Avatar">
                    <MpAvatar sx={{ width: 32, height: 32 }}>S</MpAvatar>
                  </MpTooltip>
                  <MpTooltip title="Large Avatar">
                    <MpAvatar sx={{ width: 56, height: 56 }}>L</MpAvatar>
                  </MpTooltip>
                </Stack>
                <MpTypography variant="body2" color="text.secondary">
                  Hover over avatars to see tooltips
                </MpTypography>
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="Radio Groups & Sliders">
              <Stack spacing={3}>
                <MpRadioGroup
                  label="Choose an option"
                  value={radioValue}
                  onChange={(e) => setRadioValue(e.target.value)}
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                    { value: "option3", label: "Option 3" },
                  ]}
                />
                <Box>
                  <Typography variant="body2" fontWeight={500} gutterBottom>
                    Volume: {sliderValue}%
                  </Typography>
                  <MpSlider
                    value={sliderValue}
                    onChange={(_, value) => setSliderValue(value)}
                    valueLabelDisplay="auto"
                  />
                </Box>
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="Date Pickers">
              <Stack spacing={2}>
                <MpDatePicker label="Select Date" value={dateValue} onChange={setDateValue} />
                <MpDateRange
                  startValue={dateRangeStart}
                  endValue={dateRangeEnd}
                  onStartChange={setDateRangeStart}
                  onEndChange={setDateRangeEnd}
                />
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="Autocomplete">
              <MpAutocomplete
                label="Select Fruit"
                placeholder="Type to search..."
                options={autocompleteOptions}
                value={autocompleteValue}
                onChange={(_, newValue) => setAutocompleteValue(newValue)}
              />
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="Field Values">
              <Stack spacing={2}>
                <MpFieldValue label="Full Name" value="John Doe" />
                <MpFieldValue label="Email" value="john.doe@example.com" />
                <MpFieldValue label="Role" value="Administrator" />
                <MpFieldValue
                  label="Status"
                  value={
                    <MpBadge color="success" variant="filled">
                      Active
                    </MpBadge>
                  }
                />
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12}>
            <MpCard title="Stepper">
              <Stack spacing={2}>
                <MpStepper
                  steps={["Select campaign", "Create ad group", "Create ads"]}
                  activeStep={stepperActive}
                />
                <Stack direction="row" spacing={2}>
                  <MpButton
                    disabled={stepperActive === 0}
                    onClick={() => setStepperActive((prev) => prev - 1)}
                  >
                    Back
                  </MpButton>
                  <MpButton
                    disabled={stepperActive === 2}
                    onClick={() => setStepperActive((prev) => prev + 1)}
                  >
                    Next
                  </MpButton>
                </Stack>
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12}>
            <MpCard title="Tabs & Dialog">
              <MpTabs
                tabs={[
                  {
                    label: "Overview",
                    content: (
                      <Typography>
                        This is the overview tab content with shadcn-inspired styling.
                      </Typography>
                    ),
                  },
                  {
                    label: "Details",
                    content: (
                      <Typography>
                        Detailed information goes here with consistent theming.
                      </Typography>
                    ),
                  },
                  {
                    label: "Settings",
                    content: <Typography>Configure your preferences in this tab.</Typography>,
                  },
                ]}
              />
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <MpButton onClick={() => setDialogOpen(true)}>Open Dialog</MpButton>
                <MpButton onClick={(e) => setPopoverAnchor(e.currentTarget)}>Popover</MpButton>
                <MpButton onClick={() => setDrawerSidebarOpen(true)}>Drawer Sidebar</MpButton>
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12}>
            <MpCard title="Data Table">
              <MpTable rows={tableRows} columns={tableColumns} pagination />
            </MpCard>
          </Grid>

          <Grid item xs={12}>
            <MpCard title="Pagination">
              <Stack spacing={2} alignItems="center">
                <MpPagination
                  count={10}
                  page={currentPage}
                  onChange={(event, page) => setCurrentPage(page)}
                  color="primary"
                />
                <Typography variant="body2" color="text.secondary">
                  Current page: {currentPage} of 10
                </Typography>
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="Loading State">
              <MpLoading />
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="No Data State">
              <MpNodata message="No items found" />
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="Skeleton Loaders">
              <Stack spacing={1}>
                <MpSkeleton variant="text" width="60%" />
                <MpSkeleton variant="text" width="80%" />
                <MpSkeleton variant="rectangular" height={100} />
                <Stack direction="row" spacing={1}>
                  <MpSkeleton variant="circular" width={40} height={40} />
                  <MpSkeleton variant="text" width="100%" />
                </Stack>
              </Stack>
            </MpCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <MpCard title="Form (react-hook-form)">
              <MpForm
                defaultValues={{ fullName: "", email: "", country: "", agree: false }}
                fields={[
                  {
                    name: "fullName",
                    label: "Full Name",
                    type: "text",
                    placeholder: "John Doe",
                    rules: { required: "Name is required" },
                  },
                  {
                    name: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "john@example.com",
                    rules: {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    },
                  },
                  {
                    name: "country",
                    label: "Country",
                    type: "select",
                    placeholder: "Select a country",
                    options: [
                      { value: "us", label: "United States" },
                      { value: "uk", label: "United Kingdom" },
                      { value: "ca", label: "Canada" },
                    ],
                    rules: {
                      required: "Country is required",
                    },
                  },
                  {
                    name: "agree",
                    label: "I agree to the terms and conditions",
                    type: "checkbox",
                    rules: { required: "You must agree to continue" },
                  },
                ]}
                onSubmit={(data) => {
                  alert(JSON.stringify(data, null, 2));
                }}
                submitLabel="Submit Form"
              />
            </MpCard>
          </Grid>

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
        </Grid>
      </Container>

      <MpDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Example Dialog"
        actions={
          <>
            <MpButton variant="outlined" onClick={() => setDialogOpen(false)}>
              Cancel
            </MpButton>
            <MpButton onClick={() => setDialogOpen(false)}>Confirm</MpButton>
          </>
        }
      >
        <Typography>
          This is a dialog with shadcn-inspired styling. It includes a title, content area, and
          action buttons.
        </Typography>
      </MpDialog>

      <MpSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        title="Navigation"
        items={[
          {
            label: "Dashboard",
            icon: <Dashboard />,
            onClick: () => setSidebarOpen(false),
            active: true,
          },
          {
            label: "Home",
            icon: <Home />,
            onClick: () => setSidebarOpen(false),
          },
          {
            label: "Profile",
            icon: <Person />,
            onClick: () => setSidebarOpen(false),
          },
          {
            label: "Settings",
            icon: <Settings />,
            onClick: () => setSidebarOpen(false),
          },
          {
            label: "Notifications",
            icon: <Notifications />,
            onClick: () => setSidebarOpen(false),
          },
        ]}
      />

      <MpDrawerSidebar
        open={drawerSidebarOpen}
        onClose={() => setDrawerSidebarOpen(false)}
        title="Drawer Navigation"
        items={[
          {
            label: "Dashboard",
            icon: <Dashboard />,
            onClick: () => setDrawerSidebarOpen(false),
          },
          {
            label: "Home",
            icon: <Home />,
            onClick: () => setDrawerSidebarOpen(false),
          },
          {
            label: "Profile",
            icon: <Person />,
            onClick: () => setDrawerSidebarOpen(false),
          },
          {
            label: "Settings",
            icon: <Settings />,
            onClick: () => setDrawerSidebarOpen(false),
          },
        ]}
      />

      <MpPopover
        open={Boolean(popoverAnchor)}
        anchorEl={popoverAnchor}
        onClose={() => setPopoverAnchor(null)}
      >
        <Box sx={{ p: 2, maxWidth: 300 }}>
          <Typography variant="subtitle2" fontWeight={600} gutterBottom>
            Popover Content
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a popover with custom content. You can put any component here.
          </Typography>
        </Box>
      </MpPopover>
    </>
  );
}
