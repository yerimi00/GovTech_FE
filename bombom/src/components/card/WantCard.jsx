import React from "react";
import styled from "styled-components";

const WantCard = ({
  title,
  location,
  caregiverInfo,
  hourlyRate,
  recruitmentStatus,
  time,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick} backgroundColor="#EAE4D4">
      <RecruitmentStatus recruitmentStatus={recruitmentStatus}>
        {recruitmentStatus}
      </RecruitmentStatus>
      <Title>{title}</Title>
      <div>
        <Location>{location}</Location>
        <CaregiverInfo>{caregiverInfo}</CaregiverInfo>
        <HourlyRate>{hourlyRate}</HourlyRate>
      </div>
      <RecruitmentTime>{time}</RecruitmentTime>
    </CardContainer>
  );
};

export default WantCard;

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
  gap: 0.5rem;
  cursor: pointer;
  min-height: 120px;
  align-items: ${(props) => props.alignItems || "flex-start"};
  width: ${(props) => props.width || "20rem"};
  height: ${(props) => props.height || "150px"};
  position: relative;

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

const RecruitmentStatus = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px !important;
  height: 25px;
  box-sizing: border-box;
  padding: 3px;
  right: 15px;
  border-radius: 35px;
  font-weight: bold;
  color: #fff;
  font-size: 14px;

  background-color: ${({ recruitmentStatus, theme }) =>
    recruitmentStatus === "모집완료"
      ? theme.colors.permissionGreen
      : theme.colors.mainRed};
`;

const RecruitmentTime = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 15px;
  font-size: 14px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: light;
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
