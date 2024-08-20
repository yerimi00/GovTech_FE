import React, { useState } from "react";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomColumn from "../../components/container/CustomColumn";
import WantCard from "../../components/card/wantcard";
import Modal from "../../components/modal/Modal";
import { Bolbomwrite } from "../../components/icons/wantbolbom";

const WantPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const cardData = [
    {
      title: "돌봄 원해요01",
      location: "경기도 성남시",
      caregiverInfo: ["나이: 70세, 키워드: 친절, 경험 많음"],
      hourlyRate: "시급: 15,000원",
    },
    {
      title: "돌봄 원해요02",
      location: "서울특별시 강남구",
      caregiverInfo: ["나이: 65세, 키워드: 따뜻함, 신뢰"],
      hourlyRate: "시급: 12,000원",
    },
    {
      title: "돌봄 원해요03",
      location: "부산광역시 해운대구",
      caregiverInfo: ["나이: 80세, 키워드: 정직, 성실"],
      hourlyRate: "시급: 18,000원",
    },
  ];

  const handleCardClick = (card) => {
    console.log("Card clicked:", card);
    setSelectedCard(card);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    console.log(selectedCard);
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
            <CustomRow width="100%" justifyContent="space-between">
              <Category
                fontFamily="Cafe24SsurroundAir"
                width="40%"
                borderRadius="20px"
              >
                1 : 1 돌봄
              </Category>
              <MainDiv backgroundColor="whtie" width="30%">
                <Bolbomwrite />
              </MainDiv>
            </CustomRow>
            <FindLocation placeholder="위치로 검색하기" />
            {cardData.map((card, index) => (
              <WantCard
                key={index}
                title={card.title}
                location={card.location}
                caregiverInfo={card.caregiverInfo.join(", ")}
                hourlyRate={card.hourlyRate}
                onClick={() => handleCardClick(card)}
              />
            ))}
          </MainDiv>
        </CustomColumn>
      </PageContainer>
      {showModal && (
        <Modal
          show={showModal}
          onClose={handleCloseModal}
          cardData={selectedCard}
        />
      )}
    </ContainerCenter>
  );
};

export default WantPage;

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
const FindLocation = styled.input.attrs({ type: "text" })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  padding: 10px;
  border: 1.5px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 35px;
  font-size: 18px;
  outline: none;
  color: #3e3537;
`;
const Category = styled.div`
  // display: flex;
  padding: 10px 30px 10px 30px;
  background-color: ${({ theme }) => theme.colors.lightGrayHover};
  border-radius: 35px;
  position: relative;
  float: left;
  left: 10px;
  top: -50px;
  font-size: 30px;
  font-weight: bold;
`;
