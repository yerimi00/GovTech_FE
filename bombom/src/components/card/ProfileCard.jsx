import React from "react";
import styled from "styled-components";

const ProfileCard = ({ title, time, star, comment }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <p>{time}</p>
      <StarContainer>
        {[...Array(5)].map((_, index) => (
          <Star key={index} filled={index < star}>
            ★
          </Star>
        ))}
      </StarContainer>
      <p>{comment}</p>
    </CardContainer>
  );
};

export default ProfileCard;

const CardContainer = styled.div`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.lightGray};
  border-radius: ${(props) => props.borderRadius || "20px"};
  border: ${(props) => props.border || "auto"};
  padding: 1rem;
  margin: 0.5rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0;
  min-height: 120px;
  width: 100%;
  height: ${(props) => props.height || "auto"};

  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrayHover};
  }
  &:active {
    background-color: white;
  }
`;

const StarContainer = styled.div`
  display: flex !important;
  flex-direction: row !important; // 별들이 가로로 나열되도록 설정
  justify-content: center !important;
  align-items: center;
`;

const Star = styled.span`
  font-size: 20px; // 별의 크기를 10px로 고정
  color: ${(props) => (props.filled ? "#3E3537" : "#ddd")};
  text-shadow: 0 0 2px black;
  margin: 0 0.25rem; // 별 간의 간격 설정
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: light;
  color: #333;
`;
