import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomColumn from "../../components/container/CustomColumn";
import WantCategory from "../../components/container/WantCategory";
import WantCard from "../../components/card/wantcard";
import { ReturnBtn } from "../../components/icons/wantbolbom";
import CardContainer from "../../components/container/CardContainer";

const ChatPage = () => {
  const navigate = useNavigate();

  const handleFindClick = () => {
    navigate("/want");
  };

  const cardData = {
    title: "돌봄 원해요01",
    location: "경기도 성남시",
    caregiverInfo: ["나이: 70세, 키워드: 친절, 경험 많음"],
    hourlyRate: "시급: 15,000원",
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn
          width="90%"
          alignItems="center"
          justifyContent="flex-start"
          gap="1rem"
        >
          <MainDiv backgroundColor="white" borderRadius="35px">
            <CustomRow width="90%" justifyContent="center" position="relative">
              <ReturnIconWrapper
                width="40%"
                borderRadius="20px"
                backgroundColor="#E2DFD6"
                onClick={handleFindClick}
              >
                <ReturnBtn />
              </ReturnIconWrapper>
              <WantCategory width="40%" borderRadius="20px" zIndex="2">
                제목 돌봄 원해요01
              </WantCategory>
            </CustomRow>
            <MainDiv backgroundColor="white">
              <WantCard
                title={cardData.title}
                location={cardData.location}
                caregiverInfo={cardData.caregiverInfo.join(", ")}
                hourlyRate={cardData.hourlyRate}
                styled={{ backgroundColor: "white" }}
              />
              <CardContainer
                alignItems="center"
                height="5em"
                borderRadius="35px"
              >
                위 글에 대한 채팅이 시작됩니다.
                <div>
                  <p>보호자 AAA님의 프로필 보러가기</p>
                </div>
                <div>
                  <p>돌보미 BBB님의 프로필 보러가기</p>
                </div>
              </CardContainer>
            </MainDiv>
          </MainDiv>
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default ChatPage;

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
  position: relative;
`;

const ReturnIconWrapper = styled.div`
  position: absolute;
  top: -20px;
  left: 10px;
  padding: 13px 50px 13px 10px;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.lightGrayHover};
  border-radius: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  cursor: pointer;
`;
