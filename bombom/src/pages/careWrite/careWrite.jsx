import React, { useState } from "react";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomColumn from "../../components/container/CustomColumn";
import CardContainer from "../../components/container/CardContainer";
import WantCategory from "../../components/container/WantCategory";
import InputContainer from "../../components/container/InputContainer";
import CustomButtonSubmit from "../../components/container/CustomButtonSubmit";

const CareWrite = () => {
  return (
    <>
      <ContainerCenter>
        <PageContainer>
          <CustomColumn
            width="90%"
            alignItems="center"
            justifyContent="flex-start"
            gap="1rem"
          >
            <MainDiv backgroundColor="white" borderRadius="35px">
              <CustomRow width="90%" justifyContent="space-between">
                <WantCategory width="40%" borderRadius="20px">
                  돌봄 글쓰기
                </WantCategory>
              </CustomRow>
              <InputContainer placeholder="제목 입력하기" />
              <CustomRow width="80%">
                <InputTitle>위치</InputTitle>
                <InputPart placeholder="위치를 입력해주세요" />
              </CustomRow>
              <CustomRow width="80%" marginBottom="20px">
                <InputTitle>시급</InputTitle>
                <InputPart placeholder="시급을 입력해주세요" />
              </CustomRow>
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
              <CustomColumn gap="0.1" width="80%">
                <InputTitle>피돌봄자 정보/구인 글</InputTitle>
                <CardContainer>
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

export default CareWrite;

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
  padding: ${(props) => props.padding || "0.5rem"};
  margin: ${(props) => props.margin || "0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
  border-left: ${(props) => props.borderLeft || "none"};
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
  min-height: 150px;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;
