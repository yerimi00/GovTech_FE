import React, { useState } from "react";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomColumn from "../../components/container/CustomColumn";
import CardContainer from "../../components/container/CardContainer";
import WantCategory from "../../components/container/WantCategory";
import InputContainer from "../../components/container/InputContainer";
import CustomButtonSubmit from "../../components/container/CustomButtonSubmit";

const CareWrite_n = () => {
  const [caregivers, setCaregivers] = useState([{ id: 1 }]);

  const addCaregiver = () => {
    setCaregivers([...caregivers, { id: caregivers.length + 1 }]);
  };

  return (
    <>
      <ContainerCenter>
        <PageContainer>
          <CustomColumn
            width="90%"
            alignItems="center"
            justifyContent="flex-start"
            gap="1rem"
            height="90vh"
          >
            <CustomRow width="90%" justifyContent="flex-start">
              <WantCategory top="40px" width="40%" borderRadius="20px">
                돌봄 글쓰기
              </WantCategory>
            </CustomRow>
            <MainDiv height="70vh" backgroundColor="white" borderRadius="35px">
              <InputContainer marginTop="25px" placeholder="제목 입력하기" />
              <CustomRow width="80%">
                <InputTitle>위치</InputTitle>
                <InputPart placeholder="위치를 입력해주세요" />
              </CustomRow>
              <CustomRow width="80%" marginBottom="20px">
                <InputTitle>시급</InputTitle>
                <InputPart placeholder="시급을 입력해주세요" />
              </CustomRow>

              {caregivers.map((caregiver, index) => (
                <CaregiverInfoSection key={index} />
              ))}

              <AddButton onClick={addCaregiver}>+</AddButton>

              <CustomColumn gap="0.1" width="80%">
                <InputTitle>피돌봄자 정보/구인 글</InputTitle>
                <CardContainer width="100%">
                  <InputTextArea placeholder="피 돌봄자의 정보와 구인글을 작성해주세요.(나이, 특징, 병력, 기타 등등)" />
                </CardContainer>
              </CustomColumn>
            </MainDiv>
            <CustomButtonSubmit
              width="100%"
              height="4rem"
              backgroundColor="#376399"
            >
              글 작성하기
            </CustomButtonSubmit>
          </CustomColumn>
        </PageContainer>
      </ContainerCenter>
    </>
  );
};

export default CareWrite_n;

// 피돌봄자 간략정보 컴포넌트
const CaregiverInfoSection = () => {
  return (
    <CustomColumn gap="0.1" width="80%" marginBottom="20px">
      <InputTitle>피돌봄자 간략정보</InputTitle>
      <MainDiv
        width="100%"
        backgroundColor="white"
        borderLeft="2.7px solid #C6C0AF"
        padding="0"
        margin="0.5em"
      >
        <CustomRow width="100%" borderLeft="1px">
          <InputTitle width="60px">나이</InputTitle>
          <InputPart placeholder="피돌봄자의 나이를 입력해주세요" />
        </CustomRow>
        <CustomRow width="100%" borderLeft="1px">
          <InputTitle width="60px">키워드</InputTitle>
          <InputPart placeholder="대표 키워드를 입력해주세요" />
        </CustomRow>
      </MainDiv>
    </CustomColumn>
  );
};

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const InputTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  width: ${(props) => props.width || "auto"};
  text-align: center;
`;

const InputPart = styled.input.attrs({ type: "text" })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 10px 20px;
  border: none;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.lightGray};
  font-size: 18px;
  outline: none;
  color: #3e3537;
`;

const InputTextArea = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.lightGray};
  font-size: 12px;
  outline: none;
  color: #3e3537;
  resize: vertical;
  min-height: 110px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const AddButton = styled.button`
  width: 35px;
  height: 35px;
  font-size: 24px;
  border-radius: 35px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrayHover};
  }
`;
