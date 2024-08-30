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
transition: background-color 0.3s ease;
&:hover {
  background-color: #FDE9BA;
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
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FDE9BA;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const SubDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "45vh"};
  border-radius: 3rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WhiteDiv = styled.div`
background-color: white;
border: none;
border-radius: 1rem;
dislay: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
padding: 1rem;
width: 100%;
`

const Category = styled.div`
  padding: 10px 30px;
  background-color: #FBDA8B;
  border-radius: 35px;
  position: absolute;
  top: 22vh;
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

const StyledInput2 = styled.input.attrs((props) => ({
    placeholder: props.placeholder || '내용을 입력하세요',
}))`
  width: 100%;
  height: ${(props) => props.height || "2.5rem"};
  border: none;
  border-bottom: 2px solid #FBDA8B;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #6E5F3B;
  }
`;

const StyledInput3 = styled.textarea.attrs((props) => ({
    placeholder: props.placeholder || '내용을 입력하세요',
}))`
    width: 100%;
    height: ${(props) => props.height || "3rem"};
    border: none;
    background-color: #FDF4DC;
    border-radius: 2rem;
    padding: 0.5rem;
    box-sizing: border-box;
    resize: none;
    display: flex;
  
    &::placeholder {
      color: #6E5F3B;
    }

    &:focus {
        outline: none;
        border: none;
      }
  `;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
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

const Divider = styled.div`
background-color: #D9BD78;
border: none;
width: 3px;
height: 5.5rem;
`;

const DetailEditWantPage = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleTrashClick = () => {
        setModalMessage('이 돌봄글을 삭제하시겠습니까?');
        setIsModalOpen(true);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setModalMessage('돌봄글을 수정하시겠습니까?');
        setIsModalOpen(true);
    };

    const handleModalYesClick = () => {
        if (modalMessage.includes('삭제')) {
            setModalMessage('삭제되었습니다!');
        } else if (modalMessage.includes('수정')) {
            setModalMessage('돌봄글이 수정되었습니다!');
        }
        setTimeout(() => {
            setIsModalOpen(false);
            navigate('/maineditwantpage');
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
                                    <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>돌봄글 수정하기</CustomFont>
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
                                            <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='1rem'>

                                                <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                                    <CustomFont color='#6E5F3B' font='1.3rem' fontWeight='bold'>돌봄원해요01</CustomFont>
                                                    <BsFillTrashFill onClick={handleTrashClick} style={{ color: '#6E5F3B', fontSize: '1.5rem', cursor: 'pointer' }} />
                                                </CustomRow>
                                                <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                    <CustomFont color='#6E5F3B' font='1rem'>2024.08.25</CustomFont>
                                                </CustomRow>

                                                <CustomColumn width='100%' alignItems='flex-start' justifyContent='center'>
                                                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='0.3rem'>
                                                        <CustomFont color='#6E5F3B' font='1rem' fontWeigjt='bold'>위치</CustomFont>
                                                        <CustomFont color='#6E5F3B' font='1rem'>2024.00.00</CustomFont>
                                                    </CustomRow>
                                                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='0.3rem'>
                                                        <CustomFont color='#6E5F3B' font='1rem' fontWeigjt='bold'>횟수</CustomFont>
                                                        <CustomFont color='#6E5F3B' font='1rem'>1회</CustomFont>
                                                    </CustomRow>
                                                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start' gap='0.3rem'>
                                                        <CustomFont color='#6E5F3B' font='1rem' fontWeigjt='bold'>시급</CustomFont>
                                                        <CustomFont color='#6E5F3B' font='1rem'>15,000원</CustomFont>
                                                    </CustomRow>
                                                </CustomColumn>

                                                <WhiteDiv>
                                                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                        <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>돌봄자 정보</CustomFont>
                                                    </CustomRow>

                                                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.4rem'>
                                                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                            <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>나이</CustomFont>
                                                            <CustomFont color='#6E5F3B' font='1rem'>23살</CustomFont>
                                                        </CustomRow>

                                                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                            <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>특징</CustomFont>
                                                            <CustomFont color='#6E5F3B' font='1rem'>피곤함</CustomFont>
                                                        </CustomRow>

                                                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                            <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>병력</CustomFont>
                                                            <CustomFont color='#6E5F3B' font='1rem'>라운드숄더</CustomFont>
                                                        </CustomRow>

                                                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                            <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>기타</CustomFont>
                                                            <CustomFont color='#6E5F3B' font='1rem'>배고파요</CustomFont>
                                                        </CustomRow>
                                                    </CustomColumn>
                                                </WhiteDiv>
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
                                    <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='3rem'>

                                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                            <StyledInput placeholder='제목 입력하기' />

                                            <CustomColumn width='100%' alignItems='center' justifyContent='space-between' gap='0.7rem'>
                                                <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='0.2rem'>
                                                    <CustomFont color='#3E3537' font='0.8rem' fontWeight='bold'>위치</CustomFont>
                                                    <CustomRow width='85%' alignItems='center' justifyContent='center'>
                                                        <StyledInput2 placeholder='위치를 입력하세요' />
                                                    </CustomRow>
                                                </CustomRow>
                                                <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='0.2rem'>
                                                    <CustomFont color='#3E3537' font='0.8rem' fontWeight='bold'>시급</CustomFont>
                                                    <CustomRow width='85%' alignItems='center' justifyContent='center'>
                                                        <StyledInput2 placeholder='시급을 입력하세요' />
                                                    </CustomRow>
                                                </CustomRow>
                                            </CustomColumn>
                                        </CustomColumn>

                                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                <CustomFont color='#3E3537' font='1.2rem' fontWeight='bold'>피돌봄자 간략 정보</CustomFont>
                                            </CustomRow>

                                            <CustomRow width='100%' alignItems='center' justifyContent='space-between'>

                                                <Divider />

                                                <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                                    <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='0.2rem'>
                                                        <CustomFont color='#3E3537' font='0.8rem' fontWeight='bold'>나이</CustomFont>
                                                        <CustomRow width='85%' alignItems='center' justifyContent='center'>
                                                            <StyledInput2 placeholder='피돌봄자의 나이를 입력하세요' />
                                                        </CustomRow>
                                                    </CustomRow>

                                                    <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='0.2rem'>
                                                        <CustomFont color='#3E3537' font='0.8rem' fontWeight='bold'>키워드</CustomFont>
                                                        <CustomRow width='85%' alignItems='center' justifyContent='center'>
                                                            <StyledInput2 placeholder='대표 키워드를 적어주세요' />
                                                        </CustomRow>
                                                    </CustomRow>
                                                </CustomColumn>
                                            </CustomRow>
                                        </CustomColumn>

                                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                <CustomFont color='#3E3537' font='1.2rem' fontWeight='bold'>피돌봄자 정보/구인글</CustomFont>
                                            </CustomRow>
                                            <StyledInput3 height='20vh' placeholder='피돌봄자의 정보나 구인 글을 작성해주세요' />
                                            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                                <Detail onClick={handleSaveClick}>
                                                    <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>수정 저장하기</CustomFont>
                                                </Detail>
                                                <Detail onClick={() => setIsEditing(false)}>
                                                    <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>수정 취소</CustomFont>
                                                </Detail>
                                            </CustomRow>
                                        </CustomColumn>
                                        <CustomColumn height='10vh'></CustomColumn>
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

export default DetailEditWantPage;
