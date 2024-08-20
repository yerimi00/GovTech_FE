import React, { useState } from "react";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomColumn from "../../components/container/CustomColumn";
import WantCategory from "../../components/container/WantCategory";
import InputContainer from "../../components/container/InputContainer";

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
              <CustomRow>
                <p>위치</p>
                <InputPart></InputPart>
              </CustomRow>
            </MainDiv>
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
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
`;

const InputPart = styled.input.attrs({ type: "text" })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  padding: 10px 30px 10px 30px;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.lightGray};
  // border-radius: 35px;
  font-size: 18px;
  outline: none;
  color: #3e3537;
`;
