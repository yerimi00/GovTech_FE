import React, { useState } from 'react';
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

const Button = styled.button`
  width: ${props => props.width || 'auto'};
  border-radius: 5rem;
  background-color: ${(props) => (props.disabled ? '#D6EFAE' : '#5E694D')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;

  & > span {
    color: ${(props) => (props.disabled ? '#6E5F3B' : 'white')};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  border: 2px solid #D6EFAE;
  border-radius: 5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #6E5F3B;
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

const ThirdDolbomSignupPage = () => {
    const navigate = useNavigate();

    const [kw1, setKw1] = useState('');
    const [kw2, setKw2] = useState('');
    const [kw3, setKw3] = useState('');
    const [showModal, setShowModal] = useState(false);

    const isButtonDisabled = kw1 === '' || kw2 === '' || kw3 === '';

    const FourDolbomSignup = () => {
        if (!isButtonDisabled) {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/fourdolbomsignuppage');
            }, 2000);
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
                        <StyledInput
                            placeholder="첫번째 키워드를 입력하세요."
                            value={kw1}
                            onChange={(e) => setKw1(e.target.value)}
                        />
                        <StyledInput
                            placeholder="두번째 키워드를 입력하세요."
                            value={kw2}
                            onChange={(e) => setKw2(e.target.value)}
                        />
                        <StyledInput
                            placeholder="세번째 키워드를 입력하세요."
                            value={kw3}
                            onChange={(e) => setKw3(e.target.value)}
                        />
                    </CustomColumn>

                    <Button onClick={FourDolbomSignup} disabled={isButtonDisabled} width='100%'>
                        <CustomFont color={isButtonDisabled ? '#5E694D' : 'white'} fontWeight='bold' font='1rem'>다음 단계로 이동하기</CustomFont>
                    </Button>

                    {showModal && (
                        <ModalBackground>
                            <Modal>
                                <CustomFont color='black' fontWeight='bold' font='1.2rem'>다음 단계로 이동합니다.</CustomFont>
                            </Modal>
                        </ModalBackground>
                    )}
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default ThirdDolbomSignupPage;
