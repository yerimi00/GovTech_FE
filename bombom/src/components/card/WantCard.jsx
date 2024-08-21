import React from "react";
import styled from "styled-components";
import CardContainer from "../container/CardContainer";

const WantCard = ({ title, location, caregiverInfo, hourlyRate, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <Title>{title}</Title>
      <Location>{location}</Location>
      <CaregiverInfo>{caregiverInfo}</CaregiverInfo>
      <HourlyRate>{hourlyRate}</HourlyRate>
    </CardContainer>
  );
};

export default WantCard;

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
