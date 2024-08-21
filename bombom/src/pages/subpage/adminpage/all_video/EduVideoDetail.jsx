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
  align-items: center;
  gap: 4rem;
  position: relative;
  background: linear-gradient(to bottom, #FBDA8B, white);
`;

const Detail = styled.button`
background-color: #D9D9D9;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
border: none;
color: black;
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 30rem;
  padding: 0.5rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const Category = styled.div`
  padding: 10px;
  background-color: #FBDA8B;
  border-radius: 35px;
  position: absolute;
  top: 13vh;
  left: 3rem;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const VideoDiv = styled.div`
  background-color: #FDF5E2;
  border: none;
  border-radius: 1rem;
  width: ${(props) => props.width || "100%"};
  height: 17vh;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AnswerButton = styled.button`
  background-color: #FBDA8B;
  border: none;
  border-radius: 3rem;
  width: ${(props) => props.width || "100%"};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const TitleInput = styled.input.attrs({
    placeholder: '제목 입력하기',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #FBDA8B;
  border-radius: 5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #5E694D;
  }
`;

const EduVideoDetailPage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <Category width="40%" borderRadius="20px">
                                <CustomFont color='#6E5F3B' font='2rem' fontWeight='bold'>돌보미 관리</CustomFont>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='3rem'>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                    <CustomFont color='#6E5F3B' font='1.3rem' fontWeight='bold'>교육 동영상 관리 화면</CustomFont>
                                </CustomRow>
                                <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
                            </CustomColumn>

                            <VideoDiv>
                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                    <CustomFont color='#6E5F3B' font='1rem'>동영상 업로드하기</CustomFont>
                                    <CustomFont color='#6E5F3B' font='0.8rem'>동영상을 업로드하시려면 클릭 후 파일을 올려주세요.</CustomFont>
                                </CustomColumn>
                            </VideoDiv>

                            <AnswerButton>
                                <CustomFont color='#6E5F3B' font='1.2rem'>업로드하기</CustomFont>
                            </AnswerButton>
                        </CustomColumn>
                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default EduVideoDetailPage;