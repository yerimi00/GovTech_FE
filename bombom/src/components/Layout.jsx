import React from 'react';
import styled from 'styled-components';
import Header from './header/all_header/header';
import NewHeader from './header/all_header/newHeader';
import Footer from './footer/footer';
import AdminFooter from './footer/adminFooter';
import { Outlet, useLocation } from 'react-router-dom';
import ResetCss from '../ResetCss';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;  /* 모바일 너비 */
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
`;

const Layout = () => {
    const location = useLocation();

    const renderHeader = () => {
        if (location.pathname === '/protectorloginpage' || location.pathname === '/dolbomloginpage'
            || location.pathname === '/firstloginpage' || location.pathname === '/protectorsignuppage' ||
            location.pathname === '/dolbomsignuppage' || location.pathname === '/seconddolbomsignuppage' ||
            location.pathname === '/firstdolbomsignuppage' || location.pathname === '/certificatedolbomsignuppage' ||
            location.pathname === '/arbeitdolbomsignuppage' || location.pathname === '/dolbomokpage' ||
            location.pathname === '/detaildolbomokpage' || location.pathname === '/dolbomeduvideopage' ||
            location.pathname === '/eduvideodetailpage' || location.pathname === '/lowprotectorokpage' ||
            location.pathname === '/detaillowprotectorpage' || location.pathname === '/noticepage' ||
            location.pathname === '/detailnoticepage' || location.pathname === '/mypage' ||
            location.pathname === '/maineditmyinfopage' || location.pathname === '/editpasswordpage' ||
            location.pathname === '/editkeywordpage' || location.pathname === '/editsentencepage' ||
            location.pathname === '/certificatecardpage' || location.pathname === '/cardcamerapage' ||
            location.pathname === '/mainmynoticepage' || location.pathname === '/detailmynoticepage' ||
            location.pathname === '/chatpage' || location.pathname === '/adminloginpage' ||
            location.pathname === '/dolbomfindidpage' || location.pathname === '/protectorfindidpage' ||
            location.pathname === '/maineditwantpage' || location.pathname === '/detaileditwantpage') {
            return <NewHeader />;
        }
        return <Header />;
    };

    const renderFooter = () => {
        if (location.pathname === '/adminpage') {
            return <AdminFooter />;
        }
        return <Footer />;
    };

    return (
        <>
            <ResetCss />
            <Wrapper>
                {renderHeader()}
                <Main>
                    <Outlet />
                </Main>
                {renderFooter()}
            </Wrapper>
        </>
    );
};

export default Layout;
