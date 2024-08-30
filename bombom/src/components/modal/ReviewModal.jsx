import React, { useState } from "react";
import styled from "styled-components";
import CustomButtonSubmit from "../container/CustomButtonSubmit";
import CardContainer from "../container/CardContainer";
import CustomRow from "../container/CustomRow";
import { CloseIcon } from "../icons/wantbolbom";

const ReviewModal = ({ show, onClose, onReviewRequest }) => {
  const [rating, setRating] = useState(0);

  if (!show) return null;

  const keywordData = ["돌보미 키워드1", "돌보미 키워드2", "돌보미 키워드3"];

  const handleReviewClick = async () => {
    console.log("리뷰 요청 시작");
    try {
      await onReviewRequest();
      console.log("리뷰 작성 완료");
      onClose();
      console.log("리뷰작성모달 닫기 요청");
    } catch (error) {
      console.error("리뷰작성 요청 중 오류 발생:", error);
    }
  };

  const handleStarClick = (index) => {
    if (rating === index + 1) {
      setRating(index); // 같은 별을 클릭하면 그 별을 비활성화
    } else {
      setRating(index + 1); // 해당 별까지 모두 활성화
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <CustomRow
          onClick={onClose}
          width="100%"
          alignItems="center"
          justifyContent="flex-end"
        >
          <CloseIcon />
        </CustomRow>
        <ModalHeader>
          <ModalTitle>돌보미 BBB님의 리뷰 남기기</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <KeywordContainer>
            {keywordData.map((keyword, index) => (
              <Keyword key={index}>{keyword}</Keyword>
            ))}
          </KeywordContainer>
          <CardContainer width="100%">
            <InputTextArea />
          </CardContainer>
          <StarContainer>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                filled={index < rating}
                onClick={() => handleStarClick(index)}
              >
                ★
              </Star>
            ))}
          </StarContainer>
        </ModalContent>
        <CustomButtonSubmit onClick={handleReviewClick}>
          리뷰 작성하기
        </CustomButtonSubmit>
      </ModalContainer>
    </Overlay>
  );
};

export default ReviewModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
  max-width: 350px;
  position: relative;
  gap: 1rem;
  box-sizing: border-box;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
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
  font-size: 1.1rem;
  font-weight: light;
`;

const ModalContent = styled.div`
  margin-bottom: 2rem;
`;

const KeywordContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const Keyword = styled.div`
  background-color: trnaparent;
  padding: 0.05rem 0.05rem;
  border-radius: 20px;
  font-size: 14px;
`;

const InputTextArea = styled.textarea.attrs({
  placeholder: "돌봄자 정보",
})`
  width: 100%;
  height: 7rem;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: transparent;
  vertical-align: top;

  &::placeholder {
    color: #5e694d;
  }
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Star = styled.span`
  font-size: 2rem;
  color: ${(props) => (props.filled ? "#EAE4D4" : "white")};
  cursor: pointer;
  text-shadow: 0 0 2px black;
  margin: 0 0.25rem;
`;
