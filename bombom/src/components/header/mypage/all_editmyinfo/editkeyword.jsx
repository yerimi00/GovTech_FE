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
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const BigButton = styled.button`
  background-color: #FBDA8B;
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #FDE9BA;
}
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
  cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #FDE9BA;
}
`;

const EditButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "#FBDA8B"};
  border: none;
  width: ${(props) => props.width || "1.5rem"};
  height: ${(props) => props.height || "1.5rem"};
  border-radius: 3rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input.attrs({
    placeholder: '여기에 키워드',
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

const EditKeywordPage = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [keywords, setKeywords] = useState(["키워드 1", "키워드 2", "키워드 3"]);
    const [editing, setEditing] = useState(false);

    const AddKw = () => {
        setKeywords([...keywords, ""]);
    }

    const EditKw = () => {
        setEditing(!editing);
    }

    const handleKeywordChange = (index, value) => {
        const newKeywords = [...keywords];
        newKeywords[index] = value;
        setKeywords(newKeywords);
    };

    const handleSave = () => {
        setModal(true);
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

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='4rem'>

                            <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                <CustomFont color='#5E694D' font='1.3rem' fontWeight='bold'>키워드 수정</CustomFont>
                                <SmallButton onClick={EditKw}>
                                    <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>수정하기</CustomFont>
                                </SmallButton>
                            </CustomRow>

                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                                {keywords.map((keyword, index) => (
                                    <SubDiv key={index} isEditing={editing}>
                                        <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                            {editing ? (
                                                <>
                                                    <EditButton backgroundColor='#B1A68C' onClick={() => {
                                                        const newKeywords = keywords.filter((_, i) => i !== index);
                                                        setKeywords(newKeywords);
                                                    }}>
                                                        <CustomFont color='white' font='1rem' fontWeight='bold'>-</CustomFont>
                                                    </EditButton>
                                                    <StyledInput value={keyword} onChange={(e) => handleKeywordChange(index, e.target.value)} />
                                                    <EditButton backgroundColor='white'>
                                                        <CustomFont color='#B1A68C' font='1rem' fontWeight='bold'>=</CustomFont>
                                                    </EditButton>
                                                </>
                                            ) : (
                                                <CustomFont color='#5E694D' font='1.3rem' fontWeight='bold'>{keyword}</CustomFont>
                                            )}
                                        </CustomRow>
                                    </SubDiv>
                                ))}

                                {editing && (
                                    <EditButton backgroundColor='#B1A68C' onClick={AddKw} width='2.5rem' height='2.5rem'>
                                        <CustomFont color='white' font='2rem' fontWeight='bold'>+</CustomFont>
                                    </EditButton>
                                )}

                                {editing && (
                                    <BigButton borderRadius='3rem' onClick={handleSave}>
                                        <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>수정 완료</CustomFont>
                                    </BigButton>
                                )}
                            </CustomColumn>

                        </CustomColumn>

                        {modal && (
                            <ModalBackground>
                                <Modal>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                                        <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>키워드를 추가/수정하시겠습니까?</CustomFont>
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
                                        <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>키워드 수정이 완료되었습니다!</CustomFont>
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

export default EditKeywordPage;
