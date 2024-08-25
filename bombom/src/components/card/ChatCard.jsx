import React from "react";
import styled from "styled-components";
import CustomColumn from "../container/CustomColumn";
import CustomRow from "../container/CustomRow";

const ChatCard = ({ title, location, lastChat, time, onClick }) => {
  return (
    <CardContainer height="125px" onClick={onClick} backgroundColor="#EAE4D4">
      <Title>{title}</Title>
      <Content justifyContent="space-between">
        <LastChat>{lastChat}</LastChat>
        <RecruitmentTime>{time}</RecruitmentTime>
      </Content>

      <Content>
        <Location>{location}</Location>
      </Content>
    </CardContainer>
  );
};

export default ChatCard;

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

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrayHover};
  }
  &:active {
    background-color: white;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-end"};
  align-items: center;
  gap: 0.5rem;
`;

const RecruitmentTime = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: bold;
  text-align: right;
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

const LastChat = styled.p`
  font-size: 20px;
  color: #555;
  text-align: right;
`;
