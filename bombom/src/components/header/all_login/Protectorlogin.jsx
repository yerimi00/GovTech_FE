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
    placeholder: '아이디 입력',
})`
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #D9D9D9;
  }
`;

const PWInput = styled.input.attrs({
    placeholder: '비밀번호 입력',
    type: 'password',
})`
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #D9D9D9;
  }
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
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        <CustomFont color='black' fontWeight='bold' font='1rem'>보호자 로그인하기</CustomFont>
                    </CustomRow>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                            <IDInput value={id} onChange={(e) => setId(e.target.value)} />
                            <PWInput value={pw} onChange={(e) => setPw(e.target.value)} />
                        </CustomColumn>

                        <Button onClick={doneLogin} disabled={isButtonDisabled} width='100%'>
                            <CustomFont color='white' fontWeight='bold' font='1rem'>보호자 로그인하기</CustomFont>
                        </Button>
                    </CustomColumn>

                    <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='1rem'>
                        <Button2>
                            <CustomFont color='#383838' font='0.8rem' fontWeight='bold'>
                                아이디찾기/비밀번호찾기
                            </CustomFont>
                        </Button2>
                        <Button onClick={goSignup}>보호자로 회원가입하기</Button>
                    </CustomRow>

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