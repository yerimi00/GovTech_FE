import React from 'react';
import styled from 'styled-components';
import CustomRow from '../../components/container/CustomRow';
import CustomFont from '../../components/container/CustomFont';
import CustomColumn from '../../components/container/CustomColumn';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  background-color: white;
  gap: 2rem;
`;

const ChatPage = () => {
    return (
        <ContainerCenter>
            <PageContainer>
                채팅목록화면
            </PageContainer>
        </ContainerCenter>
    );
};

export default ChatPage;