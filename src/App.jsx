"use client";

import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { useColorMode } from "./theme/AppThemeProvider";
import { MpNavbar, MpSidebar } from "./components";
import { Home, Settings, Person, Notifications, Dashboard } from "@mui/icons-material";

// Import Showcase Components
import TypographyShowcase from "./showcase/TypographyShowcase";
import BreadcrumbsShowcase from "./showcase/BreadcrumbsShowcase";
import AlertsShowcase from "./showcase/AlertsShowcase";
import AccordionShowcase from "./showcase/AccordionShowcase";
import BadgesValidationShowcase from "./showcase/BadgesValidationShowcase";
import ButtonsShowcase from "./showcase/ButtonsShowcase";
import InputsShowcase from "./showcase/InputsShowcase";
import AvatarsShowcase from "./showcase/AvatarsShowcase";
import RadioSliderShowcase from "./showcase/RadioSliderShowcase";
import DatePickersShowcase from "./showcase/DatePickersShowcase";
import AutocompleteShowcase from "./showcase/AutocompleteShowcase";
import FieldValuesShowcase from "./showcase/FieldValuesShowcase";
import StepperShowcase from "./showcase/StepperShowcase";
import TabsDialogShowcase from "./showcase/TabsDialogShowcase";
import TableShowcase from "./showcase/TableShowcase";
import PaginationShowcase from "./showcase/PaginationShowcase";
import LoadingShowcase from "./showcase/LoadingShowcase";
import NoDataShowcase from "./showcase/NoDataShowcase";
import SkeletonShowcase from "./showcase/SkeletonShowcase";
import FormShowcase from "./showcase/FormShowcase";
import DropdownShowcase from "./showcase/DropdownShowcase";
import ToastShowcase from "./showcase/ToastShowcase";
import CardsShowcase from "./showcase/CardsShowcase";
import CarouselShowcase from "./showcase/CarouselShowcase";
import ChartsShowcase from "./showcase/ChartsShowcase";
import NavMenuShowcase from "./showcase/NavMenuShowcase";
import SheetDrawerShowcase from "./showcase/SheetDrawerShowcase";
import TooltipHoverShowcase from "./showcase/TooltipHoverShowcase";
import OTPInputShowcase from "./showcase/OTPInputShowcase";
import ToggleSwitchShowcase from "./showcase/ToggleSwitchShowcase";

import { Box, Typography, Divider, Chip, Stack } from "@mui/material";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { mode, toggleColorMode } = useColorMode();

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
          <TypographyShowcase />
          <BreadcrumbsShowcase />
          <AlertsShowcase />
          <AccordionShowcase />
          <BadgesValidationShowcase />
          <ButtonsShowcase />
          <InputsShowcase />
          <AvatarsShowcase />
          <RadioSliderShowcase />
          <DatePickersShowcase />
          <AutocompleteShowcase />
          <FieldValuesShowcase />
          <StepperShowcase />
          <TabsDialogShowcase />
          <TableShowcase />
          <LoadingShowcase />
          <NoDataShowcase />
          <SkeletonShowcase />
          <FormShowcase />
          <DropdownShowcase />
          <ToastShowcase />
          <CardsShowcase />
          <NavMenuShowcase />
          <CarouselShowcase />
          <ChartsShowcase />
          <PaginationShowcase />
          <SheetDrawerShowcase />
          <TooltipHoverShowcase />
          <OTPInputShowcase />
          <ToggleSwitchShowcase />
        </Grid>
      </Container>

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
    </>
  );
}
