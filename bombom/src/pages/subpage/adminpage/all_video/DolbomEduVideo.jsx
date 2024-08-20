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
  gap: 4rem;
  position: relative;
  background-color: white;
`;

const MenuButton = styled.button`
background-color: #AFAFAF;
border: none;
display: flex;
align-items: center;
justify-content: center;
width: 80%;
color: black;
padding: 1rem;
`;

const Detail = styled.button`
background-color: #D9D9D9;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
border: none;
border-radius: 5rem;
color: black;
`;

const DolbomEduVideoPage = () => {
    const navigate = useNavigate();

    const goEduVideoDetail = () => { // 돌보미 교육 비디오 편집 화면
        navigate('/eduvideodetailpage');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='4rem'>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                            <Detail>-</Detail>
                            <MenuButton>
                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                    <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                        <CustomFont color='black' font='1rem'>01.Intro</CustomFont>
                                    </CustomRow>
                                    <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                        <CustomFont color='black' font='0.8rem'>
                                            15:43
                                        </CustomFont>
                                        <Detail onClick={goEduVideoDetail}>{'>'}</Detail>
                                    </CustomRow>
                                </CustomColumn>
                            </MenuButton>
                            <Detail>=</Detail>
                        </CustomRow>

                        <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                            <Detail>-</Detail>
                            <MenuButton>
                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                    <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                        <CustomFont color='black' font='1rem'>02.제 1장</CustomFont>
                                    </CustomRow>
                                    <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                        <CustomFont color='black' font='0.8rem'>
                                            15:17
                                        </CustomFont>
                                        <Detail onClick={goEduVideoDetail}>{'>'}</Detail>
                                    </CustomRow>
                                </CustomColumn>
                            </MenuButton>
                            <Detail>=</Detail>
                        </CustomRow>

                        <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                            <Detail>-</Detail>
                            <MenuButton>
                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                    <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                        <CustomFont color='black' font='1rem'>03.제 2장</CustomFont>
                                    </CustomRow>
                                    <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                        <CustomFont color='black' font='0.8rem'>
                                            14:07
                                        </CustomFont>
                                        <Detail onClick={goEduVideoDetail}>{'>'}</Detail>
                                    </CustomRow>
                                </CustomColumn>
                            </MenuButton>
                            <Detail>=</Detail>
                        </CustomRow>
                    </CustomColumn>

                    <CustomRow width='100%' alignItems='center' justifyContent='center'>
                        <Detail onClick={goEduVideoDetail}>+</Detail>
                    </CustomRow>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default DolbomEduVideoPage;