import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// ─────────────────────────────────────────────
//  AuthLayout
//  Shared shell for all auth pages (Login, Register, etc.)
//  Usage:
//    <AuthLayout title="Welcome back" subtitle="Sign in to continue">
//      {/* your form here */}
//    </AuthLayout>
// ─────────────────────────────────────────────

export default function AuthLayout({ title, subtitle, children, maxWidth = 420 }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 4,
        // Subtle grid texture — purely decorative
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -20%, ${theme.palette.purple[600]}18, transparent),
          linear-gradient(${theme.palette.surface.border} 1px, transparent 1px),
          linear-gradient(90deg, ${theme.palette.surface.border} 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 40px 40px, 40px 40px',
      }}
    >
      <Box sx={{ width: '100%', maxWidth }}>

        {/* Logo / Brand */}
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${theme.palette.purple[600]}, ${theme.palette.purple[800]})`,
              mb: 3,
              boxShadow: `0 0 24px ${theme.palette.purple[600]}50`,
            }}
          >
            {/* Replace with your actual logo/icon */}
            <Typography sx={{ fontSize: '1.2rem', lineHeight: 1 }}>✦</Typography>
          </Box>

          <Typography variant="h2" sx={{ mb: 1, color: 'text.primary' }}>
            {title}
          </Typography>

          {subtitle && (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {subtitle}
            </Typography>
          )}
        </Box>

        {/* Card */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            border: `1px solid ${theme.palette.surface.border}`,
            borderRadius: '16px',
            p: { xs: 4, sm: 5 },
            // Inner top highlight — glass effect
            boxShadow: `
              inset 0 1px 0 ${theme.palette.surface.borderHover},
              0 20px 60px rgba(0,0,0,0.4)
            `,
          }}
        >
          {children}
        </Box>

        {/* App name watermark */}
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            textAlign: 'center',
            mt: 4,
            color: 'text.disabled',
          }}
        >
          API Magician
        </Typography>
      </Box>
    </Box>
  );
}
