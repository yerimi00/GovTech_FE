import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../container/CustomColumn';
import CustomRow from '../../container/CustomRow';
import CustomFont from '../../container/CustomFont';

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
  align-items: center;
  gap: 4rem;
  position: relative;
  background: linear-gradient(to bottom, #FBDB8F, white);
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 30rem;
  padding: 0.5rem;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Category = styled.div`
  padding: 10px;
  background-color: #FBDA8B;
  border-radius: 35px;
  position: absolute;
  top: 9rem;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const SubDiv = styled.button`
  background-color: #FBDA8B;
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #FDE9BA;
}
`;

const MyPage = () => {
    const navigate = useNavigate();

    const EditInfo = () => {
        navigate('/maineditmyinfopage'); // 내 정보 수정하기
    }

    const EditCard = () => {
        navigate('/editcardpage'); // 내 결제정보 수정하기 (아직 기획디자인 안됨!)
    }

    const CertificateCard = () => {
        navigate('/certificatecardpage'); // 행복카드 인증하기 
    }

    const DetailMyNotice = () => {
        navigate('/mainmynoticepage'); // 나의 민원 확인하기
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <Category width="40%" borderRadius="20px">
                                <CustomFont color='#5E694D' font='2rem' fontWeight='bold'>마이페이지</CustomFont>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>

                            <SubDiv borderRadius='3rem' onClick={EditInfo}>
                                <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>회원정보 수정</CustomFont>
                            </SubDiv>

                            <SubDiv borderRadius='3rem' onClick={EditCard}>
                                <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>결제정보 수정</CustomFont>
                            </SubDiv>

                            <SubDiv borderRadius='3rem' onClick={CertificateCard}>
                                <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>행복카드 인증하기</CustomFont>
                            </SubDiv>

                            <SubDiv borderRadius='3rem' onClick={DetailMyNotice}>
                                <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>나의 민원 확인하기</CustomFont>
                            </SubDiv>

                        </CustomColumn>

                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default MyPage;
