import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../components/container/CustomColumn';
import CustomRow from '../../../components/container/CustomRow';
import CustomFont from '../../../components/container/CustomFont';

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

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 1000;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

const MenuButton = styled.button`
background-color: #AFAFAF;
border: none;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
color: black;
padding: 1rem;
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
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>

                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='1rem'>
                        <CustomFont color='black' font='1rem'>돌보미 관리</CustomFont>
                        <MenuButton onClick={goDolbomOk}>돌보미 인증 수락 페이지</MenuButton>
                        <MenuButton onClick={goDolbomEduVideo}>교육 동영상 관리 페이지</MenuButton>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='1rem'>
                        <CustomFont color='black' font='1rem'>보호자 관리</CustomFont>
                        <MenuButton onClick={goLowProtectorOk}>저소득층 인증 수락 페이지</MenuButton>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='1rem'>
                        <CustomFont color='black' font='1rem'>고객 관리</CustomFont>
                        <MenuButton onClick={goNotice}>고객센터 페이지</MenuButton>
                    </CustomColumn>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default AdminPage;