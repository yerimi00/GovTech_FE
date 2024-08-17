import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../../container/CustomRow';
import CustomColumn from '../../../container/CustomColumn';
import CustomFont from '../../../container/CustomFont';
import StyledImg from '../../../container/StyledImg';

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
  gap: 4rem;
  position: relative;
  background-color: white;
`;

const Button = styled.button`
  width: ${props => props.width || 'auto'};
  background-color: ${(props) => (props.disabled ? '#D9D9D9' : '#AFAFAF')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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

const VideoDiv = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #AFAFAF;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: auto;
`;

const CertificateDolbomSignupPage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const webcamRef = React.useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setCapturedImage(imageSrc);
    }, [webcamRef]);

    const handleRetake = () => {
        setCapturedImage(null);
    };

    const handleUpload = () => {
        setUploading(true);
        setTimeout(() => {
            setUploading(false);
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/');
            }, 2000);
        }, 2000);
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        <CustomFont color='black' fontWeight='bold' font='1rem'>국가자격 돌보미 자격증 촬영 및 업로드 화면</CustomFont>
                    </CustomRow>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        {!capturedImage ? (
                            <VideoDiv>
                                <Webcam
                                    audio={false}
                                    ref={webcamRef}
                                    screenshotFormat="image/jpeg"
                                    width="100%"
                                    height="100%"
                                />
                            </VideoDiv>
                        ) : (
                            <ImagePreview src={capturedImage} alt="Captured" />
                        )}

                        {!capturedImage ? (
                            <Button onClick={capture} width='100%'>
                                <CustomFont color='white' fontWeight='bold' font='1rem'>촬영하기</CustomFont>
                            </Button>
                        ) : (
                            <CustomRow width='100%' justifyContent='space-between'>
                                <Button onClick={handleRetake} width='48%'>
                                    <CustomFont color='white' fontWeight='bold' font='1rem'>재촬영</CustomFont>
                                </Button>
                                <Button onClick={handleUpload} width='48%' disabled={uploading}>
                                    <CustomFont color='white' fontWeight='bold' font='1rem'>업로드하기</CustomFont>
                                </Button>
                            </CustomRow>
                        )}
                    </CustomColumn>

                    {uploading && (
                        <ModalBackground>
                            <Modal>
                                <CustomFont color='black' fontWeight='bold' font='1.2rem'>이미지를 업로드 중....</CustomFont>
                            </Modal>
                        </ModalBackground>
                    )}

                    {showModal && (
                        <ModalBackground>
                            <Modal>
                                <CustomFont color='black' font='1rem'>
                                    자격증 이미지가 업로드되었습니다! 관리자가 1시간 내 검토할 예정입니다.
                                </CustomFont>
                            </Modal>
                        </ModalBackground>
                    )}
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default CertificateDolbomSignupPage;
