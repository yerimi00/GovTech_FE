import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import CustomColumn from "../container/CustomColumn";
import CustomFont from "../container/CustomFont";
import { MainPageIcon, ChatIcon, FindIcon, More } from "../icons/footer";
import { MdHandyman } from "react-icons/md";

const NaviContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 390px;
  transform: translateX(-50%);
  height: 11vh;
  background-color: white;
  bottom: 0;
  left: 50%;
  pointer-events: auto;
  position: fixed;
  border-top: 0.5rem solid #C6C0AF;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
`;

const StyledCustomColumn = styled(CustomColumn)`
  padding-top: 0.7rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${({ isActive }) => (isActive ? '#C6C0AF' : 'transparent')};
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #E5DDC9;
  }
`;

const AdminFooter = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleMainClick = () => {
        navigate("/");
    };

    const handleFindClick = () => {
        navigate("/mainwantpage");
    };

    const handleMoreClick = () => {
        navigate("/morepage");
    };

    const handleAdminClick = () => {
        navigate("/adminpage");
    };

    return (
        <NaviContainer>
            <StyledCustomColumn
                gap="0.2rem"
                alignItems="center"
                justifyContent="center"
                onClick={handleMainClick}
                isActive={location.pathname === "/"}
            >
                <MainPageIcon />
                <CustomFont color="black" font="0.7rem">
                    홈
                </CustomFont>
            </StyledCustomColumn>

            <StyledCustomColumn
                gap="0.2rem"
                alignItems="center"
                justifyContent="center"
                onClick={handleFindClick}
                isActive={location.pathname === "/want"}
            >
                <FindIcon />
                <CustomFont color="black" font="0.7rem">
                    돌보미 찾기
                </CustomFont>
            </StyledCustomColumn>

            <StyledCustomColumn
                gap="0.2rem"
                alignItems="center"
                justifyContent="center"
                onClick={handleMoreClick}
                isActive={location.pathname === "/morepage"}
            >
                <More />
                <CustomFont color="black" font="0.7rem">
                    더보기
                </CustomFont>
            </StyledCustomColumn>

            <StyledCustomColumn
                gap="0.2rem"
                alignItems="center"
                justifyContent="center"
                onClick={handleAdminClick}
                isActive={location.pathname === "/adminpage"}
            >
                <MdHandyman size={40} color="#3E3537" />
                <CustomFont color="black" font="0.7rem">
                    관리자
                </CustomFont>
            </StyledCustomColumn>
        </NaviContainer>
    );
};

export default AdminFooter;
