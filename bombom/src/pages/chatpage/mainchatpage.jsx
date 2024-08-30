import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import WantCategory from "../../components/container/WantCategory";
import CustomColumn from "../../components/container/CustomColumn";
import CustomRow from "../../components/container/CustomRow";
import CustomFont from "../../components/container/CustomFont";
import ChatCard from "../../components/card/ChatCard";
import InputContainer from "../../components/container/InputContainer";
import { RemoveChat } from "../../components/icons/chatbolbom";
import RemoveModal from "../../components/modal/RemoveModal";

const MainChatPage = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "돌봄 원해요01",
      location: "경기도 성남시",
      lastChat: "결제완료",
      time: "2024.08.25 12:40",
    },
    {
      id: 2,
      title: "돌봄 원해요02",
      location: "서울특별시 강남구",
      lastChat: "결제완료",
      time: "2024.08.25 12:40",
    },
    {
      id: 3,
      title: "돌봄 원해요03",
      location: "부산광역시 해운대구",
      lastChat: "결제완료",
      time: "2024.08.25 12:22",
    },
  ]);

  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const goChat = () => {
    navigate("/chatpage");
  };

  const handleDeleteClick = (card) => {
    setCurrentCard(card);
    // setShowRemoveModal(true);
    console.log("Delete clicked");
    console.log(card);
    console.log("current card: ", currentCard);
  };

  useEffect(() => {
    if (currentCard) {
      console.log("currentCard is not null, opening modal...");
      setShowRemoveModal(true);
      console.log("currentCard:", currentCard);
      console.log("showRemoveModal:", showRemoveModal);
    } else {
      console.log("currentCard is null, not opening modal.");
    }
  }, [currentCard]);

  const handleRemoveRequest = () => {
    if (currentCard) {
      setCards(cards.filter((card) => card.id !== currentCard.id));
      setShowRemoveModal(false);
      setCurrentCard(null);
    }
  };

  const toggleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

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
              <WriteIconDiv
                backgroundColor="white"
                display="flex"
                width="50px"
                height="50px"
                onClick={toggleDeleteMode}
              >
                <RemoveChat />
              </WriteIconDiv>
            </CustomRow>

            <InputContainer
              marginTop="0px"
              placeholder="채팅방 제목 검색하기"
            />
            {cards.map((card) => (
              <ChatCard
                key={card.id}
                title={card.title}
                location={card.location}
                lastChat={card.lastChat}
                time={card.time}
                onClick={goChat}
                onDelete={() => handleDeleteClick(card)}
                isDeleteMode={isDeleteMode}
              />
            ))}
          </MainDiv>
        </CustomColumn>
      </PageContainer>
      {showRemoveModal && (
        <RemoveModal
          show={showRemoveModal}
          onClose={() => setShowRemoveModal(false)}
          cardData={currentCard}
          onRemoveRequest={handleRemoveRequest}
        />
      )}
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
  display: flex;
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

const RemoveBtn = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  display: ${(props) => (props.show ? "block" : "none")};
`;
