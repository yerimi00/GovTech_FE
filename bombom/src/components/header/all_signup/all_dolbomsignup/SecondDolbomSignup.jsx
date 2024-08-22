import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
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

const Button2 = styled.button`
width: ${props => props.width || 'auto'};
position: absolute;
right: 0.5rem;
top: 50%;
transform: translateY(-50%);
background-color: #D6EFAE;
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
  border: 2px solid #D6EFAE;
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
  border: 2px solid #D6EFAE;
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
  border: 2px solid #D6EFAE;
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
  border: 2px solid #D6EFAE;
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

const SecondDolbomSignupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [dolbomType, setDolbomType] = useState(queryParams.get('type') || location.state?.dolbomType);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!dolbomType) {
      navigate('/firstdolbomsignuppage');
    } else {
      navigate(`${location.pathname}?type=${dolbomType}`, { replace: true });
    }
  }, [dolbomType, navigate, location.pathname]);

  const isButtonDisabled = id === '' || pw === '' || pw2 === '' || email === '';

  const SecondDolbomSignup = () => {
    if (!isButtonDisabled) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate(dolbomType === 'cert' ? '/certificatedolbomsignuppage' : '/arbeitdolbomsignuppage');
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
                {dolbomType === 'cert' ? '국가자격' : '아르바이트'} 돌보미
              </CustomFont>
              <CustomFont color='#5E694D' font='1.5rem'>회원가입 페이지입니다.</CustomFont>
            </CustomColumn>
          </CustomColumn>

          <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
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

          <Button onClick={SecondDolbomSignup} disabled={isButtonDisabled} width='100%'>
            <CustomFont color={isButtonDisabled ? '#5E694D' : 'white'} fontWeight='bold' font='1rem'>다음 단계로 이동하기</CustomFont>
          </Button>

          {showModal && (
            <ModalBackground>
              <Modal>
                <CustomFont fontWeight='bold' font='1.2rem'>다음 단계로 이동합니다.</CustomFont>
              </Modal>
            </ModalBackground>
          )}
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default SecondDolbomSignupPage;
