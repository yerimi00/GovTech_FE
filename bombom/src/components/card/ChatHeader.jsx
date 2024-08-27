import React from "react";
import styled from "styled-components";

const ChatHeader = ({
  title,
  location,
  caregiverInfo,
  hourlyRate,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <Title>{title}</Title>
      <div>
        <Location>{location}</Location>
        <CaregiverInfo>{caregiverInfo}</CaregiverInfo>
        <HourlyRate>{hourlyRate}</HourlyRate>
      </div>
    </CardContainer>
  );
};

export default ChatHeader;

const CardContainer = styled.div`
  background-color: white;
  padding: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  min-height: 120px;
  align-items: flex-start;
  width: 20rem;
  height: 150px;
  position: relative;
  border-bottom: solid 2px #eae4d4;

  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors?.lightGrayHover || "#f0f0f0"};
  }
  &:active {
    background-color: white;
  }
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 300;
  color: #333;
`;

const Location = styled.p`
  font-size: 14px;
  color: #777;
  text-align: right;
`;

const CaregiverInfo = styled.p`
  font-size: 14px;
  color: #555;
  text-align: right;
`;

const HourlyRate = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: bold;
  text-align: right;
`;

const RecruitmentTime = styled.p`
  font-size: 14px;
  color: #999;
`;
