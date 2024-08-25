import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import WantCategory from "../../components/container/WantCategory";
import CustomColumn from "../../components/container/CustomColumn";
import CustomRow from "../../components/container/CustomRow";
import CustomFont from "../../components/container/CustomFont";
import ChatCard from "../../components/card/ChatCard";
import InputContainer from "../../components/container/InputContainer";
import { RemoveChat } from "../../components/icons/chatbolbom";

const MainChatPage = () => {
  const navigate = useNavigate();

  const goChat = () => {
    navigate("/chatpage");
  };

  const handleDeletClick = () => {
    navigate("/carewrite");
  };

  const cardData = [
    {
      title: "돌봄 원해요01",
      location: "경기도 성남시",
      lastChat: "결제완료",
      time: "2024.08.25 12:40",
    },
    {
      title: "돌봄 원해요02",
      location: "서울특별시 강남구",
      lastChat: "결제완료",
      time: "2024.08.25 12:40",
    },
    {
      title: "돌봄 원해요03",
      location: "부산광역시 해운대구",
      lastChat: "결제완료",
      time: "2024.08.25 12:22",
    },
  ];

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn
          width="90%"
          alignItems="center"
          justifyContent="center"
          gap="2rem"
        >
          <MainDiv height="75vh" backgroundColor="white" borderRadius="35px">
            <CustomRow
              width="100%"
              alignItems="center"
              justifyContent="space-between"
              paddingRight="20px"
            >
              <WantCategory width="40%" borderRadius="20px">
                <CustomFont color="#3E3537" font="2rem" fontWeight="bold">
                  채팅방
                </CustomFont>
              </WantCategory>
              <RemoveChat />
            </CustomRow>

            <InputContainer
              marginTop="0px"
              placeholder="채팅방 제목 검색하기"
            />
            {cardData.map((card, index) => (
              <ChatCard
                key={index}
                title={card.title}
                location={card.location}
                lastChat={card.lastChat}
                recruitmentStatus={card.recruitmentStatus}
                time={card.time}
                onClick={() => goChat(card)}
              />
            ))}
          </MainDiv>
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default MainChatPage;

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

const WriteIconDiv = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;
  p {
    font-size: 13px;
    font-family: "Noto Sans KR";
  }

  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e5ddc9;
  }
`;
