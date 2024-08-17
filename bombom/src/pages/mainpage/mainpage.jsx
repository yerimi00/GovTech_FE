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

const MainDiv = styled.div`
background-color:  ${props => props.backgroundColor || '#AFAFAF'};
border: none;
width:  ${props => props.width || '100%'};
height: ${props => props.height || 'auto'};
min-height: 6rem;
padding: 0.5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const HomePage = () => {
  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='flex-start' gap='1rem'>
          <MainDiv height='10vh'>
            <CustomFont color='black' font='1rem'>
              수요예측 정보
            </CustomFont>
          </MainDiv>

          <MainDiv backgroundColor='#FFCCCC' height='30vh'>
            <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
              <MainDiv height='25vh'>
                <CustomFont color='black' font='1rem'>
                  1:1 돌봄
                </CustomFont>
              </MainDiv>

              <MainDiv height='25vh'>
                <CustomFont color='black' font='1rem'>
                  1:N 돌봄
                </CustomFont>
              </MainDiv>
            </CustomRow>
          </MainDiv>
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default HomePage;