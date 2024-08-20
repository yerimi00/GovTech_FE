import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Layout from "./components/Layout";
import HomePage from "./pages/mainpage/mainpage";
import ProtectorLoginPage from "./components/header/all_login/Protectorlogin";
import DolbomLoginPage from "./components/header/all_login/Dolbomlogin";
import FirstLoginPage from "./components/header/all_login/Firstlogin";
import ProtectorSignupPage from "./components/header/all_signup/all_protectorsignup/ProtectorSignup";
import FirstDolbomSignupPage from "./components/header/all_signup/all_dolbomsignup/FirstDolbomSignup";
import SecondDolbomSignupPage from "./components/header/all_signup/all_dolbomsignup/SecondDolbomSignup";
import ArbeitDolbomSignupPage from "./components/header/all_signup/all_dolbomsignup/ArbeitDolbomSignup";
import CertificateDolbomSignupPage from "./components/header/all_signup/all_dolbomsignup/CertificateDolbomSignup";
import WantPage from "./pages/wantpage/wantpage";
import CareWrite from "./pages/careWrite/careWrite";

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/firstloginpage" element={<FirstLoginPage />} />
            <Route
              path="/protectorloginpage"
              element={<ProtectorLoginPage />}
            />
            <Route path="/dolbomloginpage" element={<DolbomLoginPage />} />
            <Route
              path="/protectorsignuppage"
              element={<ProtectorSignupPage />}
            />
            <Route
              path="/firstdolbomsignuppage"
              element={<FirstDolbomSignupPage />}
            />
            <Route
              path="/seconddolbomsignuppage"
              element={<SecondDolbomSignupPage />}
            />
            <Route
              path="/arbeitdolbomsignuppage"
              element={<ArbeitDolbomSignupPage />}
            />
            <Route
              path="/certificatedolbomsignuppage"
              element={<CertificateDolbomSignupPage />}
            />
            <Route path="/want" element={<WantPage />} />
            <Route path="/carewrite" element={<CareWrite />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
