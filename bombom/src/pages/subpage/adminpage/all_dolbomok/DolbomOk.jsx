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

const MenuButton = styled.button`
  background-color: ${({ isActive }) => (isActive ? '#D9BD78' : '#FBDA8B')};
  border: none;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #D9BD78;
  }
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

const MenuContainer = styled.div`
  background-color: #FBDA8B;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

const DolbomOkPage = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('인증 대기 중');

    const goDetailDolbomOk = () => {
        navigate('/detaildolbomokpage');
    };

    const handleMenuClick = (label) => {
        setActiveButton(label);
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
                            <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                <CustomFont color='#6E5F3B' font='1.3rem' fontWeight='bold'>돌보미 인증 수락</CustomFont>
                            </CustomRow>
                            <MenuContainer>
                                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                    <MenuButton
                                        isActive={activeButton === '인증 대기 중'}
                                        onClick={() => handleMenuClick('인증 대기 중')}
                                    >
                                        <CustomFont color='#6E5F3B' font='0.8rem'>인증 대기 중</CustomFont>
                                    </MenuButton>
                                    <MenuButton
                                        isActive={activeButton === '인증 승인'}
                                        onClick={() => handleMenuClick('인증 승인')}
                                    >
                                        <CustomFont color='#6E5F3B' font='0.8rem'>인증 승인</CustomFont>
                                    </MenuButton>
                                    <MenuButton
                                        isActive={activeButton === '인증 미승인'}
                                        onClick={() => handleMenuClick('인증 미승인')}
                                    >
                                        <CustomFont color='#6E5F3B' font='0.8rem'>인증 미승인</CustomFont>
                                    </MenuButton>
                                </CustomRow>
                            </MenuContainer>

                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                <MainButton>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                        <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                                            <CustomFont color='black' font='1rem'>000님</CustomFont>
                                            <Detail onClick={goDetailDolbomOk} />
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                            <CustomFont color='black' font='0.8rem'>
                                                00:00:00 인증 신청
                                            </CustomFont>
                                        </CustomRow>
                                    </CustomColumn>
                                </MainButton>

                                <MainButton>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                        <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                                            <CustomFont color='black' font='1rem'>000님</CustomFont>
                                            <Detail onClick={goDetailDolbomOk} />
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                            <CustomFont color='black' font='0.8rem'>
                                                00:00:00 인증 신청
                                            </CustomFont>
                                        </CustomRow>
                                    </CustomColumn>
                                </MainButton>

                                <MainButton>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                        <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                                            <CustomFont color='black' font='1rem'>000님</CustomFont>
                                            <Detail onClick={goDetailDolbomOk} />
                                        </CustomRow>
                                        <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                            <CustomFont color='black' font='0.8rem'>
                                                00:00:00 인증 신청
                                            </CustomFont>
                                        </CustomRow>
                                    </CustomColumn>
                                </MainButton>
                            </CustomColumn>
                        </CustomColumn>
                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default DolbomOkPage;
