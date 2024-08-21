import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  background: linear-gradient(to bottom, #FBDA8B, white);
  padding-top: 30vh;
`;

const MainButton = styled.button`
  background-color: #FCECC4;
  border: none;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
  padding: 0.5rem;
`;

const Detail = styled.button`
  background-color: #6E5F3B;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 5rem;
  color: white;
  width: 2rem;
  height: 2rem;

  &::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 0.35rem solid transparent;
    border-right: 0.35rem solid transparent;
    border-top: 0.6rem solid white;
    transform: rotate(270deg);
  }
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 20rem;
  padding: 0.5rem;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
  margin-top: -4vh;
`;

const Category = styled.div`
  padding: 10px 30px;
  background-color: #FBDA8B;
  border-radius: 35px;
  position: absolute;
  top: 22vh;
  left: 3rem;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const Edit = styled.button`
  background-color: #FCECC4;
  border: none;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  color: black;
  padding: 0.5rem;
`;

const ToggleButton = styled.button`
  background-color: #6E5F3B;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: ${(props) => (props.visible ? 'translateY(0)' : 'translateY(-10px)')};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

const PlusButton = styled(ToggleButton)`
  background-color: #6E5F3B;
  margin-top: 1rem;
`;

const MinusButton = styled(ToggleButton)`
width: 2rem;
height: 1.5rem;
display: flex;
align-items: center;
justify-content: center;
background-color: #D9534F;
`;

const HamburgerButton = styled(ToggleButton)`
background-color: #5A5A5A;
color: white;
width: 2rem;
height: 1.5rem;
display: flex;
align-items: center;
justify-content: center;
`;

const DolbomEduVideoPage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    const goDetailDolbomOk = () => {
        navigate('/eduvideodetailpage');
    };

    const toggleEditing = () => {
        setIsEditing((prev) => !prev);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <Category width="40%" borderRadius="20px">
                                <CustomFont color='6E5F3B' font='2rem' fontWeight='bold'>돌보미 관리</CustomFont>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>

                            <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                                <CustomFont color='#6E5F3B' font='1.3rem' fontWeight='bold'>교육 동영상 관리 화면</CustomFont>
                                <Edit onClick={toggleEditing}>
                                    <CustomFont color='#6E5F3B' font='0.8rem'>수정하기</CustomFont>
                                </Edit>
                            </CustomRow>

                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                                    {isEditing && (
                                        <MinusButton visible={isEditing}>-</MinusButton>
                                    )}
                                    <MainButton>
                                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                            <CustomRow width='90%' alignItems='center' justifyContent='space-between'>

                                                <CustomFont color='black' font='1rem'>01.Intro</CustomFont>
                                                <Detail onClick={goDetailDolbomOk} />

                                            </CustomRow>
                                            <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                                <CustomFont color='black' font='0.8rem'>
                                                    15:43
                                                </CustomFont>
                                            </CustomRow>
                                        </CustomColumn>
                                    </MainButton>
                                    {isEditing && (
                                        <HamburgerButton visible={isEditing}>
                                            =
                                        </HamburgerButton>
                                    )}
                                </CustomRow>

                                <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                                    {isEditing && (
                                        <MinusButton visible={isEditing}>-</MinusButton>
                                    )}
                                    <MainButton>
                                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                            <CustomRow width='90%' alignItems='center' justifyContent='space-between'>

                                                <CustomFont color='black' font='1rem'>01.Intro</CustomFont>
                                                <Detail onClick={goDetailDolbomOk} />

                                            </CustomRow>
                                            <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                                <CustomFont color='black' font='0.8rem'>
                                                    15:43
                                                </CustomFont>
                                            </CustomRow>
                                        </CustomColumn>
                                    </MainButton>
                                    {isEditing && (
                                        <HamburgerButton visible={isEditing}>
                                            =
                                        </HamburgerButton>
                                    )}
                                </CustomRow>

                                <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.2rem'>
                                    {isEditing && (
                                        <MinusButton visible={isEditing}>-</MinusButton>
                                    )}
                                    <MainButton>
                                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                            <CustomRow width='90%' alignItems='center' justifyContent='space-between'>

                                                <CustomFont color='black' font='1rem'>01.Intro</CustomFont>
                                                <Detail onClick={goDetailDolbomOk} />

                                            </CustomRow>
                                            <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                                <CustomFont color='black' font='0.8rem'>
                                                    15:43
                                                </CustomFont>
                                            </CustomRow>
                                        </CustomColumn>
                                    </MainButton>
                                    {isEditing && (
                                        <HamburgerButton visible={isEditing}>
                                            =
                                        </HamburgerButton>
                                    )}
                                </CustomRow>
                            </CustomColumn>
                        </CustomColumn>
                        {isEditing && (
                            <PlusButton visible={isEditing}>
                                +
                            </PlusButton>
                        )}
                    </MainDiv>

                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default DolbomEduVideoPage;
