import React from "react";
import styled from "styled-components";
import CustomButtonSubmit from "../container/CustomButtonSubmit";
import WantCategory from "../container/WantCategory";
import InputContainer from "../container/InputContainer";

const ComplainComplainModal = ({ show, onClose }) => {
  if (!show) return null;

  const handleCheckClick = async () => {
    console.log("완료");
    try {
      onClose();
    } catch (error) {
      console.error("민원 요청 중 오류 발생:", error);
    }
  };

  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>민원이 등록되었습니다.</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <p>
            작성하신 민원은
            <br />
            <BText fontSize="16px">마이페이지 나의 미원 확인하기</BText>에서
            <br />
            확인, 수정, 삭제가 가능합니다.
          </p>
        </ModalContent>
        <CustomButtonSubmit onClick={handleCheckClick}>확인</CustomButtonSubmit>
      </ModalContainer>
    </Overlay>
  );
};

export default ComplainComplainModal;

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
  text-align: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 35px;
  width: 90%;
  max-width: 500px;
  position: relative;
  text-align: center;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: light;
  text-align: center;
  justify-content: center;
  align-items: center;
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

const CareInformationDiv = styled.div`
  background-color: #eae4d4;
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
`;

const ResultDiv = styled.div`
  margin: 20px;
  text-align: right;
  font-weight: bold;
  p {
    margin-top: 3 0px;
  }
  span {
    font-size: 26px;
  }
`;
