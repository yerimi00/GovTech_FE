import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../components/container/CustomColumn';
import CustomRow from '../../components/container/CustomRow';
import CustomFont from '../../components/container/CustomFont';

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
  background: linear-gradient(to bottom, #E6DECB, white);
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 35rem;
  padding: 0.5rem;
  padding-top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Category = styled.div`
  padding: 10px;
  background-color: #C6C0AF;
  border-radius: 35px;
  position: absolute;
  top: 11vh;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const SubDiv = styled.button`
  background-color: #EAE4D4;
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: 2rem;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const MainChatPage = () => {
    const navigate = useNavigate();

    const goChat = () => {
        navigate('/chatpage');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <Category width="40%" borderRadius="20px">
                                <CustomFont color='#3E3537' font='2rem' fontWeight='bold'>채팅방</CustomFont>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' height='40vh' alignItems='center' justifyContent='flex-start' gap='1rem'>

                            <SubDiv borderRadius='3rem' onClick={goChat}>
                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                    <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                        <CustomFont color='#3E3537' font='1.4rem' fontWeight='bold'>제목 돌봄 원해요01</CustomFont>
                                    </CustomRow>
                                    <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                        <CustomFont color='#3E3537' font='0.8rem'>경기도 용인시 외대로 81</CustomFont>
                                    </CustomRow>
                                    <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                        <CustomFont color='#3E3537' font='0.8rem'>5세/활발함, 활동적임, 힘이 넘침</CustomFont>
                                    </CustomRow>
                                    <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                        <CustomFont color='#3E3537' font='1.3rem' fontWeight='bold'>15,000원</CustomFont>
                                    </CustomRow>
                                </CustomColumn>
                            </SubDiv>

                        </CustomColumn>

                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default MainChatPage;
