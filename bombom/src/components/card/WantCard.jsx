import React from "react";
import styled from "styled-components";

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

const CardContainer = styled.div`
  background-color: #eae4d4;
  border-radius: 20px;
  padding: 1rem;
  margin: 0.5rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;
  cursor: pointer;
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
