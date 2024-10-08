import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomRow from '../../container/CustomRow';
import CustomColumn from '../../container/CustomColumn';
import CustomFont from '../../container/CustomFont';
import { BsPersonCircle } from 'react-icons/bs';
import StyledImg from '../../container/StyledImg';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 390px;
  left: 50%;
  transform: translateX(-50%);
  height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #E5DDC9;
  z-index: 999;
`;

const Button = styled.button`
border: none;
border-radius: 0.5rem;
background-color: transparent;

min-width: 3rem;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
cursor: pointer;
`;

const MyButton = styled.button`
border-radius: 50%;
border: none;
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
padding: 0.1rem;
cursor: pointer;
`;

const StyledImg2 = styled.img`
  width: 2rem;
  height: 2rem;
`;

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const goLogin = () => {
        navigate('/firstloginpage'); // 보호자 로그인, 돌보미 로그인 중 선택하는 화면으로 넘어감 
    }

    const goAdmin = () => {
        navigate('/adminpage'); // 관리자화면. 나중에 조건부 렌더링으로 수정할 것임!
    }

    const goMy = () => {
        navigate('/mypage');
    }

    const handleGoBack = () => {
        navigate(-1);
    };

    const isSpecialRoute = ['/', '/mainwantpage', '/chatting', '/more'].includes(location.pathname);

    return (
        <HeaderContainer>
            <CustomRow width='100%' justifyContent='space-between' gap='0'>
                <CustomRow width='100%' justifyContent='space-between'>
                    {isSpecialRoute ? (
                        <StyledImg src={'main_logo.png'} />
                    ) : (
                        <Button onClick={handleGoBack}>
                            <StyledImg2 src={'icon_back.png'} alt="뒤로가기" />
                        </Button>
                    )}

                    <CustomRow>
                        <MyButton onClick={goMy}>
                            <CustomColumn gap='0.1rem' alignItems='center' justifyContent='center'>
                                <BsPersonCircle style={{ color: 'black', fontSize: '1.5rem' }} />
                                <CustomFont color='black' font='0.6rem'>마이</CustomFont>
                            </CustomColumn>
                        </MyButton>
                        <Button onClick={goAdmin}>
                            <CustomFont color='#626262' font='0.8rem'>관리자 화면</CustomFont>
                        </Button>
                        <Button onClick={goLogin}>
                            <CustomFont color='#626262' font='0.8rem'>LOGIN</CustomFont>
                        </Button>
                    </CustomRow>
                </CustomRow>
            </CustomRow>
        </HeaderContainer>
    );
}
