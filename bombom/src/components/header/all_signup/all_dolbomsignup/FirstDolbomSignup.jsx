import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomRow from '../../../container/CustomRow';
import CustomColumn from '../../../container/CustomColumn';
import CustomFont from '../../../container/CustomFont';
import StyledImg from '../../../container/StyledImg';
import { BsAwardFill } from 'react-icons/bs';
import { BsStopwatchFill } from 'react-icons/bs';

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
  height: ${props => props.height || 'auto'};
  background-color: ${props => props.backgroundColor || '#D6EFAE'};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  border-radius: ${(props) => props.borderRadius || "2rem"};
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "#AFAFAF"};
  border: none;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  min-height: 6rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
  box-shadow: 0px 4px 6px #D6EFAE;
  gap: ${(props) => props.gap || "0.8rem"};
`;

const FirstDolbomSignupPage = () => {
    const navigate = useNavigate();

    const goCertSignup = () => {
        navigate('/seconddolbomsignuppage', { state: { dolbomType: 'cert' } });
    }

    const goArbeitSignup = () => {
        navigate('/seconddolbomsignuppage', { state: { dolbomType: 'arbeit' } });
    }

    return (
        <ContainerCenter>
            <PageContainer>
                <CustomColumn width='90%' alignItems='center' justifyContent='center' gap='5rem'>
                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center'>
                        <StyledImg src={'ex_nav_icon.png'} width='2rem' height='2rem' />
                        <CustomFont color='#5E694D' font='1.5rem'>돌보미 회원가입 화면입니다.</CustomFont>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='2rem'>
                        <CustomRow width='100%' alignItems='center' justifyContent='space-between' gap='1rem'>
                            <Button width='50%' height='15rem' onClick={goCertSignup}>
                                <CustomColumn width='90%' alignItems='center' justifyContent='center'>
                                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                        <BsAwardFill style={{ color: '#5E694D', fontSize: '3rem' }} />
                                    </CustomRow>
                                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
                                        <CustomFont color='#5E694D' font='1rem'>
                                            국가자격
                                        </CustomFont>
                                        <CustomFont color='#5E694D' font='1rem'>
                                            돌보미
                                        </CustomFont>
                                        <CustomFont color='#5E694D' font='1.3rem' fontWeight='bold'>
                                            회원가입
                                        </CustomFont>
                                    </CustomColumn>
                                </CustomColumn>
                            </Button>
                            <Button width='50%' height='15rem' onClick={goArbeitSignup}>
                                <CustomColumn width='90%' alignItems='center' justifyContent='center'>
                                    <CustomRow width='100%' alignItems='center' justifyContent='flex-start'>
                                        <BsStopwatchFill style={{ color: '#5E694D', fontSize: '3rem' }} />
                                    </CustomRow>
                                    <CustomColumn width='100%' alignItems='flex-start' justifyContent='center' gap='0.5rem'>
                                        <CustomFont color='#5E694D' font='1rem'>
                                            돌보미
                                        </CustomFont>
                                        <CustomFont color='#5E694D' font='1rem'>
                                            아르바이트
                                        </CustomFont>
                                        <CustomFont color='#5E694D' font='1.3rem' fontWeight='bold'>
                                            회원가입
                                        </CustomFont>
                                    </CustomColumn>
                                </CustomColumn>
                            </Button>
                        </CustomRow>

                        <MainDiv backgroundColor="white" width='100%' height='17vh' borderRadius="35px">
                            <CustomFont color='#5E694D' font='1rem'>국가 자격증이 있는 돌보미분은</CustomFont>
                            <CustomRow alignItems='center' justifyContent='center'>
                                <CustomFont color='#5E694D' font='1.2rem' fontWeight='bold'>국가자격 돌보미</CustomFont>
                                <CustomFont color='#5E694D' font='1rem'>로</CustomFont>
                            </CustomRow>
                            <CustomFont color='#5E694D' font='1rem'>회원가입을 진행해주세요.</CustomFont>
                        </MainDiv>
                    </CustomColumn>
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default FirstDolbomSignupPage;
