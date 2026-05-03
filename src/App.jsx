import SignIn from "./SignIn";
import SignUp from "./SignUp.jsx";
import Error from "./Error.jsx";
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
