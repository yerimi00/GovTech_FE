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
  background: linear-gradient(to bottom, #E5DDCA, white);
`;

const Detail = styled.button`
background-color: #3E3537;
width: 1.5rem;
height: 1.5rem;
border-radius: 3rem;
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
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
  background-color: #C6C0AF;
  border-radius: 35px;
  position: absolute;
  top: 13vh;
  left: 3rem;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const VideoDiv = styled.div`
  background-color: #DBD6C8;
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
  background-color: #FFFCF6;
  border: none;
  border-radius: 3rem;
  width: ${(props) => props.width || "100%"};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SubDiv = styled.div`
  background-color: #F1EDE3;
  border: none;
  border-radius: 3rem;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
`;

const TitleInput = styled.input.attrs({
    placeholder: '민원 답변 작성',
})`
  width: 100%;
  height: 5rem;
  border: 2px solid #DBD6C8;
  border-radius: 1rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #5E694D;
  }
`;

const DetailNoticePage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <Category width="40%" borderRadius="20px">
                                <CustomRow width='100%' alignItems='flex-end' justifyContent='center' gap='0.5rem'>
                                    <CustomFont color='#6E5F3B' font='2rem' fontWeight='bold'>고객 관리</CustomFont>
                                    <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>고객 센터 화면</CustomFont>
                                </CustomRow>
                            </Category>
                        </CustomRow>

                        <SubDiv>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                    <CustomFont color='#6E5F3B' font='1.5rem' fontWeight='bold'>000님</CustomFont>
                                    <Detail onClick={handleGoBack}>
                                        <CustomFont color='white' font='1rem' fontWeight='bold'>x</CustomFont>
                                    </Detail>
                                </CustomRow>
                                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                    <CustomFont color='#6E5F3B' font='1rem'>00:00:00 작성</CustomFont>
                                </CustomRow>
                                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                    <CustomFont color='#3E3537' fontWeight='bold' font='1rem'>민원 내용 유형</CustomFont>
                                </CustomRow>
                            </CustomColumn>

                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                <VideoDiv>
                                    민원 내용
                                </VideoDiv>
                                <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />

                                <AnswerButton>
                                    <CustomFont color='#6E5F3B' font='1.2rem'>업로드하기</CustomFont>
                                </AnswerButton>
                            </CustomColumn>
                        </SubDiv>
                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default DetailNoticePage;