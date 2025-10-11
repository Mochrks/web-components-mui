import { createTheme } from "@mui/material/styles";

/**
 * Light theme
 */
const lightTokens = {
  mode: "light",
  primary: { main: "#0F172A", contrastText: "#F8FAFC" },
  secondary: { main: "#F1F5F9", contrastText: "#0F172A" },
  background: { default: "#FFFFFF", paper: "#FFFFFF" },
  text: { primary: "#0F172A", secondary: "#334155" },
  divider: "#E5E7EB",
  error: { main: "#EF4444" },
  warning: { main: "#F59E0B" },
  success: { main: "#16A34A" },
  info: { main: "#3B82F6" },
};

/**
 * Dark theme
 */
const darkTokens = {
  mode: "dark",
  primary: { main: "#E5E7EB", contrastText: "#0B1220" },
  secondary: { main: "#111827", contrastText: "#E5E7EB" },
  background: { default: "#0B1220", paper: "#0B1220" },
  text: { primary: "#E5E7EB", secondary: "#94A3B8" },
  divider: "#1F2937",
  error: { main: "#F87171" },
  warning: { main: "#FBBF24" },
  success: { main: "#34D399" },
  info: { main: "#60A5FA" },
};

/**
 * Creates a MUI theme
 * @param {string} mode - Theme mode: "light" or "dark"
 * @returns {import('@mui/material/styles').Theme} MUI theme object
 */
export function createMainTheme(mode = "light") {
  const tokens = mode === "dark" ? darkTokens : lightTokens;

  return createTheme({
    palette: tokens,
    shape: { borderRadius: 8 },
    typography: {
      fontFamily:
        'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      h1: { fontWeight: 700, letterSpacing: "-0.02em" },
      h2: { fontWeight: 600, letterSpacing: "-0.01em" },
      button: { textTransform: "none", fontWeight: 600 },
      body1: { lineHeight: 1.6 },
      body2: { lineHeight: 1.6 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius,
            "&:focus-visible": {
              outline: `2px solid ${theme.palette.mode === "dark" ? "#E5E7EB" : "#0F172A"}`,
              outlineOffset: "2px",
            },
          }),
        },
        variants: [
          {
            props: { variant: "soft" },
            style: ({ theme }) => ({
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              border: `1px solid ${theme.palette.divider}`,
              "&:hover": {
                backgroundColor: theme.palette.mode === "dark" ? "#0F172A" : "#E2E8F0",
              },
            }),
          },
          {
            props: { color: "error", variant: "contained" },
            style: ({ theme }) => ({
              backgroundColor: theme.palette.error.main,
              color: theme.palette.getContrastText(theme.palette.error.main),
              "&:hover": { filter: "brightness(0.95)" },
            }),
          },
          {
            props: { variant: "text" },
            style: ({ theme }) => ({
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: theme.palette.mode === "dark" ? "#111827" : "#F1F5F9",
              },
            }),
          },
          {
            props: { variant: "link" },
            style: ({ theme }) => ({
              padding: 0,
              color: theme.palette.primary.main,
              textDecoration: "underline",
              backgroundColor: "transparent",
              "&:hover": { opacity: 0.8, textDecorationThickness: "2px" },
            }),
          },
        ],
      },
      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 1px 0 rgba(255,255,255,0.04)"
                : "0 1px 0 rgba(0,0,0,0.04)",
          }),
        },
      },
      MuiTextField: {
        defaultProps: { size: "small" },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.divider,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.mode === "dark" ? "#334155" : "#94A3B8",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
          }),
          input: {
            "&::placeholder": { opacity: 0.8 },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.palette.divider}`,
          }),
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.palette.divider}`,
          }),
        },
      },
      MuiTooltip: {
        defaultProps: { arrow: true },
      },
      MuiDataGrid: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderColor: theme.palette.divider,
          }),
        },
      },
    },
  });
}
