import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
  background: linear-gradient(to bottom, #D9F0B4 0%, #D9F0B4 10%, white 90%, white 100%);
`;

const CircleButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #D6EFAE;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 1rem;
`;

const Button = styled.button`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  background-color: ${(props) => (props.disabled ? '#D6EFAE' : '#5E694D')};
  color: ${(props) => (props.disabled ? '#5E694D' : 'white')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.padding || '0.5rem'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
  border-radius:  ${props => props.borderRadius || '5rem'};
`;

const MainDiv = styled.div`
  background-color: white;
  background-image: ${(props) => (props.imgSrc ? `url(${props.imgSrc})` : 'none')};
  background-size: cover;
  background-position: center;
  border: 2.5px solid #D6EFAE;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  border-radius: 2rem;
  min-height: 15rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
  box-shadow: 0px 4px 6px #E5DDC9;
  gap: 2rem;
  position: relative;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  background-color: #FF6B6B;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
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

const CertificateDolbomSignupPage = () => {
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalText, setModalText] = useState('');

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleImageDelete = () => {
        setSelectedImage(null);
    };

    const handleFormSubmit = () => {
        if (selectedImage) {
            setIsModalVisible(true);
            setModalText('이미지 업로드 중...');
            setTimeout(() => {
                setModalText('이미지가 업로드되었습니다! 24시간 내 관리자 확인 후 승인될 예정입니다.');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }, 3000);
        }
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center'>
                        <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
                            <CustomFont color='#5E694D' font='1.5rem'>
                                국가자격 돌보미
                            </CustomFont>
                            <CustomFont color='#5E694D' font='1.5rem'>회원가입 페이지입니다.</CustomFont>
                        </CustomColumn>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <MainDiv imgSrc={selectedImage}>
                            {!selectedImage && (
                                <>
                                    <CustomFont color='#5E694D' font='0.8rem'>
                                        파일 업로드 하기
                                    </CustomFont>

                                    <CircleButton width='3rem' height='3rem'>
                                        <label htmlFor="file-upload" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                            <CustomFont color='white' fontWeight='bold' font='2rem'>+</CustomFont>
                                        </label>
                                    </CircleButton>

                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleImageUpload}
                                    />
                                </>
                            )}
                            {selectedImage && (
                                <DeleteButton onClick={handleImageDelete}>-</DeleteButton>
                            )}
                        </MainDiv>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
                        <CustomFont color='#5E694D' font='0.8rem'>
                            요양보호사 자격증 스캔 후 업로드해주세요.
                        </CustomFont>
                        <CustomFont color='#5E694D' font='0.8rem'>
                            자격증을 제출하지 않으면 회원가입이 불가합니다.
                        </CustomFont>
                        <CustomFont color='#5E694D' font='0.8rem'>
                            자격증이 없는 경우 돌보미 아르바이트로 지원해주세요.
                        </CustomFont>
                    </CustomColumn>

                    <Button
                        width='100%'
                        padding='1rem'
                        disabled={!selectedImage}
                        onClick={handleFormSubmit}
                    >
                        <CustomFont
                            color={selectedImage ? 'white' : '#5E694D'}
                            fontWeight='bold'
                            font='1rem'
                        >
                            국가자격 돌보미 회원가입 신청하기
                        </CustomFont>
                    </Button>
                </CustomColumn>
            </PageContainer>

            {isModalVisible && (
                <ModalBackground>
                    <Modal>
                        <CustomFont color='black' fontWeight='bold' font='1.2rem'>{modalText}</CustomFont>
                    </Modal>
                </ModalBackground>
            )}
        </ContainerCenter>
    );
};

export default CertificateDolbomSignupPage;
