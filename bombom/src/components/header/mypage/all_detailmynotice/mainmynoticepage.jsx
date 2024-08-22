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
  padding: 0.5rem;
  cursor: pointer;
`;

const Detail = styled.button`
  background-color: #EC7060;
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
  min-height: 25rem;
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
  left: 2.5rem;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const MainMyNoticePage = () => {
    const navigate = useNavigate();

    const goMyNoticeDetail = () => {
        navigate('/detailmynoticepage');
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
                                    <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>내 민원 확인</CustomFont>
                                </CustomRow>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>


                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                <MainButton onClick={goMyNoticeDetail}>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                            <CustomFont color='#6E5F3B' font='1.5rem' fontWeight='bold'>민원 제목</CustomFont>
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                            <CustomFont color='#6E5F3B' font='1rem'>
                                                00:00:00
                                            </CustomFont>
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                            <CustomFont color='#6E5F3B' font='0.8rem'>
                                                민원 유형
                                            </CustomFont>
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                            <Detail>
                                                <CustomFont color='white' font='0.8rem' fontWeight='bold'>
                                                    답변대기중
                                                </CustomFont>
                                            </Detail>
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

export default MainMyNoticePage;
