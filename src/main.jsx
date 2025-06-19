import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Signup from "./Signup.jsx";
import SigninFinal from "./SigninFinal.jsx";
import SettingsPage from "./SettingsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<SigninFinal />} />
        <Route path="signin" element={<SigninFinal />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<App />} />
        <Route path="settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
