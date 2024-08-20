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
  background: linear-gradient(to bottom, #D7EFB0, white);
`;

const Detail = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  background-color: #5E694D;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 3rem;
  color: white;
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
  background-color: #D6EFAE;
  border-radius: 35px;
  position: absolute;
  top: 5vh;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const SubDiv = styled.div`
  background-color: #EAF6D6;
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ImgDiv = styled.div`
  background-color: #D3E5B7;
  border: none;
  border-radius: 1rem;
  width: ${(props) => props.width || "100%"};
  height: 15vh;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AnswerButton = styled.button`
  background-color: #FCFFF6;
  border: none;
  border-radius: 3rem;
  width: ${(props) => props.width || "100%"};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const ReasonInput = styled.textarea.attrs({
    placeholder: '수락 거부 이유 작성란.',
})`
  width: 100%;
  height: 5rem;
  border: 2px solid #D3E5B7;
  border-radius: 2rem;
  padding: 0.5rem;
  box-sizing: border-box;
  resize: none;

  &::placeholder {
    color: #6E5F3B;
  }
`;

const DetailLowProtectorPage = () => {
    const navigate = useNavigate();
    const [reason, setReason] = useState('');

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
                                <CustomRow width='100%' alignItems='flex-end' justifyContent='center' gap='1rem'>
                                    <CustomFont color='#5E694D' font='2rem' fontWeight='bold'>보호자 관리</CustomFont>
                                    <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>저소득층 인증 수락</CustomFont>
                                </CustomRow>
                            </Category>
                        </CustomRow>

                        <SubDiv borderRadius='3rem'>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center'>

                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                                    <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                        <CustomFont color='#5E694D' font='1.5rem' fontWeight='bold'>AAA님</CustomFont>
                                        <Detail onClick={handleGoBack}>
                                            <CustomFont color='white' font='1rem' fontWeight='bold'>x</CustomFont>
                                        </Detail>
                                    </CustomRow>
                                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                        <CustomFont color='#5E694D' font='1rem'>00:00:00 인증신청</CustomFont>
                                    </CustomRow>
                                </CustomColumn>

                                <ImgDiv>
                                    인증사진
                                </ImgDiv>

                                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                    <AnswerButton>
                                        <CustomFont color='#5E694D' font='1.5rem'>수락</CustomFont>
                                    </AnswerButton>
                                    <AnswerButton>
                                        <CustomFont color='#5E694D' font='1.5rem'>거절</CustomFont>
                                    </AnswerButton>
                                </CustomRow>
                                <ReasonInput value={reason} onChange={(e) => setReason(e.target.value)} />
                                <AnswerButton width='100%'>
                                    <CustomFont color='#5E694D' font='1.5rem'>인증 결과 제출</CustomFont>
                                </AnswerButton>
                            </CustomColumn>
                        </SubDiv>
                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default DetailLowProtectorPage;
