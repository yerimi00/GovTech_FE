import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

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
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  color: black;
  padding: 1rem;
  cursor: pointer;
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 25rem;
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
  font-size: 27px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const StarRow = styled.div`
  display: flex;
  gap: 0.2rem;
`;

const StarIcon = styled(FaStar)`
  color: ${(props) => (props.filled ? '#6E5F3B' : 'transparent')};
  stroke: #6E5F3B;
  stroke-width: 1.5;
`;

const ReviewText = styled.div`
  color: #6E5F3B;
  font-size: 0.9rem;
  line-height: 1.2rem;
  max-height: 2.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 두 줄까지만 보이도록 */
  -webkit-box-orient: vertical;
  text-align: left;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 35px;
  width: 300px;
  gap: 1rem;
  box-sizing: border-box;
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: #6E5F3B;
`;

const MainCheckReviewPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const stars = [true, true, true, true, true];

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <Category width="40%" borderRadius="20px">
                                <CustomRow width='100%' alignItems='flex-end' justifyContent='center' gap='0.5rem'>
                                    <CustomFont color='#6E5F3B' font='2rem' fontWeight='bold'>마이페이지</CustomFont>
                                    <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>나의 리뷰 확인하기</CustomFont>
                                </CustomRow>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>
                            <MainButton onClick={handleButtonClick}>
                                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
                                    <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                        <CustomFont color='#6E5F3B' font='1.2rem' fontWeight='bold'>제목 돌봄 원해요01</CustomFont>
                                    </CustomRow>
                                    <CustomRow width='90%' alignItems='center' justifyContent='flex-start'>
                                        <CustomFont color='#6E5F3B' font='1rem'>2024.08.25 12:40</CustomFont>
                                    </CustomRow>
                                    <StarRow>
                                        {stars.map((filled, index) => (
                                            <StarIcon key={index} filled={filled} />
                                        ))}
                                    </StarRow>
                                    <ReviewText>
                                        그는 굉장한 실력자.. 제시카 쌤보다 더 뛰어나신 분입니다.
                                    </ReviewText>
                                </CustomColumn>
                            </MainButton>
                        </CustomColumn>
                    </MainDiv>
                </CustomColumn>
            </PageContainer>

            {isModalOpen && (
                <>
                    <Overlay onClick={handleCloseModal} />
                    <Modal>
                        <CloseButton onClick={handleCloseModal}>×</CloseButton>
                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
                            <CustomFont color='#6E5F3B' font='1.2rem' fontWeight='bold'>제목 돌봄 원해요01</CustomFont>
                            <CustomFont color='#6E5F3B' font='1rem'>2024.08.25 12:40</CustomFont>
                            <StarRow>
                                {stars.map((filled, index) => (
                                    <StarIcon key={index} filled={filled} />
                                ))}
                            </StarRow>
                            <ReviewText>
                                그는 굉장한 실력자.. 제시카 쌤보다 더 뛰어나신 분입니다.
                            </ReviewText>
                        </CustomColumn>
                    </Modal>
                </>
            )}
        </ContainerCenter>
    );
};

export default MainCheckReviewPage;
