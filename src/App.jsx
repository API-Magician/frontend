import SignIn from "./SignIn";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
