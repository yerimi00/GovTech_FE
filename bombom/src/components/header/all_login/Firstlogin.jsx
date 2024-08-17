import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../container/CustomRow';
import CustomColumn from '../../container/CustomColumn';
import CustomFont from '../../container/CustomFont';
import StyledImg from '../../container/StyledImg';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  position: relative;
  background-color: white;
`;

const Button = styled.button`
width: ${props => props.width || 'auto'};
height: ${props => props.height || 'auto'};
  background-color: ${props => props.backgroundColor || '#AFAFAF'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
`;


const FirstLoginPage = () => {
    const navigate = useNavigate();

    const goProtectoeLogin = () => {
        navigate('/protectorloginpage');
    }

    const goDolbomLogin = () => {
        navigate('/dolbomloginpage')
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        <CustomFont color='black' fontWeight='bold' font='1rem'>처음 로그인 화면</CustomFont>
                    </CustomRow>

                    <CustomFont color='black' fontWeight='bold' font='1rem'>서비스 간단 설명</CustomFont>

                    <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='1rem'>
                        <Button width='50%' height='20rem' onClick={goProtectoeLogin}>
                            <CustomFont color='black' font='1rem'>보호자 로그인</CustomFont>
                        </Button>
                        <Button width='50%' height='20rem' backgroundColor='#FF6666' onClick={goDolbomLogin}>
                            <CustomFont color='white' font='1rem'>돌보미 로그인</CustomFont>
                        </Button>
                    </CustomRow>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default FirstLoginPage;