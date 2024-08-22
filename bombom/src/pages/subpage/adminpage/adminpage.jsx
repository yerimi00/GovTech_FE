import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';
import WantCategory from '../../../components/container/WantCategory';

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
  background: linear-gradient(to bottom, #e5ddc9, white);
`;

const MenuButton = styled.button`
background-color: ${(props) => props.backgroundColor || "#AFAFAF"};
border: none;
border-radius: 5rem;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
color: black;
padding: 1rem;
cursor: pointer;
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
`;

const AdminPage = () => {
    const navigate = useNavigate();

    const goDolbomOk = () => { // 돌보미 인증 수락 페이지
        navigate('/dolbomokpage');
    }

    const goDolbomEduVideo = () => {
        navigate('/dolbomeduvideopage'); // 아르바이트 돌보미 교육 동영상 관리 페이지로 이동
    }

    const goLowProtectorOk = () => {
        navigate('/lowprotectorokpage'); // 저소득층 인증 수락 페이지
    }

    const goNotice = () => { // 고객센터 바로가기 버튼
        navigate('/noticepage');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <WantCategory width="40%" borderRadius="20px">
                                관리자 화면
                            </WantCategory>
                        </CustomRow>
                        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                            <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='1rem'>
                                <CustomFont color='#6E5F3B' font='1.5rem'>돌보미 관리</CustomFont>
                                <MenuButton backgroundColor='#FBDA8B' onClick={goDolbomOk}>
                                    <CustomFont color='#6E5F3B' font='1rem'>돌보미 인증 수락 화면</CustomFont>
                                </MenuButton>
                                <MenuButton backgroundColor='#FBDA8B' onClick={goDolbomEduVideo}>
                                    <CustomFont color='#6E5F3B' font='1rem'>교육 동영상 관리 화면</CustomFont>
                                </MenuButton>
                            </CustomColumn>

                            <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='1rem'>
                                <CustomFont color='#5E694D' font='1.5rem'>보호자 관리</CustomFont>
                                <MenuButton backgroundColor='#D6EFAE' onClick={goLowProtectorOk}>
                                    <CustomFont color='#6E5F3B' font='1rem'>저소득층 인증 수락 화면</CustomFont>
                                </MenuButton>
                            </CustomColumn>

                            <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='1rem'>
                                <CustomFont color='#6E5F3B' font='1.5rem'>고객 관리</CustomFont>
                                <MenuButton backgroundColor='#E5DDC9' onClick={goNotice}>
                                    <CustomFont color='#6E5F3B' font='1rem'>고객 관리 화면</CustomFont>
                                </MenuButton>
                            </CustomColumn>
                        </CustomColumn>
                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default AdminPage;