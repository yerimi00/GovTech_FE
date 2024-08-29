import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';

import CustomColumn from '../../../../components/container/CustomColumn';
import CustomRow from '../../../../components/container/CustomRow';
import CustomFont from '../../../../components/container/CustomFont';
import CustomButtonSubmit from '../../../container/CustomButtonSubmit';

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
  align-items: center;
  justify-content: center;
  width: 100%;
  color: black;
  padding: 1rem;
  cursor: pointer;
  position: relative;
`;

const Detail = styled.button`
  background-color: ${(props) => props.backgroundColor || "#EC7060"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 5rem;
  color: white;
  width: 5rem;
  height: 2rem;
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 35rem;
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
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
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

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 35px;
  width: 300px;

  gap: 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MinusButton = styled.button`
  background: #6E5F3B;
  border-radius: 50%;
  border: none;

  width: 1rem;
  height: 1rem;

display: flex;
align-items: center;
justify-content: center;
  cursor: pointer;
`;

const ModalHeader = styled.div`
background-color: #FDE9BA;
dispaly: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 1rem;

width: 100%;
padding: 1rem;
`;

const MainEditWantPage = () => {
    const navigate = useNavigate();
    const [isDeleteMode, setIsDeleteMode] = useState(false);
    const [items, setItems] = useState([
        { id: 1, title: '돌봄원해요01', status: '모집중', date: '2024.08.27', fee: '15,000원', location: '경기도 용인시 처인구 모현읍', age: '7세/활발함, 힘이넘침' },
        { id: 2, title: '돌봄원해요01', status: '모집완료', date: '2024.08.25', fee: '15,000원', location: '경기도 용인시 처인구 모현읍', age: '5세/활발함, 힘이넘침' }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const goDetailEditWant = () => {
        navigate('/detaileditwantpage');
    };

    const handleDeleteMode = () => {
        setIsDeleteMode(!isDeleteMode);
    };

    const handleDeleteClick = (item) => {
        setItemToDelete(item);
        setShowModal(true);
    };

    const confirmDelete = () => {
        setItems(items.filter(item => item.id !== itemToDelete.id));
        setShowModal(false);
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

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                            <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                <BsFillTrashFill
                                    style={{ color: '#6E5F3B', fontSize: '1.5rem', cursor: 'pointer' }}
                                    onClick={handleDeleteMode}
                                />
                            </CustomRow>

                            {items.length === 0 ? (
                                <CustomFont font='1.2rem' color='#D9D9D9' fontWeight='bold'>아직 작성한 돌봄글이 없어요.</CustomFont>
                            ) : (
                                items.map(item => (
                                    <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                        {isDeleteMode && <MinusButton onClick={() => handleDeleteClick(item)}>
                                            <CustomFont color='white' font='0.8rem' fontWeight='bold'>
                                                -</CustomFont>
                                        </MinusButton>}
                                        <MainButton key={item.id} onClick={goDetailEditWant}>
                                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                                <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                                                    <CustomFont color='#6E5F3B' font='1.5rem' fontWeight='bold'>{item.title}</CustomFont>
                                                    <Detail backgroundColor={item.status === '모집중' ? '#6CE3B1' : '#EC7060'}>
                                                        <CustomFont color='white' font='0.8rem' fontWeight='bold'>
                                                            {item.status}
                                                        </CustomFont>
                                                    </Detail>
                                                </CustomRow>
                                                <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                                    <CustomFont color='#6E5F3B' font='1rem'>
                                                        {item.location}
                                                    </CustomFont>
                                                </CustomRow>
                                                <CustomRow width='90%' alignItems='center' justifyContent='flex-end'>
                                                    <CustomFont color='#6E5F3B' font='0.8rem'>
                                                        {item.age}
                                                    </CustomFont>
                                                </CustomRow>
                                                <CustomRow width='90%' alignItems='center' justifyContent='space-between'>
                                                    <CustomFont color='#6E5F3B' font='0.8rem'>
                                                        {item.date}
                                                    </CustomFont>
                                                    <CustomFont color='#6E5F3B' font='0.8rem' fontWeight='bold'>
                                                        {item.fee}
                                                    </CustomFont>
                                                </CustomRow>
                                            </CustomColumn>
                                        </MainButton>
                                    </CustomRow>
                                ))
                            )}
                        </CustomColumn>
                    </MainDiv>
                </CustomColumn>

                {showModal && (
                    <Overlay>
                        <ModalContainer>
                            <ModalHeader>
                                <CustomFont font='1.2rem' color='#6E5F3B'>돌봄원해요01</CustomFont>
                            </ModalHeader>

                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                <CustomFont font='1rem' color='#6E5F3B'>해당 글을 삭제하시겠습니까?</CustomFont>
                                <CustomRow width='100%' justifyContent='space-around'>
                                    <CustomButtonSubmit onClick={confirmDelete}>예</CustomButtonSubmit>
                                    <CustomButtonSubmit onClick={() => setShowModal(false)}>아니오</CustomButtonSubmit>
                                </CustomRow>
                            </CustomColumn>
                        </ModalContainer>
                    </Overlay>
                )}
            </PageContainer>
        </ContainerCenter>
    );
};

export default MainEditWantPage;
