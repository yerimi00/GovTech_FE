import React from "react";
import styled from "styled-components";
import CustomButtonSubmit from "../container/CustomButtonSubmit";
import InputContainer from "../container/InputContainer";
import CardContainer from "../container/CardContainer";

const ReviewModal = ({ show, onClose, onReviewRequest }) => {
  if (!show) return null;

  const keywordData = ["돌보미 키워드1", "돌보미 키워드2", "돌보미 키워드3"];

  const handleReviewClick = async () => {
    console.log("리뷰버튼 클릭");
    try {
      await onReviewRequest();
      console.log("리뷰 작성완료");
      onClose();
      console.log("리뷰모달 닫기 요청");
    } catch (error) {
      console.error("리뷰작성 요청 중 오류 발생:", error);
    }
  };
  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>돌보미 BBB님의 리뷰 남기기</ModalTitle>
        </ModalHeader>
        <ModalContent>
          {keywordData.map((keyword, index) => (
            <p key={index}>
              <BText fontSize="16px">
                {keyword}
                {index < keywordData.length - 1 && ", "}
              </BText>
            </p>
          ))}
          <CardContainer width="100%">
            <InputTextArea placeholder="돌봄자 정보" />
          </CardContainer>
        </ModalContent>
        <CustomButtonSubmit onClick={handleReviewClick}>
          리뷰작성하기
        </CustomButtonSubmit>
      </ModalContainer>
    </Overlay>
  );
};

export default ReviewModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 35px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: light;
`;

const ModalContent = styled.div`
  margin-bottom: 2rem;
  p {
    margin: 0.5rem 0;
  }
`;

const BText = styled.span`
  font-weight: bold;
  font-size: ${(props) => props.fontSize || "18px"};
`;
