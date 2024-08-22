import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
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
  top: 4rem;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const SubDiv = styled.div`
  position: relative;
  background-color: ${(props) => props.backgroundColor || "#FDE9BA"};
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border-radius: 1.3rem;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #FDE9BA;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    width: 80%;
    height: 80%;
    border: 2px solid #FBDA8B;
    border-radius: 10px;
    box-sizing: border-box;
  }
`;

const WebcamWrapper = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
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
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardCameraPage = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);
    const webcamRef = useRef(null);

    const handleCapture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImageSrc(imageSrc);
        setModal(true);
    };

    const handleRetake = () => {
        setModal(false);
        setImageSrc(null);
    };

    const handleUpload = () => {
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
                                    <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>행복카드 인증하기</CustomFont>
                                </CustomRow>
                            </Category>
                        </CustomRow>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='3rem'>
                            <WebcamWrapper>
                                <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    videoConstraints={{ facingMode: "user" }}
                                    style={{ width: '100%', height: '100%' }}
                                />
                                <Overlay />
                            </WebcamWrapper>

                            <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
                                <CustomFont color='#6E5F3B' font='1.1rem' fontWeight='bold'>사진 촬영 시 유의사항</CustomFont>
                                <CustomFont color='#6E5F3B' font='1rem'>사진이 흔들리지 않게 찍어주세요.</CustomFont>
                                <CustomFont color='#6E5F3B' font='1rem'>격자 안에 카드의 위치와 크기를 맞춰주세요.</CustomFont>
                            </CustomColumn>

                            <BigButton onClick={handleCapture}>
                                <CustomFont color='#6E5F3B' font='1.2rem'>행복카드 촬영하기</CustomFont>
                            </BigButton>
                        </CustomColumn>

                        {modal && (
                            <ModalBackground>
                                <Modal>
                                    <CustomColumn width='95%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                        {imageSrc && (
                                            <img src={imageSrc} alt="Captured" style={{ width: '100%', height: '10rem', borderRadius: '1.3rem' }} />
                                        )}

                                        <CustomRow>
                                            <SubDiv as="button" width='6rem' height='3rem' onClick={handleRetake}>
                                                재촬영
                                            </SubDiv>
                                            <SubDiv as="button" width='6rem' height='3rem' onClick={handleUpload}>
                                                업로드
                                            </SubDiv>
                                        </CustomRow>
                                    </CustomColumn>
                                </Modal>
                            </ModalBackground>
                        )}

                        {modal2 && (
                            <ModalBackground>
                                <Modal>
                                    <CustomColumn width='100%' alignItems='center' justifyContent='center'>
                                        <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>카드 등록이 완료되었습니다!</CustomFont>
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

export default CardCameraPage;
