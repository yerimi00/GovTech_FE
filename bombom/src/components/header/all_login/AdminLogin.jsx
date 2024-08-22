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
  background: linear-gradient(to bottom, #E5DDCA 0%, #E5DDCA 10%, white 90%, white 100%);
`;

const Button = styled.button`
  width: ${props => props.width || 'auto'};
  border-radius: 5rem;
  background-color: ${(props) => (props.disabled ? '#E5DDC9' : 'white')};
  box-shadow: ${(props) => (props.disabled ? 'none' : '0 4px 6px rgba(0, 0, 0, 0.1)')};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
`;

const IDInput = styled.input.attrs({
    placeholder: '아이디 입력',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #E5DDC9;
  border-radius: 5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #5E694D;
  }
`;

const PWInput = styled.input.attrs({
    placeholder: '비밀번호 입력',
    type: 'password',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #E5DDC9;
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

const AdminLoginPage = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [showModal, setShowModal] = useState(false);

    const isButtonDisabled = id === '' || pw === '';

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
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='12rem'>
                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center'>
                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center'>
                            <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                            <CustomFont color='#6E5F3B' fontWeight='bold' font='1.5rem'>관리자 로그인 화면입니다.</CustomFont>
                        </CustomColumn>

                        <CustomColumn width='100%' alignItems='flex-start' justifyContent='center'>
                            <CustomFont color='#6E5F3B' font='1rem'>관리자만 접근 가능합니다.</CustomFont>
                            <CustomFont color='#6E5F3B' font='1rem'>보호자와 돌보미 분은 접근이 불가능합니다.</CustomFont>
                        </CustomColumn>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='5rem'>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <IDInput value={id} onChange={(e) => setId(e.target.value)} />
                                <PWInput value={pw} onChange={(e) => setPw(e.target.value)} />
                            </CustomColumn>

                            <Button onClick={doneLogin} disabled={isButtonDisabled} width='100%'>
                                <CustomFont color='#6E5F3B' fontWeight='bold' font='1rem'>관리자 로그인</CustomFont>
                            </Button>
                        </CustomColumn>

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

export default AdminLoginPage;