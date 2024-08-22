import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  background: linear-gradient(to bottom, #D9F0B4 0%, #D9F0B4 10%, white 90%, white 100%);
`;

const Button = styled.button`
  width: ${props => props.width || 'auto'};
  background-color: ${(props) => (props.disabled ? '#D6EFAE' : '#5E694D')};
  color: ${(props) => (props.disabled ? '#5E694D' : 'white')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
  border-radius: 5rem;
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

const VideoDiv = styled.div`
  width: 100%;
  background-color: #AFAFAF;
  border: none;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
`;

const Countdown = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: black;
`;

const ArbeitDolbomSignupPage = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setIsButtonEnabled(true);
        }
    }, [countdown]);

    const handleButtonClick = () => {
        if (isButtonEnabled) {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/');
            }, 2000);
        }
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        <CustomFont color='black' fontWeight='bold' font='1rem'>아르바이트 돌보미 교육영상 시청 화면</CustomFont>
                    </CustomRow>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <VideoDiv>
                            교육 영상!
                        </VideoDiv>

                        <Countdown>
                            {countdown > 0 ? countdown : null}
                        </Countdown>
                    </CustomColumn>

                    <Button
                        width='100%'
                        disabled={!isButtonEnabled}
                        onClick={handleButtonClick}
                    >
                        <CustomFont
                            color={isButtonEnabled ? 'white' : '#5E694D'}
                            fontWeight='bold'
                            font='1rem'
                        >
                            돌보미 아르바이트 회원가입 신청하기
                        </CustomFont>
                    </Button>

                    {showModal && (
                        <ModalBackground>
                            <Modal>
                                <CustomFont color='black' fontWeight='bold' font='1.2rem'>
                                    교육영상 시청이 완료되었습니다!
                                </CustomFont>
                            </Modal>
                        </ModalBackground>
                    )}
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default ArbeitDolbomSignupPage;
