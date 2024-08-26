import React from "react";
import styled from "styled-components";

const ChatCard = ({
  title,
  location,
  lastChat,
  time,
  onClick,
  onDelete,
  isDeleteMode,
}) => {
  return (
    <Container>
      {isDeleteMode && <DeleteButton onClick={onDelete}>-</DeleteButton>}
      <CardContainer
        height="125px"
        onClick={onClick}
        backgroundColor="#EAE4D4"
        isDeleteMode={isDeleteMode}
      >
        <Title>{title}</Title>
        <Content justifyContent="space-between">
          <LastChat>{lastChat}</LastChat>
          <RecruitmentTime>{time}</RecruitmentTime>
        </Content>

        <Content>
          <Location>{location}</Location>
        </Content>
      </CardContainer>
    </Container>
  );
};

export default ChatCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

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
  width: ${(props) =>
    props.isDeleteMode ? "17rem" : "20rem"}; // isDeleteMode에 따라 width 설정
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

const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.editYellow};
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-right: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;
`;
