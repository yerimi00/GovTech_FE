import React from 'react';
import styled from 'styled-components';
import CustomRow from '../../components/container/CustomRow';
import CustomFont from '../../components/container/CustomFont';
import CustomColumn from '../../components/container/CustomColumn';
import StyledImg from '../../components/container/StyledImg';
import { useNavigate } from 'react-router-dom';

import { FaArrowRight } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsPeopleFill } from 'react-icons/bs';

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
  background: linear-gradient(to bottom, #e5ddc9, white);
  gap: 2rem;
`;

const MainDiv = styled.div`
  background-color: white;
  border: 2px solid #E9E2D2;
  border-radius: 1rem;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "6rem"};
  min-height: 5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
  box-shadow: 0px 4px 6px #E5DDC9;
`;

const Button = styled.button`
border: none;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
background-color: #E5DDC9;
`;

const ChatPage = () => {

  const navigate = useNavigate();

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='flex-start' gap='1rem'>

          <MainDiv>
            <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.6rem'>
              <CustomFont color='#6E5F3B' font='1.5rem' fontWeight='bold'>채팅방1</CustomFont>
              <CustomFont color='#6E5F3B' font='1rem'>대화상대: AAA</CustomFont>
            </CustomColumn>
          </MainDiv>
          <MainDiv>
            <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.6rem'>
              <CustomFont color='#6E5F3B' font='1.5rem' fontWeight='bold'>채팅방2</CustomFont>
              <CustomFont color='#6E5F3B' font='1rem'>대화상대: AAA</CustomFont>
            </CustomColumn>
          </MainDiv>
          <MainDiv>
            <CustomColumn width='90%' alignItems='flex-start' justifyContent='center' gap='0.6rem'>
              <CustomFont color='#6E5F3B' font='1.5rem' fontWeight='bold'>채팅방3</CustomFont>
              <CustomFont color='#6E5F3B' font='1rem'>대화상대: AAA</CustomFont>
            </CustomColumn>
          </MainDiv>

        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default ChatPage;