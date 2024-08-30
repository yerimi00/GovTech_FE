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
import { BsFillGeoAltFill } from 'react-icons/bs';

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

const InfoDiv = styled.div`
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
  gap: 2rem;
`;

const MainDiv = styled.button`
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
  cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #C6C0AF;
}
`;

const Button = styled.button`
border: none;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
background-color: #E5DDC9;

cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #C6C0AF;
}
`;

const HomePage = () => {

  const navigate = useNavigate();

  const goDolbomWant = () => {
    navigate('/want');
  };

  const goDolbomWantN = () => {
    navigate('/wantpagen');
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='flex-start' gap='1rem'>
          <InfoDiv backgroundColor="white" borderRadius="35px" height='25vh'>
            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
              <CustomRow width='100%' alignItems='center' justifyContent='center'>
                <CustomRow width='60%' alignItems='center' justifyContent='flex-start' gap='0.5rem'>
                  <BsFillGeoAltFill size={30} color="#6E5F3B" />
                  <CustomFont color='black' font='1.4rem' fontWeight='bold'>경기도 성남시</CustomFont>
                </CustomRow>

                <CustomColumn width='40%' alignItems='flex-end' justifyContent='center' gap='0.5rem'>
                  <CustomFont color='black' font='0.7rem'>업데이트</CustomFont>
                  <CustomFont color='black' font='0.7rem'>2024.08.25</CustomFont>
                </CustomColumn>
              </CustomRow>

              <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.3rem'>
                  <CustomFont color='black' font='1rem' fontWeight='bold'>오늘</CustomFont>
                  <CustomFont color='black' font='1.5rem' fontWeight='bold'>35</CustomFont>
                  <CustomFont color='black' font='1rem' fontWeight='bold'>개의 돌봄이 매칭되었습니다!</CustomFont>
                </CustomRow>

                <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.7rem'>
                  <CustomFont color='black' font='1rem' fontWeight='bold'>현재 위치의 돌봄글은</CustomFont>
                  <CustomFont color='black' font='1.5rem' fontWeight='bold'>96</CustomFont>
                  <CustomFont color='black' font='1rem' fontWeight='bold'>개 입니다!</CustomFont>
                </CustomRow>
              </CustomColumn>
            </CustomColumn>

            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='1rem'>
              <CustomRow width='50%' alignItems='center' justifyContent='center'>
                <CustomFont color='black' font='0.8rem' fontWeight='bold'>서비스 매칭률</CustomFont>
                <CustomFont color='black' font='1.2rem' fontWeight='bold'>72%</CustomFont>
              </CustomRow>

              <CustomRow width='50%' alignItems='center' justifyContent='center'>
                <CustomFont color='black' font='0.8rem' fontWeight='bold'>돌보미 수</CustomFont>
                <CustomFont color='black' font='1.2rem' fontWeight='bold'>10936명</CustomFont>
              </CustomRow>
            </CustomRow>
          </InfoDiv>


          <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
            <MainDiv backgroundColor="white" width='50%' height='30vh' borderRadius="35px">
              <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                  <Button onClick={goDolbomWant}>
                    <FaArrowRight style={{ color: 'white', fontSize: '2rem' }} />
                  </Button>
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                  <BsFillPersonFill style={{ color: 'black', fontSize: '4rem' }} />
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                  <CustomFont color='black' font='1.5rem' fontWeight='bold'>
                    1 : 1 돌봄
                  </CustomFont>
                </CustomRow>

                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.1rem'>
                  <CustomFont color='black' font='0.7rem' fontWeight='bold'>
                    집중 케어를 원하신다면
                  </CustomFont>
                  <CustomFont color='black' font='0.7rem' fontWeight='bold'>
                    선택해주세요.
                  </CustomFont>
                </CustomColumn>
              </CustomColumn>
            </MainDiv>

            <MainDiv backgroundColor="white" width='50%' height='30vh' borderRadius="35px">
              <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                  <Button onClick={goDolbomWantN}>
                    <FaArrowRight style={{ color: 'white', fontSize: '2rem' }} />
                  </Button>
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                  <BsPeopleFill style={{ color: 'black', fontSize: '4rem' }} />
                </CustomRow>
                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                  <CustomFont color='black' font='1.5rem' fontWeight='bold'>
                    1 : N 돌봄
                  </CustomFont>
                </CustomRow>

                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.1rem'>
                  <CustomFont color='black' font='0.7rem' fontWeight='bold'>
                    저렴한 비용을 원하신다면
                  </CustomFont>
                  <CustomFont color='black' font='0.7rem' fontWeight='bold'>
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