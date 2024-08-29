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
  justify-content: flex-start;
  position: relative;
  background: linear-gradient(to bottom, #FBDA8B, white);
  padding-top: 30vh;
`;

const MainButton = styled.button`
  background-color: #FCECC4;
  border: none;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
  padding: 1rem;
  cursor: pointer;
`;

const Detail = styled.button`
  background-color: ${(props) => props.backgroundColor || "#EC7060"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 5rem;
  color: white;
  width: 5rem;
  height: 2rem;
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 35rem;
  padding: 0.5rem;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
  margin-top: -4vh;
`;

const Category = styled.div`
  padding: 10px 30px;
  background-color: #FBDA8B;
  border-radius: 35px;
  position: absolute;
  top: 22vh;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const MainEditWantPage = () => {
    const navigate = useNavigate();

    const goDetailEditWant = () => {
        navigate('/detaileditwantpage');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <Category width="40%" borderRadius="20px">
                                <CustomRow width='100%' alignItems='flex-end' justifyContent='center' gap='0.5rem'>
                                    <CustomFont color='#6E5F3B' font='2rem' fontWeight='bold'>마이페이지</CustomFont>
                                    <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>돌봄글 수정하기</CustomFont>
                                </CustomRow>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>


                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                <MainButton onClick={goDetailEditWant}>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                        <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                                            <CustomFont color='#6E5F3B' font='1.5rem' fontWeight='bold'>돌봄원해요01</CustomFont>
                                            <Detail backgroundColor='#6CE3B1'>
                                                <CustomFont color='white' font='0.8rem' fontWeight='bold'>
                                                    모집중
                                                </CustomFont>
                                            </Detail>
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                            <CustomFont color='#6E5F3B' font='1rem'>
                                                경기도 용인시 처인구 모현읍
                                            </CustomFont>
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                            <CustomFont color='#6E5F3B' font='0.8rem'>
                                                7세/활발함, 힘이넘침
                                            </CustomFont>
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                                            <CustomFont color='#6E5F3B' font='0.8rem'>
                                                2024.08.27
                                            </CustomFont>
                                            <CustomFont color='#6E5F3B' font='0.8rem' fontWeight='bold'>
                                                15,000원
                                            </CustomFont>
                                        </CustomRow>
                                    </CustomColumn>
                                </MainButton>

                                <MainButton onClick={goDetailEditWant}>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                        <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                                            <CustomFont color='#6E5F3B' font='1.5rem' fontWeight='bold'>돌봄원해요01</CustomFont>
                                            <Detail>
                                                <CustomFont color='white' font='0.8rem' fontWeight='bold'>
                                                    모집완료
                                                </CustomFont>
                                            </Detail>
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                            <CustomFont color='#6E5F3B' font='1rem'>
                                                경기도 용인시 처인구 모현읍
                                            </CustomFont>
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                            <CustomFont color='#6E5F3B' font='0.8rem'>
                                                5세/활발함, 힘이넘침
                                            </CustomFont>
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                                            <CustomFont color='#6E5F3B' font='0.8rem'>
                                                2024.08.25
                                            </CustomFont>
                                            <CustomFont color='#6E5F3B' font='0.8rem' fontWeight='bold'>
                                                15,000원
                                            </CustomFont>
                                        </CustomRow>
                                    </CustomColumn>
                                </MainButton>

                            </CustomColumn>
                        </CustomColumn>
                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default MainEditWantPage;
