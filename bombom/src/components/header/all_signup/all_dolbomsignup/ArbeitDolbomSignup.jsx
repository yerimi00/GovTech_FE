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

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/');
            }, 2000);
        }
    }, [countdown, navigate]);

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
