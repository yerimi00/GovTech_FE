import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from '../../../container/CustomColumn';
import CustomFont from '../../../container/CustomFont';
import CustomRow from '../../../container/CustomRow';

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
  align-items: center;
  gap: 4rem;
  position: relative;
  background: linear-gradient(to bottom, #FBDB8F, white);
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 30rem;
  padding: 0.5rem;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Category = styled.div`
  padding: 10px;
  background-color: #FBDA8B;
  border-radius: 35px;
  position: absolute;
  top: 9rem;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

const SubDiv = styled.button`
  background-color: #FBDA8B;
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
  background-color: #FDE9BA;
}
`;
const NowPwInput = styled.input.attrs({
  placeholder: '현재 비밀번호를 입력해주세요.',
  type: 'password',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #FBDA8B;
  border-radius: 5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #5E694D;
  }
`;

const NewPwInput = styled.input.attrs({
  placeholder: '변경할 비밀번호를 입력해주세요.',
  type: 'password',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #FBDA8B;
  border-radius: 5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #5E694D;
  }
`;

const NewPw2Input = styled.input.attrs({
  placeholder: '변경할 비밀번호를 다시 입력해주세요.',
  type: 'password',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #FBDA8B;
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

const EditPasswordPage = () => {
  const navigate = useNavigate();

  const [nowpw, setNowpw] = useState('');
  const [newpw, setNewpw] = useState('');
  const [newpw2, setNewpw2] = useState('');
  const [showModal, setShowModal] = useState(false);

  const isButtonDisabled = nowpw === '' || newpw === '' || newpw2 === '';

  const goLogin = () => {
    navigate('/firstloginpage');
  }

  const doneEdit = () => {
    if (!isButtonDisabled) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate('/firstloginpage');
      }, 2000);
    }
  }

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='2rem'>
          <MainDiv backgroundColor="white" borderRadius="35px">
            <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
              <Category width="40%" borderRadius="20px">
                <CustomRow width='100%' alignItems='flex-end' justifyContent='center' gap='0.5rem'>
                  <CustomFont color='#5E694D' font='2rem' fontWeight='bold'>마이페이지</CustomFont>
                  <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>회원 정보 수정</CustomFont>
                </CustomRow>
              </Category>
            </CustomRow>

            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='4rem'>

              <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                <CustomFont color='#5E694D' font='1.3rem' fontWeight='bold'>비밀번호 수정</CustomFont>
              </CustomRow>

              <CustomColumn width='100% ' alignItems='center' justifyContent='center' gap='0.5rem'>
                <NowPwInput value={nowpw} onChange={(e) => setNowpw(e.target.value)} />
                <NewPwInput value={newpw} onChange={(e) => setNewpw(e.target.value)} />
                <NewPw2Input value={newpw2} onChange={(e) => setNewpw2(e.target.value)} />
              </CustomColumn>

              <SubDiv borderRadius='3rem' onClick={doneEdit}>
                <CustomFont color='#5E694D' font='1rem' fontWeight='bold'>비밀번호 수정하기</CustomFont>
              </SubDiv>

            </CustomColumn>

            {showModal && (
              <ModalBackground>
                <Modal>
                  <CustomFont color='black' fontWeight='bold' font='1.2rem'>비밀번호가 변경되었습니다!</CustomFont>
                </Modal>
              </ModalBackground>
            )}

          </MainDiv>
        </CustomColumn>
      </PageContainer>
    </ContainerCenter>
  );
};

export default EditPasswordPage;
