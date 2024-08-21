import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import { BsFillTrashFill } from 'react-icons/bs';

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

const Detail = styled.button`
  background-color: #FBDA8B;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 5rem;
  color: white;
  width: 8rem;
  height: 3rem;
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

const SubDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "30vh"};
  border-radius: 3rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Category = styled.div`
  padding: 10px 30px;
  background-color: #FBDA8B;
  border-radius: 35px;
  position: absolute;
  top: 22vh;
  left: 2.5rem;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const StyledInput = styled.input.attrs((props) => ({
    placeholder: props.placeholder || '내용을 입력하세요',
}))`
  width: 100%;
  height: ${(props) => props.height || "3rem"};
  border: 2px solid #FBDA8B;
  border-radius: 2rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #6E5F3B;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContent = styled.div`
width: 80%;
gap: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
`;

const DetailMyNoticePage = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleTrashClick = () => {
        setModalMessage('이 민원 글을 삭제하시겠습니까?');
        setIsModalOpen(true);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setModalMessage('민원을 수정하시겠습니까?');
        setIsModalOpen(true);
    };

    const handleModalYesClick = () => {
        if (modalMessage.includes('삭제')) {
            setModalMessage('삭제되었습니다!');
        } else if (modalMessage.includes('수정')) {
            setModalMessage('민원이 수정되었습니다!');
        }
        setTimeout(() => {
            setIsModalOpen(false);
            navigate('/mainmynoticepage');
        }, 2000);
    };

    const handleModalNoClick = () => {
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
                                    <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>내 민원 확인</CustomFont>
                                </CustomRow>
                            </Category>
                        </CustomRow>

                        {isModalOpen && (
                            <ModalContainer>
                                <ModalContent>
                                    <CustomFont font="1rem" color='6E5F3B'>{modalMessage}</CustomFont>
                                    {!(modalMessage.includes('삭제되었습니다!') || modalMessage.includes('수정되었습니다!')) && (
                                        <CustomRow justifyContent='center' gap='1rem' marginTop='1rem'>
                                            <Detail onClick={handleModalYesClick}>
                                                <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>예</CustomFont>
                                            </Detail>
                                            <Detail onClick={handleModalNoClick}>
                                                <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>아니오</CustomFont>
                                            </Detail>
                                        </CustomRow>
                                    )}
                                </ModalContent>
                            </ModalContainer>
                        )}

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>
                            {!isEditing ? (
                                <>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                        <SubDiv backgroundColor='#FDECC5'>
                                            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='5rem'>
                                                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
                                                    <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                                        <CustomFont color='#6E5F3B' font='1.3rem' fontWeight='bold'>민원제목</CustomFont>
                                                        <BsFillTrashFill onClick={handleTrashClick} style={{ color: '#6E5F3B', fontSize: '1.5rem', cursor: 'pointer' }} />
                                                    </CustomRow>
                                                    <CustomFont color='#6E5F3B' font='1rem'>2024.00.00</CustomFont>
                                                    <CustomFont color='#6E5F3B' font='1rem'>민원유형</CustomFont>
                                                </CustomColumn>
                                                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                    <CustomFont color='#6E5F3B' font='1rem'>민원내용</CustomFont>
                                                </CustomRow>
                                            </CustomColumn>
                                        </SubDiv>

                                        <CustomRow width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                            <Detail onClick={handleBackClick}>
                                                <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>이전</CustomFont>
                                            </Detail>
                                            <Detail onClick={handleEditClick}>
                                                <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>수정하기</CustomFont>
                                            </Detail>
                                        </CustomRow>
                                    </CustomColumn>
                                </>
                            ) : (
                                <>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                        <StyledInput placeholder='제목을 입력하세요' />
                                        <StyledInput placeholder='유형을 선택하세요' />
                                        <StyledInput height='20vh' placeholder='내용을 입력하세요' />
                                        <Detail onClick={handleSaveClick}>
                                            <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>수정 저장하기</CustomFont>
                                        </Detail>
                                    </CustomColumn>
                                </>
                            )}
                        </CustomColumn>
                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default DetailMyNoticePage;
