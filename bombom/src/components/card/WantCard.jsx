import styled from "styled-components";

const WantCard = ({ title, location, caregiverInfo, hourlyRate }) => {
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Location>{location}</Location>
      <CaregiverInfo>{caregiverInfo}</CaregiverInfo>
      <HourlyRate>{hourlyRate}</HourlyRate>
    </CardContainer>
  );
};

export default WantCard;

const CardContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const Location = styled.p`
  font-size: 1rem;
  color: #777;
`;

const CaregiverInfo = styled.p`
  font-size: 1rem;
  color: #555;
`;

const HourlyRate = styled.p`
  font-size: 1rem;
  color: #000;
  font-weight: bold;
`;
