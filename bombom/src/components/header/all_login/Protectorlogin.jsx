import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../container/CustomRow';
import CustomColumn from '../../container/CustomColumn';
import CustomFont from '../../container/CustomFont';
import StyledImg from '../../container/StyledImg';

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
  background: linear-gradient(to bottom, #FBDA8B 0%, #FBDA8B 10%, white 90%, white 100%);
`;

const Button = styled.button`
  width: ${props => props.width || 'auto'};
  border-radius: 5rem;
  background-color: ${(props) => (props.disabled ? '#D9BD78' : '#6E5F3B')};
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

const Button2 = styled.button`
  width: ${props => props.width || 'auto'};
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid #D9D9D9;
`;

const IDInput = styled.input.attrs({
    placeholder: '아이디를 입력해주세요.',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #FBDA8B;
  border-radius: 5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #6E5F3B;
  }
`;

const PWInput = styled.input.attrs({
    placeholder: '비밀번호를 입력해주세요.',
    type: 'password',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #FBDA8B;
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

const Button3 = styled.button`
background-color: transparent;
border: none;
display: flex;
align-items: center;
justify-content: center;
width: ${props => props.width || 'auto'};
height: ${props => props.height || 'auto'};
cursor: pointer;
`;

const ProtectorLoginPage = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [showModal, setShowModal] = useState(false);

    const isButtonDisabled = id === '' || pw === '';

    const goSignup = () => {
        navigate('/protectorsignuppage');
    }

    const doneLogin = () => {
        if (!isButtonDisabled) {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/');
            }, 2000);
        }
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='5rem'>
                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center'>
                        <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        <CustomFont color='#6E5F3B' fontWeight='bold' font='1.5rem'>보호자 로그인 화면입니다.</CustomFont>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomFont color='#6E5F3B' font='1rem'>카카오로 로그인하기</CustomFont>
                        <Button3>
                            <StyledImg src={'kakao_banner.png'} width='90%' />
                        </Button3>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='4rem'>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <IDInput value={id} onChange={(e) => setId(e.target.value)} />
                                <PWInput value={pw} onChange={(e) => setPw(e.target.value)} />
                            </CustomColumn>

                            <Button onClick={doneLogin} disabled={isButtonDisabled} width='100%'>
                                <CustomFont as="span" fontWeight='bold' font='1rem'>보호자 로그인하기</CustomFont>
                            </Button>
                        </CustomColumn>

                        <CustomRow width='100%' alignItems='center' justifyContent='space-around' gap='1rem'>

                            <Button3>
                                <CustomFont color='#6E5F3B' font='0.6rem'>
                                    아이디찾기/비밀번호찾기
                                </CustomFont>
                            </Button3>

                            <Button2 onClick={goSignup}>
                                <CustomFont color='#6E5F3B' font='0.6rem'>
                                    보호자로 회원가입하기
                                </CustomFont>
                            </Button2>
                        </CustomRow>
                    </CustomColumn>

                    {showModal && (
                        <ModalBackground>
                            <Modal>
                                <CustomFont color='black' fontWeight='bold' font='1.2rem'>로그인되었습니다!</CustomFont>
                            </Modal>
                        </ModalBackground>
                    )}
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default ProtectorLoginPage;
