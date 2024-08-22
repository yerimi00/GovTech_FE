import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../container/CustomColumn';
import CustomFont from '../../../container/CustomFont';
import CustomRow from '../../../container/CustomRow';

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
  justify-content: center;
  align-items: center;
  gap: 4rem;
  position: relative;
  background: linear-gradient(to bottom, #FBDB8F, white);
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 40rem;
  padding: 0.5rem;
  padding-top: 7vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Category = styled.div`
  padding: 10px;
  background-color: #FBDA8B;
  border-radius: 35px;
  position: absolute;
  top: 5vh;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const SubDiv = styled.div`
  background-color: ${(props) => (props.isEditing ? "white" : "#FDE9BA")};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: 2.5rem;
padding-top: 1rem;
padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BigButton = styled.button`
  background-color: #FBDA8B;
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: 3rem;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SmallButton = styled.button`
  background-color: #FBDA8B;
  border: none;
  width: 5rem;
  border-radius: 3rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input.attrs({
    placeholder: '한줄소개를 추가/수정하세요.',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #FBDA8B;
  border-radius: 5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #5E694D;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 390px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 1000;
  align-items: center;
`;

const Modal = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

const EditSentencePage = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [keyword, setKeyword] = useState("소개소개");
    const [editing, setEditing] = useState(false);

    const EditSentence = () => {
        setEditing(!editing);
    }

    const EditKw = () => {
        setModal(true);
    }

    const handleKeywordChange = (index, value) => {
        const newKeywords = [...keywords];
        newKeywords[index] = value;
        setKeywords(newKeywords);
    };

    const handleConfirm = () => {
        setModal(false);
        setModal2(true);
        setTimeout(() => {
            navigate('/mypage');
        }, 2000);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <Category width="40%" borderRadius="20px">
                                <CustomRow width='100%' alignItems='flex-end' justifyContent='center' gap='0.5rem'>
                                    <CustomFont color='#5E694D' font='2rem' fontWeight='bold'>마이페이지</CustomFont>
                                    <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>회원 정보 수정</CustomFont>
                                </CustomRow>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='6rem'>

                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                <CustomFont color='#5E694D' font='1.3rem' fontWeight='bold'>한줄소개 수정하기</CustomFont>
                            </CustomRow>

                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='12rem'>

                                <SubDiv isEditing={editing}>
                                    <CustomRow width='100%' alignItems='center' justifyContent='center'>
                                        {editing ? (
                                            <>
                                                <StyledInput value={keyword} onChange={(e) => handleKeywordChange(e.target.value)} />
                                            </>
                                        ) : (
                                            <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>{keyword}</CustomFont>
                                        )}
                                    </CustomRow>
                                </SubDiv>

                                {editing ? (
                                    <BigButton onClick={EditKw}>
                                        <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>
                                            <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>한줄 소개 수정 완료</CustomFont>
                                        </CustomFont>
                                    </BigButton>) : (
                                    <BigButton onClick={EditSentence}>
                                        <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>
                                            <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>한줄 소개 수정하기</CustomFont>
                                        </CustomFont>
                                    </BigButton>
                                )}

                            </CustomColumn>

                        </CustomColumn>

                        {modal && (
                            <ModalBackground>
                                <Modal>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                                        <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>한줄 소개를 추가/수정하시겠습니까?</CustomFont>
                                        <CustomRow width='100%' justifyContent='space-between'>
                                            <SmallButton onClick={() => setModal(false)}>
                                                <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>취소</CustomFont>
                                            </SmallButton>
                                            <SmallButton onClick={handleConfirm}>
                                                <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>확인</CustomFont>
                                            </SmallButton>
                                        </CustomRow>
                                    </CustomColumn>
                                </Modal>
                            </ModalBackground>
                        )}

                        {modal2 && (
                            <ModalBackground>
                                <Modal>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                                        <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>한줄 소개 추가/수정이 완료되었습니다!</CustomFont>
                                    </CustomColumn>
                                </Modal>
                            </ModalBackground>
                        )}

                    </MainDiv>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default EditSentencePage;
