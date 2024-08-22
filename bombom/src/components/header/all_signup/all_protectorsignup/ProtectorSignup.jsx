import React, { useState } from 'react';
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
position: absolute;
right: 0.5rem;
top: 50%;
transform: translateY(-50%);
background-color: #FBDA8B;
display: flex;
align-items: center;
justify-content: center;
padding: 0 1rem;
cursor: pointer;
border: none;
border-radius: 5rem;
height: 2rem;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;
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
  padding-right: 4rem;

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

const PW2Input = styled.input.attrs({
  placeholder: '비밀번호를 다시 입력해주세요.',
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

const EmailInput = styled.input.attrs({
  placeholder: '이메일을 입력해주세요.',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #FBDA8B;
  border-radius: 5rem;
  padding: 0.5rem;
  padding-right: 4rem;
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

const ProtectorSignupPage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState(''); //  비밀번호 재입력 부분
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const isButtonDisabled = id === '' || pw === '' || pw2 === '' || email === '';

  const doneProtectorSignup = () => {
    if (!isButtonDisabled) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/protectorloginpage');
      }, 2000);
    }
  }

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='5rem'>
          <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.2rem'>
            <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
            <CustomFont color='#6E5F3B' font='1.5rem'>보호자 회원가입 화면입니다.</CustomFont>
          </CustomColumn>

          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
              <CustomRow width='100%'>
                <InputContainer>
                  <IDInput value={id} onChange={(e) => setId(e.target.value)} />
                  <Button2 width='25%'>
                    <CustomFont font='0.7rem' color='#6E5F3B'>중복검사</CustomFont>
                  </Button2>
                </InputContainer>
              </CustomRow>
              <PWInput value={pw} onChange={(e) => setPw(e.target.value)} />
              <PW2Input value={pw2} onChange={(e) => setPw2(e.target.value)} />
              <CustomRow width='100%'>
                <InputContainer>
                  <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
                  <Button2 width='25%'>
                    <CustomFont font='0.7rem' color='#6E5F3B'>중복검사</CustomFont>
                  </Button2>
                </InputContainer>
              </CustomRow>
            </CustomColumn>
          </CustomColumn>

          <Button onClick={doneProtectorSignup} disabled={isButtonDisabled} width='100%'>
            <CustomFont color={isButtonDisabled ? '#6E5F3B' : 'white'} fontWeight='bold' font='1rem'>다음 단계로 이동하기</CustomFont>
          </Button>

          {showModal && (
            <ModalBackground>
              <Modal>
                <CustomFont color='black' fontWeight='bold' font='1.2rem'>보호자로 회원가입되었습니다!</CustomFont>
              </Modal>
            </ModalBackground>
          )}
        </CustomColumn>
      </PageContainer>
    </ContainerCenter >
  );
};

export default ProtectorSignupPage;