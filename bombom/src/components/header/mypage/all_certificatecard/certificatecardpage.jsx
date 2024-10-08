import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../container/CustomColumn';
import CustomFont from '../../../container/CustomFont';
import CustomRow from '../../../container/CustomRow';
import { CloseIcon } from '../../../icons/wantbolbom';

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
  min-height: 30rem;
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
  top: 9rem;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const SubDiv = styled.button`
  background-color: ${(props) => props.backgroundColor || "#FDE9BA"};
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border-radius: 1.3rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
  cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #FDE9BA;
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
width: 80%;
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

const CertificateCardPage = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    const handleGoBack = () => {
        setModal(false);
    };

    const handleCardInfo = () => {
        setModal(true);
    };

    const handleConfirm = () => {
        setModal(false);
        setModal2(true);
        setTimeout(() => {
            navigate('/mypage');
        }, 2000);
    };

    const goAdd = () => {
        navigate('/cardcamerapage');
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <MainDiv backgroundColor="white" borderRadius="35px">
                        <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                            <Category width="40%" borderRadius="20px">
                                <CustomRow width='100%' alignItems='flex-end' justifyContent='center' gap='0.5rem'>
                                    <CustomFont color='#5E694D' font='2rem' fontWeight='bold'>마이페이지</CustomFont>
                                    <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>행복카드 인증하기</CustomFont>
                                </CustomRow>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='6rem'>
                            <CustomRow width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <SubDiv width='95%' onClick={handleCardInfo}>
                                    <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                        <SubDiv width='6rem' height='6rem' backgroundColor='#D9BD78'>
                                            사진
                                        </SubDiv>
                                        <CustomColumn width='70%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
                                            <CustomFont color='#6E5F3B' font='1.2rem'>2024.00.00</CustomFont>
                                            <SubDiv backgroundColor='#6CE3B1' width='7rem' height='2rem'>
                                                <CustomFont color='white' font='1rem' fontWeight='bold'>승인 완료</CustomFont>
                                            </SubDiv>
                                        </CustomColumn>
                                    </CustomRow>
                                </SubDiv>

                                <CustomRow width='10%' alignItems='center' justifyContent='center'>
                                    <CloseButton>
                                        <CloseIcon />
                                    </CloseButton>
                                </CustomRow>

                            </CustomRow>

                            <BigButton onClick={goAdd}>
                                <CustomFont color='#6E5F3B' font='1.2rem'>행복카드 인증 후 추가하기</CustomFont>
                            </BigButton>
                        </CustomColumn>

                        {modal && (
                            <ModalBackground>
                                <Modal>
                                    <CustomColumn width='95%' alignItems='center' justifyContent='center' gap='1rem'>
                                        <CustomRow width='100%' alignItems='center' justifyContent='flex-end'>
                                            <CloseButton onClick={handleGoBack}>
                                                <CloseIcon />
                                            </CloseButton>
                                        </CustomRow>

                                        <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                                            <SubDiv width='100%' height='10rem' backgroundColor='#FDE9BA'>
                                                행복카드 사진
                                            </SubDiv>

                                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                <CustomFont color='#6E5F3B' font='1rem'>2024.00.00</CustomFont>
                                            </CustomRow>
                                            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                                <SubDiv width='7rem' height='2rem' backgroundColor='#6CE3B1'>
                                                    <CustomFont color='white' font='1rem' fontWeight='bold'>승인 완료</CustomFont>
                                                </SubDiv>
                                            </CustomRow>
                                        </CustomColumn>
                                        <BigButton onClick={handleConfirm}>
                                            <CustomFont color='#6E5F3B' font='1rem' fontWeight='bold'>카드 삭제하기</CustomFont>
                                        </BigButton>
                                    </CustomColumn>
                                </Modal>
                            </ModalBackground>
                        )}

                        {modal2 && (
                            <ModalBackground>
                                <Modal>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                                        <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>카드 삭제가 완료되었습니다!</CustomFont>
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

export default CertificateCardPage;
