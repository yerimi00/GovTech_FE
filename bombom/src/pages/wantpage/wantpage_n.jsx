import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomColumn from "../../components/container/CustomColumn";
import WantCategory from "../../components/container/WantCategory";
import WantCard from "../../components/card/wantcard";
import InputContainer from "../../components/container/InputContainer";
import Modal from "../../components/modal/Modal";
import { Bolbomwrite } from "../../components/icons/wantbolbom";

const WantPageN = () => {
  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const cardData = [
    {
      title: "돌봄 원해요01",
      location: "경기도 성남시",
      caregiverInfo: ["나이: 70세, 키워드: 친절, 경험 많음"],
      hourlyRate: "시급: 15,000원",
      recruitmentStatus: "모집중",
      time: "2024.08.25 12:40",
    },
    {
      title: "돌봄 원해요02",
      location: "서울특별시 강남구",
      caregiverInfo: ["나이: 65세, 키워드: 따뜻함, 신뢰"],
      hourlyRate: "시급: 12,000원",
      recruitmentStatus: "모집완료",
      time: "2024.08.25 12:40",
    },
    {
      title: "돌봄 원해요03",
      location: "부산광역시 해운대구",
      caregiverInfo: ["나이: 80세, 키워드: 정직, 성실"],
      hourlyRate: "시급: 18,000원",
      recruitmentStatus: "모집중",
      time: "2024.08.25 12:22",
    },
  ];

  const handleWriteClick = () => {
    navigate("/carewriten");
  };

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
          <MainDiv height="75vh" backgroundColor="white" borderRadius="35px">
            <CustomRow width="90%" justifyContent="space-between">
              <WantCategory width="40%" borderRadius="20px">
                1 : N 돌봄
              </WantCategory>
              <WriteIconDiv
                backgroundColor="white"
                width="50px"
                height="50px"
                onClick={handleWriteClick}
              >
                <Bolbomwrite />
                <p>글쓰기</p>
              </WriteIconDiv>
            </CustomRow>
            <InputContainer marginTop="0px" placeholder="위치로 검색하기" />
            {cardData.map((card, index) => (
              <WantCard
                key={index}
                title={card.title}
                location={card.location}
                caregiverInfo={card.caregiverInfo.join(", ")}
                hourlyRate={card.hourlyRate}
                recruitmentStatus={card.recruitmentStatus}
                time={card.time}
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

export default WantPageN;

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
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  display: flex;
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
