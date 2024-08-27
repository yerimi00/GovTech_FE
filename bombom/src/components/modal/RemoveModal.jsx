import React from "react";
import styled from "styled-components";
import CustomButtonSubmit from "../container/CustomButtonSubmit";

const RemoveModal = ({ show, onClose, cardData, onRemoveRequest }) => {
  if (!show) return null;

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
        <ButtonContainer>
          <CustomButtonSubmit onClick={handleRemoveClick}>
            예
          </CustomButtonSubmit>
          <CustomButtonSubmit onClick={onClose}>아니오</CustomButtonSubmit>
        </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default RemoveModal;

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
