import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomColumn from '../../../container/CustomColumn';
import CustomFont from '../../../container/CustomFont';
import StyledImg from '../../../container/StyledImg';
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
  gap: 2rem;
  position: relative;
  background: linear-gradient(to bottom, #D9F0B4 0%, #D9F0B4 10%, white 90%, white 100%);

  padding-top: 30vh;
  padding-bottom: 15vh;
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

const StyledInput = styled.input`
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

const ImageUpload = styled.div`
  width: 7rem;
  height: 10rem;
  border: 2px solid #D6EFAE;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F3F8EC;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const PlusButton = styled.div`
background-color: #D6EFAE;
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
border: none;
border-radius: 50%;
width: 1.5rem;
height: 1.5rem;
`;

const FourDolbomSignupPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [finaledu, setFinaledu] = useState('');
    const [edudate, setEdudate] = useState('');
    const [ex, setEx] = useState('');
    const [cert, setCert] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);

    const isButtonDisabled = !name || !birth || !gender || !address || !email || !number ||
        !finaledu || !edudate || !ex || !cert || !image;

    const CertDolbomSignup = () => {
        if (!isButtonDisabled) {
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
                navigate('/certificatedolbomsignuppage');
            }, 2000);
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
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
                                국가자격 돌보미
                            </CustomFont>
                            <CustomFont color='#5E694D' font='1.5rem'>회원가입 페이지입니다.</CustomFont>
                        </CustomColumn>
                    </CustomColumn>

                    <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='4rem'>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                            <CustomRow width='100%' alignItems='center' justifyContent='space-between'>
                                <ImageUpload>
                                    <label htmlFor="image-upload">
                                        {image ? <img src={image} alt="프로필 이미지" /> :
                                            <PlusButton>
                                                <CustomFont color='white' fontWeight='bold' font='2rem'>+</CustomFont>
                                            </PlusButton>}
                                    </label>
                                    <input id="image-upload" type="file" style={{ display: 'none' }} onChange={handleImageChange} />
                                </ImageUpload>
                                <CustomColumn width='60%' alignItems='center' justifyContent='center' gap='1rem'>
                                    <StyledInput placeholder='이름' value={name} onChange={(e) => setName(e.target.value)} />
                                    <StyledInput placeholder='생년월일 8자리' value={birth} onChange={(e) => setBirth(e.target.value)} />
                                    <CustomRow>
                                        <label>
                                            <input type="radio" value="남성" checked={gender === '남성'} onChange={(e) => setGender(e.target.value)} />
                                            <CustomFont color='black' font='1rem'>남성</CustomFont>
                                        </label>
                                        <label>
                                            <input type="radio" value="여성" checked={gender === '여성'} onChange={(e) => setGender(e.target.value)} />
                                            <CustomFont color='black' font='1rem'>여성</CustomFont>
                                        </label>
                                        <label>
                                            <input type="radio" value="기타" checked={gender === '기타'} onChange={(e) => setGender(e.target.value)} />
                                            <CustomFont color='black' font='1rem'>기타</CustomFont>
                                        </label>
                                    </CustomRow>
                                </CustomColumn>
                            </CustomRow>

                            <StyledInput placeholder="주소" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <StyledInput placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <StyledInput placeholder="휴대전화" value={number} onChange={(e) => setNumber(e.target.value)} />
                        </CustomColumn>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                            <StyledInput placeholder="최종학력사항(대학명/전공명)" value={finaledu} onChange={(e) => setFinaledu(e.target.value)} />
                            <StyledInput placeholder="재학기간(연도/월-연도/월)" value={edudate} onChange={(e) => setEdudate(e.target.value)} />
                        </CustomColumn>

                        <CustomColumn width='100%' alignItems='center' justifyContent='center' gap='1rem'>
                            <StyledInput placeholder="경력사항(없다면 신입 작성)" value={ex} onChange={(e) => setEx(e.target.value)} />
                            <StyledInput placeholder="자격사항(자격증)" value={cert} onChange={(e) => setCert(e.target.value)} />
                        </CustomColumn>
                    </CustomColumn>

                    <Button onClick={CertDolbomSignup} disabled={isButtonDisabled} width='100%'>
                        <CustomFont color={isButtonDisabled ? '#5E694D' : 'white'} fontWeight='bold' font='1rem'>다음 단계로 이동하기</CustomFont>
                    </Button>

                    {showModal && (
                        <ModalBackground>
                            <Modal>
                                <CustomFont color='black' fontWeight='bold' font='1.2rem'>다음 단계로 이동합니다.</CustomFont>
                            </Modal>
                        </ModalBackground>
                    )}
                </CustomColumn>
            </PageContainer>
        </ContainerCenter>
    );
};

export default FourDolbomSignupPage;
