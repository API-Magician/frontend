import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────
//  404 — NotFound Page
//  Terminal / API-response aesthetic.
//  No layout wrapper needed — full page standalone.
// ─────────────────────────────────────────────

const LINES = [
  { delay: 0, text: "$ GET /this-page", dim: false },
  { delay: 400, text: "> Resolving route...", dim: true },
  { delay: 900, text: "> Checking collections...", dim: true },
  { delay: 1400, text: "> Scanning project endpoints...", dim: true },
  { delay: 1900, text: "", dim: true },
  { delay: 2000, text: "← 404 Not Found", dim: false, error: true },
  { delay: 2400, text: '  message: "This route does not exist."', dim: true },
  {
    delay: 2600,
    text: '  hint:    "Check the URL or go back home."',
    dim: true,
  },
];

export default function Error() {
  const theme = useTheme();
  const navigate = useNavigate();
  const lineRefs = useRef([]);

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => {
        const el = lineRefs.current[i];
        if (el) el.style.opacity = "1";
      }, line.delay);
    });
  }, []);

  const PURPLE = theme.palette.purple;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
        backgroundSize: "100% 100%, 40px 40px, 40px 40px",
        background: theme.palette.surface.bgGradient,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 560 }}>
        {/* 404 glyph */}
        <Box sx={{ mb: 6, position: "relative" }}>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: { xs: "5rem", sm: "7rem" },
              fontWeight: 700,
              lineHeight: 1,
              color: "transparent",
              WebkitTextStroke: `1px ${PURPLE[600]}60`,
              userSelect: "none",
              letterSpacing: "-0.04em",
              mb: 0,
            }}
          >
            404
          </Typography>
          {/* Filled overlay — slight offset for depth */}
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: { xs: "5rem", sm: "7rem" },
              fontWeight: 700,
              lineHeight: 1,
              color: PURPLE[600],
              opacity: 0.12,
              letterSpacing: "-0.04em",
              position: "absolute",
              top: 4,
              left: 4,
              userSelect: "none",
            }}
          >
            404
          </Typography>
        </Box>

        {/* Terminal block */}
        <Box
          sx={{
            bgcolor: "background.paper",
            border: `1px solid ${theme.palette.surface.border}`,
            borderRadius: "12px",
            p: 4,
            mb: 5,
            boxShadow: `inset 0 1px 0 ${theme.palette.surface.borderHover}, 0 20px 60px rgba(0,0,0,0.4)`,
          }}
        >
          {/* Terminal dots */}
          <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
            {["#f87171", "#fbbf24", "#34d399"].map((c, i) => (
              <Box
                key={i}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: c,
                  opacity: 0.7,
                }}
              />
            ))}
          </Box>

          {/* Terminal lines */}
          <Box
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.8125rem",
              lineHeight: 1.9,
            }}
          >
            {LINES.map((line, i) => (
              <Box
                key={i}
                ref={(el) => (lineRefs.current[i] = el)}
                sx={{
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  color: line.error
                    ? "#f87171"
                    : line.dim
                      ? "text.secondary"
                      : PURPLE[400],
                  minHeight: line.text === "" ? "0.5rem" : "auto",
                }}
              >
                {line.text}
              </Box>
            ))}

            {/* Blinking cursor */}
            <Box
              sx={{
                display: "inline-block",
                width: 8,
                height: "1em",
                bgcolor: PURPLE[600],
                verticalAlign: "text-bottom",
                mt: 1,
                animation: "blink 1s step-end infinite",
                "@keyframes blink": {
                  "0%, 100%": { opacity: 1 },
                  "50%": { opacity: 0 },
                },
              }}
            />
          </Box>
        </Box>

        {/* Actions */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button
            variant="contained"
            onClick={() => navigate("/dashboard")}
            sx={{ flex: 1 }}
          >
            Go to Dashboard
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            sx={{ flex: 1 }}
          >
            Go back
          </Button>
        </Box>

        {/* Watermark */}
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 5,
            color: "text.disabled",
          }}
        >
          API Magician
        </Typography>
      </Box>
    </Box>
  );
}
