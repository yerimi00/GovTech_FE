import React from 'react';
import styled from 'styled-components';
import CustomRow from '../../components/container/CustomRow';
import CustomFont from '../../components/container/CustomFont';
import CustomColumn from '../../components/container/CustomColumn';
import StyledImg from '../../components/container/StyledImg';
import { FaArrowRight } from 'react-icons/fa';

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
  background-color: ${(props) => props.backgroundColor || "#AFAFAF"};
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 6rem;
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

const HomePage = () => {
  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='flex-start' gap='1rem'>
          <MainDiv backgroundColor="white" borderRadius="35px" height='30vh'>
            <CustomFont color='black' font='1rem'>
              수요예측 정보
            </CustomFont>
          </MainDiv>


          <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
            <MainDiv backgroundColor="white" width='50%' height='30vh' borderRadius="35px">
              <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                  <Button>
                    <FaArrowRight style={{ color: 'white' }} />
                  </Button>
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                  <StyledImg src={'icon_person.png'} />
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                  <CustomFont color='black' font='1.5rem' fontWeight='bold'>
                    1 : 1 돌봄
                  </CustomFont>
                </CustomRow>

                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.1rem'>
                  <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                    집중 케어를 원하신다면
                  </CustomFont>
                  <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                    선택해주세요.
                  </CustomFont>
                </CustomColumn>
              </CustomColumn>
            </MainDiv>

            <MainDiv backgroundColor="white" width='50%' height='30vh' borderRadius="35px">
              <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                  <Button>
                    <FaArrowRight style={{ color: 'white' }} />
                  </Button>
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                  <StyledImg src={'icon_person.png'} />
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                  <CustomFont color='black' font='1.5rem' fontWeight='bold'>
                    1 : N 돌봄
                  </CustomFont>
                </CustomRow>

                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.1rem'>
                  <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                    저렴한 비용을 원하신다면
                  </CustomFont>
                  <CustomFont color='black' font='0.8rem' fontWeight='bold'>
                    선택해주세요.
                  </CustomFont>
                </CustomColumn>
              </CustomColumn>
            </MainDiv>
          </CustomRow>

        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default HomePage;