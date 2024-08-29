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
import CareWriteN from "./pages/careWrite/careWrite_n";
import AdminPage from "./pages/subpage/adminpage/adminpage";
import DolbomOkPage from "./pages/subpage/adminpage/all_dolbomok/DolbomOk";
import DetailDolbomOkPage from "./pages/subpage/adminpage/all_dolbomok/DetailDolbomOk";
import DolbomEduVideoPage from "./pages/subpage/adminpage/all_video/DolbomEduVideo";
import EduVideoDetailPage from "./pages/subpage/adminpage/all_video/EduVideoDetail";
import LowProtectorOkPage from "./pages/subpage/adminpage/all_lowprotectorok/LowProtectorOk";
import DetailLowProtectorPage from "./pages/subpage/adminpage/all_lowprotectorok/DetailLowProtector";
import NoticePage from "./pages/subpage/adminpage/all_notice/Notice";
import DetailNoticePage from "./pages/subpage/adminpage/all_notice/DetailNotice";
import ChatPage from "./pages/chatpage/chatpage";
import MorePage from "./pages/morepage/morepage";
import ComplainWrite from "./pages/morepage/complainWrite";
import WantPageN from "./pages/wantpage/wantpage_n";
import MainWantPage from "./pages/wantpage/mainwantpage";
import MyPage from "./components/header/mypage/mypage";
import MainEditMyInfoPage from "./components/header/mypage/all_editmyinfo/MainEditMyInfo";
import EditPasswordPage from "./components/header/mypage/all_editmyinfo/editpassword";
import EditKeywordPage from "./components/header/mypage/all_editmyinfo/editkeyword";
import EditSentencePage from "./components/header/mypage/all_editmyinfo/editsentence";
import CertificateCardPage from "./components/header/mypage/all_certificatecard/certificatecardpage";
import CardCameraPage from "./components/header/mypage/all_certificatecard/cardcamerapage";
import MainMyNoticePage from "./components/header/mypage/all_detailmynotice/mainmynoticepage";
import DetailMyNoticePage from "./components/header/mypage/all_detailmynotice/detailmynoticepage";
import MainChatPage from "./pages/chatpage/mainchatpage";
import AdminLoginPage from "./components/header/all_login/AdminLogin";
import DolbomFindIdPage from "./components/header/all_login/all_findid/DolbomFindId";
import ProtectorFindIdPage from "./components/header/all_login/all_findid/ProtectorFindId";
import MainEditWantPage from "./components/header/mypage/all_editwant/maineditwantpage";

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
            <Route path="/mainwantpage" element={<MainWantPage />} />
            <Route path="/want" element={<WantPage />} />
            <Route path="/wantpagen" element={<WantPageN />} />
            <Route path="/carewrite" element={<CareWrite />} />
            <Route path="/carewriten" element={<CareWriteN />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/dolbomokpage" element={<DolbomOkPage />} />
            <Route
              path="/detaildolbomokpage"
              element={<DetailDolbomOkPage />}
            />
            <Route
              path="/dolbomeduvideopage"
              element={<DolbomEduVideoPage />}
            />
            <Route
              path="/eduvideodetailpage"
              element={<EduVideoDetailPage />}
            />
            <Route
              path="/lowprotectorokpage"
              element={<LowProtectorOkPage />}
            />
            <Route
              path="/detaillowprotectorpage"
              element={<DetailLowProtectorPage />}
            />
            <Route path="/noticepage" element={<NoticePage />} />
            <Route path="/detailnoticepage" element={<DetailNoticePage />} />
            <Route path="/chatpage" element={<ChatPage />} />
            <Route path="/morepage" element={<MorePage />} />
            <Route path="/complainwrite" element={<ComplainWrite />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route
              path="/maineditmyinfopage"
              element={<MainEditMyInfoPage />}
            />
            <Route path="/editpasswordpage" element={<EditPasswordPage />} />
            <Route path="/editkeywordpage" element={<EditKeywordPage />} />
            <Route path="/editsentencepage" element={<EditSentencePage />} />
            <Route
              path="/certificatecardpage"
              element={<CertificateCardPage />}
            />
            <Route path="/cardcamerapage" element={<CardCameraPage />} />
            <Route path="/mainmynoticepage" element={<MainMyNoticePage />} />
            <Route
              path="/detailmynoticepage"
              element={<DetailMyNoticePage />}
            />
            <Route path="/mainchatpage" element={<MainChatPage />} />
            <Route path="/adminloginpage" element={<AdminLoginPage />} />
            <Route path="/dolbomfindidpage" element={<DolbomFindIdPage />} />
            <Route
              path="/protectorfindidpage"
              element={<ProtectorFindIdPage />}
            />
            <Route
              path="/maineditwantpage"
              element={<MainEditWantPage />}
            />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
