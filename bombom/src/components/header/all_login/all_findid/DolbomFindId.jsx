import React, { useState, useRef } from 'react';
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
  background: linear-gradient(to bottom, #D8F0B2 0%, #D8F0B2 10%, white 90%, white 100%);
`;

const Button = styled.button`
  width: ${props => props.width || 'auto'};
  border-radius: 5rem;
  background-color: #D8F0B2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: none;
`;

const IDInput = styled.input.attrs({
    placeholder: '이메일을 입력해주세요.',
})`
  width: 100%;
  height: 3rem;
  border: 2px solid #D6EFAE;
  border-radius: 5rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &::placeholder {
    color: #5E694D;
  }
`;

const SuccessMessage = styled.div`
  width: 100%;
  color: #5E694D;
  background-color: #EAF6D6;
  padding: 1rem;
  border-radius: 1rem;
  display: ${(props) => (props.show ? 'block' : 'none')};
  text-align: center;
  box-sizing: border-box;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const DolbomFindIdPage = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [buttonText, setButtonText] = useState('확인하기');
    const [showModal, setShowModal] = useState(false);
    const textToCopyRef = useRef(null);

    const isButtonDisabled = id === '';

    const handleButtonClick = () => {
        if (showMessage) {
            if (textToCopyRef.current) {
                navigator.clipboard.writeText(textToCopyRef.current.innerText).then(() => {
                    setShowModal(true);
                    setTimeout(() => {
                        setShowModal(false);
                        navigate(-1);
                    }, 2000);
                });
            }
        } else {
            if (id !== '') {
                setShowMessage(true);
                setButtonText('복사하고 돌아가기');
            }
        }
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='12rem'>

                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center'>
                        <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        <CustomFont color='#5E694D' fontWeight='bold' font='1.5rem'>돌보미 아이디 찾기</CustomFont>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='5rem'>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <IDInput value={id} onChange={(e) => setId(e.target.value)} />

                                <SuccessMessage show={showMessage}>
                                    등록된 아이디는 <span ref={textToCopyRef}>bbbb</span> 입니다.
                                </SuccessMessage>
                            </CustomColumn>

                            <Button disabled={isButtonDisabled} width='100%' onClick={handleButtonClick}>
                                <CustomFont color='#5E694D' fontWeight='bold' font='1rem'>{buttonText}</CustomFont>
                            </Button>
                        </CustomColumn>

                    </CustomColumn>
                </CustomColumn>
            </PageContainer>

            <Modal show={showModal}>
                클립보드에 아이디가 복사되었습니다!
            </Modal>
        </ContainerCenter>
    );
};

export default DolbomFindIdPage;
