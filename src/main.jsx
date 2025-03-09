import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
// import { AuthProvider, useAuth } from "./context/AuthContext";
import App from "./App";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import UserProvider from "./context/UserProvider";
import './i18n'
import { CssBaseline } from "@mui/material";


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <UserProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <App />
            </ThemeProvider>
          </UserProvider>
        </AuthProvider>
        <Toaster position='bottom-center' />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
