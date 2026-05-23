import { createTheme } from "@mui/material/styles";

// ─────────────────────────────────────────────
//  API Magician — Design Tokens
//  Single source of truth. Import this theme
//  into ThemeProvider in main.jsx.
// ─────────────────────────────────────────────

const PURPLE = {
  50: "#f3f0ff",
  100: "#e0d9ff",
  200: "#c4b5fd",
  400: "#a78bfa",
  500: "#8b5cf6",
  600: "#7C3AED", // ← primary accent
  700: "#6d28d9",
  800: "#5b21b6",
  900: "#4c1d95",
};

const SURFACE = {
  base: "#0f0a0a", // page background
  raised: "#111118", // cards, panels
  overlay: "#18181f", // modals, popovers
  border: "#ffffff14", // subtle border
  borderHover: "#ffffff22",
  bgGradient:
    "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
};

const theme = createTheme({
  // ── Palette ──────────────────────────────
  palette: {
    mode: "dark",

    primary: {
      main: PURPLE[600],
      light: PURPLE[400],
      dark: PURPLE[800],
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#a78bfa",
      contrastText: "#0A0A0F",
    },

    background: {
      default: SURFACE.base,
      paper: SURFACE.raised,
    },

    text: {
      primary: "#f1f0f5",
      secondary: "#9592a8",
      disabled: "#4a4860",
    },

    divider: SURFACE.border,

    error: { main: "#f87171" },
    warning: { main: "#fbbf24" },
    success: { main: "#34d399" },
    info: { main: PURPLE[400] },

    // Custom tokens accessible via theme.palette.surface.*
    surface: SURFACE,
    purple: PURPLE,
  },

  // ── Typography ───────────────────────────
  typography: {
    fontFamily: '"DM Sans", "Inter", system-ui, sans-serif',
    fontFamilyMono: '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',

    h1: {
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
      letterSpacing: "-0.01em",
      lineHeight: 1.4,
    },
    h4: { fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.4 },
    h5: { fontSize: "1rem", fontWeight: 600, lineHeight: 1.5 },
    h6: { fontSize: "0.875rem", fontWeight: 600, lineHeight: 1.5 },

    body1: { fontSize: "0.9375rem", lineHeight: 1.65 },
    body2: { fontSize: "0.8125rem", lineHeight: 1.6 },

    caption: { fontSize: "0.75rem", color: "#9592a8" },
    overline: {
      fontSize: "0.6875rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      fontWeight: 600,
    },
    button: { textTransform: "none", fontWeight: 500, letterSpacing: "0.01em" },

    // Monospace variant — use sx={{ fontFamily: 'mono' }} or theme.typography.fontFamilyMono
    mono: {
      fontFamily: '"JetBrains Mono", "Fira Code", monospace',
      fontSize: "0.8125rem",
      lineHeight: 1.6,
    },
  },

  // ── Shape ────────────────────────────────
  shape: {
    borderRadius: 8,
  },

  // ── Spacing ──────────────────────────────
  spacing: 4, // 1 unit = 4px (MUI default is 8px — halved for tighter dev-tool feel)

  // ── Breakpoints ──────────────────────────
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  },

  // ── Component Overrides ──────────────────
  components: {
    // ── Button
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: "0.875rem",
          padding: "8px 18px",
          transition: "all 0.15s ease",
        },
        contained: {
          background: `linear-gradient(135deg, ${PURPLE[600]}, ${PURPLE[700]})`,
          "&:hover": {
            background: `linear-gradient(135deg, ${PURPLE[500]}, ${PURPLE[600]})`,
            transform: "translateY(-1px)",
            boxShadow: `0 4px 16px ${PURPLE[600]}40`,
          },
          "&:active": { transform: "translateY(0)" },
        },
        outlined: {
          borderColor: SURFACE.border,
          color: "#f1f0f5",
          "&:hover": {
            borderColor: PURPLE[600],
            background: `${PURPLE[600]}10`,
          },
        },
        text: {
          "&:hover": { background: `${PURPLE[600]}10` },
        },
      },
    },

    // ── TextField / Input
    MuiTextField: {
      defaultProps: { variant: "outlined", size: "small" },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: SURFACE.overlay,
          fontSize: "0.875rem",
          transition: "border-color 0.15s ease, box-shadow 0.15s ease",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: SURFACE.border,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: SURFACE.borderHover,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: PURPLE[600],
            borderWidth: "1px",
          },
          "&.Mui-focused": {
            boxShadow: `0 0 0 3px ${PURPLE[600]}25`,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f87171",
          },
        },
        input: {
          padding: "10px 14px",
          color: "#f1f0f5",
          "&::placeholder": { color: "#4a4860", opacity: 1 },
          "&:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 100px ${SURFACE.overlay} inset`,
            WebkitTextFillColor: "#f1f0f5",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          color: "#9592a8",
          "&.Mui-focused": { color: PURPLE[400] },
        },
      },
    },

    // ── Paper / Card
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: SURFACE.raised,
          border: `1px solid ${SURFACE.border}`,
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: SURFACE.raised,
          border: `1px solid ${SURFACE.border}`,
          borderRadius: 12,
          transition: "border-color 0.2s ease",
          "&:hover": { borderColor: SURFACE.borderHover },
        },
      },
    },

    // ── Divider
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: SURFACE.border },
      },
    },

    // ── Chip
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontSize: "0.75rem",
          height: 24,
          fontWeight: 500,
        },
        colorPrimary: {
          backgroundColor: `${PURPLE[600]}20`,
          color: PURPLE[400],
          border: `1px solid ${PURPLE[600]}40`,
        },
      },
    },

    // ── Tooltip
    MuiTooltip: {
      defaultProps: { arrow: true },
      styleOverrides: {
        tooltip: {
          backgroundColor: SURFACE.overlay,
          border: `1px solid ${SURFACE.border}`,
          fontSize: "0.75rem",
          color: "#f1f0f5",
          borderRadius: 6,
        },
        arrow: { color: SURFACE.overlay },
      },
    },

    // ── List
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "1px 0",
          transition: "background 0.15s ease",
          "&:hover": { backgroundColor: `${PURPLE[600]}10` },
          "&.Mui-selected": {
            backgroundColor: `${PURPLE[600]}18`,
            color: PURPLE[400],
            "&:hover": { backgroundColor: `${PURPLE[600]}25` },
          },
        },
      },
    },

    // ── Tabs
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.875rem",
          minHeight: 40,
          color: "#9592a8",
          "&.Mui-selected": { color: PURPLE[400] },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: { backgroundColor: PURPLE[600] },
      },
    },

    // ── Menu / Dropdown
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: SURFACE.overlay,
          border: `1px solid ${SURFACE.border}`,
          borderRadius: 10,
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          borderRadius: 6,
          margin: "2px 6px",
          padding: "7px 12px",
          "&:hover": { backgroundColor: `${PURPLE[600]}15` },
          "&.Mui-selected": {
            backgroundColor: `${PURPLE[600]}20`,
            "&:hover": { backgroundColor: `${PURPLE[600]}28` },
          },
        },
      },
    },

    // ── Select
    MuiSelect: {
      styleOverrides: {
        icon: { color: "#9592a8" },
      },
    },

    // ── Scrollbar (global, webkit only)
    MuiCssBaseline: {
      styleOverrides: `
        * {
          scrollbar-width: thin;
          scrollbar-color: #2a2840 transparent;
        }
        *::-webkit-scrollbar { width: 6px; height: 6px; }
        *::-webkit-scrollbar-track { background: transparent; }
        *::-webkit-scrollbar-thumb {
          background: #2a2840;
          border-radius: 3px;
        }
        *::-webkit-scrollbar-thumb:hover { background: #3d3960; }

        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `,
    },
  },
});

export default theme;

// ─────────────────────────────────────────────
//  QUICK REFERENCE FOR AI PAGE GENERATION
// ─────────────────────────────────────────────
//
//  Background:     #0A0A0F  (bg.default)
//  Surface/Card:   #111118  (bg.paper)
//  Overlay:        #18181f
//  Border:         rgba(255,255,255,0.08)
//
//  Purple accent:  #7C3AED  (primary.main)
//  Purple light:   #a78bfa  (primary.light)
//
//  Text primary:   #f1f0f5
//  Text secondary: #9592a8
//
//  Font:           DM Sans (UI), JetBrains Mono (code)
//  Border radius:  8px (inputs/buttons), 12px (cards)
//
//  Status colors:
//    Error:   #f87171
//    Warning: #fbbf24
//    Success: #34d399
