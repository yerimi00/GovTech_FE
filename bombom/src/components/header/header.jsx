import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../container/CustomRow';
import CustomColumn from '../container/CustomColumn';
import CustomFont from '../container/CustomFont';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const Button = styled.button`
border: 1px solid #626262;
border-radius: 0.5rem;
background-color: transparent;

width: 4rem;
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;
cursor: pointer;
`;

export default function Header() {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <CustomRow width='100%' justifyContent='space-between'>
                <CustomRow width='100%' justifyContent='flex-end' gap='1rem'>
                    <Button>
                        <CustomFont color='#626262' font='1rem'>LOGIN</CustomFont>
                    </Button>
                </CustomRow>
            </CustomRow>
        </HeaderContainer>
    );
}