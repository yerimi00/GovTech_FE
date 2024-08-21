import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../container/CustomRow';
import CustomColumn from '../../container/CustomColumn';
import CustomFont from '../../container/CustomFont';
import StyledImg from '../../container/StyledImg';
import { FaArrowRight } from 'react-icons/fa';

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
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  position: relative;
  background: linear-gradient(to bottom, #E5DDC9, white);
  gap: 2rem;
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "#AFAFAF"};
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 6rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
  box-shadow: 0px 4px 6px #E5DDC9;

  transition: background-color 0.3s ease;

//   &:hover {
//     background-color: white;
//   }
`;

const Button = styled.button`
border: none;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
background-color: white;
background-color: ${(props) =>
        props.isClicked ? props.clickedColor : props.backgroundColor};
`;

const AdminButton = styled.button`
border: none;
border-radius: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
background-color: rgba(251, 218, 139, 0.5);
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
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='6.5rem'>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.1rem'>
                            <CustomFont color='#3B3B3B' fontWeight='bold' font='1.2rem' fontFamily='Cafe24SsurroundAir'>쉽게 구할 수 있는</CustomFont>
                            <CustomFont color='#3B3B3B' fontWeight='bold' font='1.2rem' fontFamily='Cafe24SsurroundAir'>아이, 노인 돌보미 매칭 서비스, 봄봄</CustomFont>
                        </CustomColumn>
                    </CustomColumn>

                    <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='1rem'>
                        <MainDiv backgroundColor="#FBDA8B" width='50%' height='30vh' borderRadius="35px">
                            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='4rem'>
                                <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                                    <Button clickedColor='#D9BD78' onClick={goProtectoeLogin}>
                                        <FaArrowRight style={{ color: '#FBDA8B' }} />
                                    </Button>
                                </CustomRow>

                                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.1rem'>
                                    <CustomFont color='black' font='1rem' fontFamily='Cafe24SsurroundAir'>보호자</CustomFont>
                                    <CustomFont color='black' font='1.7rem' fontWeight='bold' fontFamily='Cafe24SsurroundAir'>로그인</CustomFont>
                                </CustomColumn>
                            </CustomColumn>
                        </MainDiv>

                        <MainDiv backgroundColor="#D6EFAE" width='50%' height='30vh' borderRadius="35px">
                            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='4rem'>
                                <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                                    <Button clickedColor='#BDD398' onClick={goDolbomLogin}>
                                        <FaArrowRight style={{ color: '#D6EFAE' }} />
                                    </Button>
                                </CustomRow>

                                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.1rem'>
                                    <CustomFont color='black' font='1rem' fontFamily='Cafe24SsurroundAir'>돌보미</CustomFont>
                                    <CustomFont color='black' font='1.7rem' fontWeight='bold' fontFamily='Cafe24SsurroundAir'>로그인</CustomFont>
                                </CustomColumn>
                            </CustomColumn>
                        </MainDiv>
                    </CustomRow>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                        <AdminButton>
                            <CustomFont color='black' font='1rem' fontFamily='Cafe24SsurroundAir'>관리자 전용</CustomFont>
                        </AdminButton>
                    </CustomRow>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default FirstLoginPage;