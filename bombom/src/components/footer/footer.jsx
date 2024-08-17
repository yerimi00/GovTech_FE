import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../container/CustomColumn';
import CustomRow from '../container/CustomRow';
import CustomFont from '../container/CustomFont';
import StyledImg from '../container/StyledImg';

const NaviContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  width: 100%;
  height: 7vh;
  background-color: #FBDA8B;
  bottom: 0;
  left: 0;
  pointer-events: auto;
  position: fixed;
`;

const Footer = () => {
    const navigate = useNavigate();

    return (
        <NaviContainer>
            <CustomColumn gap='0.2rem' alignItems='center' justifyContent='center'>
                <StyledImg src={'ex_nav_icon.png'} width='1rem' height='1rem' />
                <CustomFont color='black' font='0.7rem'>홈</CustomFont>
            </CustomColumn>

            <CustomColumn gap='0.2rem' alignItems='center' justifyContent='center'>
                <StyledImg src={'ex_nav_icon.png'} width='1rem' height='1rem' />
                <CustomFont color='black' font='0.7rem'>돌보미 찾기</CustomFont>
            </CustomColumn>

            <CustomColumn gap='0.2rem' alignItems='center' justifyContent='center'>
                <StyledImg src={'ex_nav_icon.png'} width='1rem' height='1rem' />
                <CustomFont color='black' font='0.7rem'>채팅방</CustomFont>
            </CustomColumn>

            <CustomColumn gap='0.2rem' alignItems='center' justifyContent='center'>
                <StyledImg src={'ex_nav_icon.png'} width='1rem' height='1rem' />
                <CustomFont color='black' font='0.7rem'>더보기</CustomFont>
            </CustomColumn>
        </NaviContainer>
    );
};

export default Footer;