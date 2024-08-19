import React from "react";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomFont from "../../components/container/CustomFont";
import CustomColumn from "../../components/container/CustomColumn";
import WantCard from "../../components/card/wantcard";

const WantPage = () => {
  const cardData = [
    {
      title: "돌봄 원해요01",
      location: "경기도 성남시",
      caregiverInfo: "나이: 70세, 키워드: 친절, 경험 많음",
      hourlyRate: "시급: 15,000원",
    },
    {
      title: "돌봄 원해요02",
      location: "서울특별시 강남구",
      caregiverInfo: "나이: 65세, 키워드: 따뜻함, 신뢰",
      hourlyRate: "시급: 12,000원",
    },
    {
      title: "돌봄 원해요03",
      location: "부산광역시 해운대구",
      caregiverInfo: "나이: 80세, 키워드: 정직, 성실",
      hourlyRate: "시급: 18,000원",
    },
  ];
  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn
          width="90%"
          alignItems="center"
          justifyContent="flex-start"
          gap="1rem"
        >
          <CustomRow width="100%" justifyContent="space-between">
            <MainDiv width="40%">일대일돌봄</MainDiv>
            <MainDiv width="30%">글작성하기</MainDiv>
          </CustomRow>
          <MainDiv backgroundColor="blue">
            <MainDiv> 위치로 검색하기</MainDiv>
            {cardData.map((card, index) => (
              <WantCard
                key={index}
                title={card.title}
                location={card.location}
                caregiverInfo={card.caregiverInfo}
                hourlyRate={card.hourlyRate}
              />
            ))}
          </MainDiv>
        </CustomColumn>
      </PageContainer>
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
  background-color: white;
  gap: 2rem;
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "#AFAFAF"};
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  min-height: 6rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
