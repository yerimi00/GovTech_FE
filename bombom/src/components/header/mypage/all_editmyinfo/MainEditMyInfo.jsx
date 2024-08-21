import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../container/CustomColumn';
import CustomFont from '../../../container/CustomFont';
import CustomRow from '../../../container/CustomRow';

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
  min-height: 40rem;
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
  top: 5vh;
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
`;

const MainEditMyInfoPage = () => {
    const navigate = useNavigate();

    const EditPw = () => {
        navigate('/editpasswordpage');
    }

    const EditKw = () => {
        navigate('/editkeywordpage');
    }

    const EditSentence = () => {
        navigate('/editsentencepage');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <Category width="40%" borderRadius="20px">
                                <CustomRow width='100%' alignItems='flex-end' justifyContent='center' gap='0.5rem'>
                                    <CustomFont color='#5E694D' font='2rem' fontWeight='bold'>마이페이지</CustomFont>
                                    <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>회원 정보 수정</CustomFont>
                                </CustomRow>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>

                            <SubDiv borderRadius='3rem' onClick={EditPw}>
                                <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>비밀번호 수정하기</CustomFont>
                            </SubDiv>

                            <SubDiv borderRadius='3rem' onClick={EditKw}>
                                <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>키워드 변경하기</CustomFont>
                            </SubDiv>

                            <SubDiv borderRadius='3rem' onClick={EditSentence}>
                                <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>한줄 소개 추가</CustomFont>
                            </SubDiv>

                        </CustomColumn>

                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default MainEditMyInfoPage;
