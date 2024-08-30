import React, { useState } from "react";
import styled from "styled-components";
import { CloseIcon } from "../icons/wantbolbom";
import CustomButtonSubmit from "../container/CustomButtonSubmit";
import ProfileCard from "../card/ProfileCard";
import CustomRow from "../container/CustomRow";

const ProfileModal = ({ show, onClose, profileName }) => {
  if (!show) return null;

  const [reviewData, setReviewData] = useState([
    {
      title: "돌봄 원해요01",
      time: "2024.08.25 12:40",
      star: "5",
      comment: "그는 굉장한 실력자.. 제시카 쌤보다 더 뛰어나신 분입니다.",
    },
    {
      title: "돌봄 원해요02",
      time: "2024.08.25 12:40",
      star: "1",
      comment: "그는 굉장한 실력자.. 제시카 쌤보다 더 뛰어나신 분입니다.",
    },
    {
      title: "돌봄 원해요03",
      time: "2024.08.25 12:40",
      star: "3",
      comment: "그는 굉장한 실력자.. 제시카 쌤보다 더 뛰어나신 분입니다.",
    },
  ]);

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
          <div>
            <ModalTitle>{profileName}의 프로필</ModalTitle>
            <p>국가 자격 돌보미</p>
          </div>
        </ModalHeader>
        <ModalContent>
          {reviewData.map((review, index) => (
            <ProfileCard
              key={index}
              title={review.title}
              time={review.time}
              star={review.star}
              comment={review.comment}
            />
          ))}
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

export default ProfileModal;

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
  max-width: 500px;
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
  width: 100%;
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
