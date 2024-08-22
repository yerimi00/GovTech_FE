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
  background: linear-gradient(to bottom, #FBDB90 0%, #FBDB90 10%, white 90%, white 100%);
`;

const Button = styled.button`
  width: ${props => props.width || 'auto'};
  border-radius: 5rem;
  background-color: #FBDB90;
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
  border: 2px solid #FBDB90;
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
  background-color: #FCECC4;
  padding: 1rem;
  border-radius: 1rem;
  display: ${(props) => (props.show ? 'block' : 'none')};
  text-align: center;
  box-sizing: border-box;
`;

const ProtectorFindIdPage = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const isButtonDisabled = id === '';

    const handleButtonClick = () => {
        if (id !== '') {
            setShowMessage(true);
        }
    };

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='12rem'>

                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center'>
                        <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        <CustomFont color='#5E694D' fontWeight='bold' font='1.5rem'>보호자 아이디 찾기</CustomFont>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='5rem'>
                            <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='0.5rem'>
                                <IDInput value={id} onChange={(e) => setId(e.target.value)} />

                                <SuccessMessage show={showMessage}>
                                    등록된 이메일은 bbbb 입니다.
                                </SuccessMessage>
                            </CustomColumn>

                            <Button disabled={isButtonDisabled} width='100%' onClick={handleButtonClick}>
                                <CustomFont color='#5E694D' fontWeight='bold' font='1rem'>확인하기</CustomFont>
                            </Button>
                        </CustomColumn>

                    </CustomColumn>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default ProtectorFindIdPage;
