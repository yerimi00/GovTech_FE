import React from 'react';
import styled from 'styled-components';
import Header from './header/all_header/header';
import NewHeader from './header/all_header/newHeader';
import Footer from './footer/footer';
import AdminFooter from './footer/adminFooter';
import { Outlet, useLocation } from 'react-router-dom';
import ResetCss from '../ResetCss';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 6vh;
  background-color: transparent;
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
            location.pathname === '/mainmynoticepage') {
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
            <Container>
                {renderHeader()}
                <Main>
                    <Outlet />
                </Main>
                {renderFooter()}
            </Container>
        </>
    );
};

export default Layout;
