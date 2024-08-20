import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';

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
  background-color: white;
`;

const Detail = styled.button`
background-color: #D9D9D9;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
border: none;
color: black;
`;

const MainDiv = styled.div`
background-color: ${props => props.backgroundColor || '#AFAFAF'};
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
flex-direction: row;
border: none;
width: ${props => props.width || '90%'};
height: ${props => props.height || 'auto'};
`;

const EduVideoDetailPage = () => {
    const navigate = useNavigate();

    return (
        <ContainerCenter>
            <PageContainer>
                <MainDiv>
                    <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                        <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                            <CustomFont color='black' font='1rem'>01.Intro</CustomFont>
                            <Detail>수정/저장</Detail>
                        </CustomRow>
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <CustomFont color='black' font='1rem'>제목 작성란</CustomFont>
                        </CustomRow>
                        <MainDiv width='100%' height='20vh' backgroundColor='#D9D9D9'>동영상 업로드</MainDiv>
                        <MainDiv width='100%' backgroundColor='#D9D9D9'>동영상 업로드하기</MainDiv>
                    </CustomColumn>
                </MainDiv>
            </PageContainer>
        </ContainerCenter>
    );
};

export default EduVideoDetailPage;