import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Error from "./pages/Error.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<Error />} />

        {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
