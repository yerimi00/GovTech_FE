import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';  // useLocation 추가
import CustomRow from '../../container/CustomRow';
import CustomFont from '../../container/CustomFont';
import StyledImg from '../../container/StyledImg';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${(props) => props.bgColor || '#E5DDC9'};
  z-index: 999;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default function NewHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    const getBackgroundColor = () => {
        const { pathname, search } = location;

        if (pathname === '/protectorloginpage' || pathname === '/protectorsignuppage' || pathname === '/dolbomokpage' || pathname === '/mypage'
            || pathname === '/detaildolbomokpage' || pathname === '/dolbomeduvideopage' || pathname === '/eduvideodetailpage' ||
            pathname === '/maineditmyinfopage' || pathname === '/editpasswordpage' || pathname === '/editkeywordpage' || pathname === '/editsentencepage' ||
            pathname === '/certificatecardpage' || pathname === '/cardcamerapage') {
            return '#FBDA8B';
        } else if (pathname === '/dolbomloginpage' || pathname === '/firstdolbomsignuppage' || pathname === '/certificatedolbomsignuppage' ||
            pathname === '/arbeitdolbomsignuppage' || pathname === '/lowprotectorokpage' || pathname === '/detaillowprotectorpage') {
            return '#D8F0B2';
        } else if (pathname === '/seconddolbomsignuppage' && search === '?type=cert' ||
            pathname === '/seconddolbomsignuppage' && search === '?type=arbeit') {
            return '#D8F0B2';
        }
        return '#E5DDC9';
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <HeaderContainer bgColor={getBackgroundColor()}>
            <CustomRow width='100%' justifyContent='space-between'>
                <CustomRow width='100%' justifyContent='flex-start'>
                    <Button onClick={handleGoBack}>
                        <StyledImg src={'icon_back.png'} width='2rem' height='2rem' />
                    </Button>
                </CustomRow>
            </CustomRow>
        </HeaderContainer>
    );
}
