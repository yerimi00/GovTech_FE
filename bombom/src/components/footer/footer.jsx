import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CustomColumn from "../container/CustomColumn";
import CustomFont from "../container/CustomFont";
import { MainPageIcon, ChatIcon, FindIcon, More } from "../icons/footer";

const NaviContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  width: 100%;
  height: 11vh;
  background-color: white;
  bottom: 0;
  left: 0;
  pointer-events: auto;
  position: fixed;
  border-top: 0.5rem solid #C6C0AF;
  padding-top: 0.7rem;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
`;

const Footer = () => {
  const navigate = useNavigate();

  const handleMainClick = () => {
    navigate("/");
  };

  const handleFindClick = () => {
    navigate("/want");
  };

  const handleChatClick = () => {
    navigate("/chatpage");
  };

  const handleMoreClick = () => {
    navigate("/morepage");
  };

  return (
    <NaviContainer>
      <CustomColumn gap="0.2rem" alignItems="center" justifyContent="center" onClick={handleMainClick}>
        <MainPageIcon />
        <CustomFont color="black" font="0.7rem">
          홈
        </CustomFont>
      </CustomColumn>

      <CustomColumn
        gap="0.2rem"
        alignItems="center"
        justifyContent="center"
        onClick={handleFindClick}
        style={{ cursor: "pointer" }}
      >
        <FindIcon />
        <CustomFont color="black" font="0.7rem">
          돌보미 찾기
        </CustomFont>
      </CustomColumn>

      <CustomColumn gap="0.2rem" alignItems="center" justifyContent="center" onClick={handleChatClick}>
        <ChatIcon />
        <CustomFont color="black" font="0.7rem">
          채팅방
        </CustomFont>
      </CustomColumn>

      <CustomColumn gap="0.2rem" alignItems="center" justifyContent="center" onClick={handleMoreClick}>
        <More />
        <CustomFont color="black" font="0.7rem">
          더보기
        </CustomFont>
      </CustomColumn>
    </NaviContainer>
  );
};

export default Footer;
