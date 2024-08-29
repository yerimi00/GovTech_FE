import React from "react";
import styled from "styled-components";
import CustomButtonSubmit from "../container/CustomButtonSubmit";
import CustomRow from "../container/CustomRow";

const RemoveModal = ({ show, onClose, cardData, onRemoveRequest }) => {
  if (!show) {
    console.log("show 없음");
    return null;
  }

  if (!cardData) {
    console.log("카드 데이터 없음");
    return null;
  }

  const handleRemoveClick = async () => {
    try {
      await onRemoveRequest();
      onClose();
    } catch (error) {
      console.error("채팅방 삭제 요청 중 오류 발생:", error);
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{cardData ? cardData.title : "삭제할 채팅방"}</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <Message>해당 채팅방을 삭제하시겠습니까?</Message>
        </ModalContent>
        <CustomRow width='100%' alignItems='center' justifyContent='center'>
          <CustomButtonSubmit onClick={handleRemoveClick}>
            예
          </CustomButtonSubmit>
          <CustomButtonSubmit onClick={onClose}>아니오</CustomButtonSubmit>
        </CustomRow>
      </ModalContainer>
    </Overlay>
  );
};

export default RemoveModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
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
  width: 300px;
  position: relative;
  gap: 1rem;
  box-sizing: border-box;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
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

const Message = styled.span`
  font-weight: bold;
  font-size: ${(props) => props.fontSize || "18px"};
`;
