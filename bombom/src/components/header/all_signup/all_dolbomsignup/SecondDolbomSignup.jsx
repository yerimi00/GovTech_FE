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
  background-color: #383838;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  height: 3rem;
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

const PW2Input = styled.input.attrs({
    placeholder: '비밀번호 재입력',
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

const EmailInput = styled.input.attrs({
    placeholder: '이메일 입력',
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
                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                        <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        <CustomFont color='black' fontWeight='bold' font='1rem'>
                            {dolbomType === 'cert' ? '국가자격' : '아르바이트'}
                        </CustomFont>
                        <CustomFont color='black' fontWeight='bold' font='1rem'>돌보미 회원가입 페이지입니다.</CustomFont>
                    </CustomRow>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                            <CustomRow width='100%'>
                                <IDInput value={id} onChange={(e) => setId(e.target.value)} />
                                <Button2 width='25%'>
                                    <CustomFont font='0.7rem' color='white'>중복검사</CustomFont>
                                </Button2>
                            </CustomRow>
                            <PWInput value={pw} onChange={(e) => setPw(e.target.value)} />
                            <PW2Input value={pw2} onChange={(e) => setPw2(e.target.value)} />
                            <CustomRow width='100%'>
                                <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
                                <Button2 width='25%'>
                                    <CustomFont font='0.7rem' color='white'>중복검사</CustomFont>
                                </Button2>
                            </CustomRow>
                        </CustomColumn>

                        <Button onClick={SecondDolbomSignup} disabled={isButtonDisabled} width='100%'>
                            <CustomFont color='white' fontWeight='bold' font='1rem'>돌보미 회원가입하기</CustomFont>
                        </Button>
                    </CustomColumn>

                    {showModal && (
                        <ModalBackground>
                            <Modal>
                                <CustomFont color='black' fontWeight='bold' font='1.2rem'>다음 단계로 이동합니다!</CustomFont>
                            </Modal>
                        </ModalBackground>
                    )}
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default SecondDolbomSignupPage;
