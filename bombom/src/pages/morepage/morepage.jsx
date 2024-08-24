import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomColumn from "../../components/container/CustomColumn";
import WantCategory from "../../components/container/WantCategory";
import CustomButtonSubmit from "../../components/container/CustomButtonSubmit";

const MorePage = () => {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate("/complainwrite");
  };
  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn
          width="90%"
          height="70vh"
          alignItems="center"
          justifyContent="flex-start"
        >
          <MainDiv height="70vh" backgroundColor="white" borderRadius="35px">
            <TopSection>
              <WantCategory top="-50px" width="40%" borderRadius="20px">
                더보기
              </WantCategory>
            </TopSection>
            <BottomSection>
              <CustomButtonSubmit
                borderRadius="20px"
                onClick={handleWriteClick}
              >
                민원 작성하기
              </CustomButtonSubmit>
            </BottomSection>
          </MainDiv>
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default MorePage;

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
  min-height: 6rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
`;

const BottomSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
