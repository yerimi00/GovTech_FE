import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomColumn from "../../components/container/CustomColumn";
import WantCategory from "../../components/container/WantCategory";
import InputContainer from "../../components/container/InputContainer";
import ComplainModal from "../../components/modal/ComplainModal";
import CustomButtonSubmit from "../../components/container/CustomButtonSubmit";

const ComplainWrite = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleRegistrationClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ContainerCenter>
      <PageContainer>
        <CustomColumn
          width="90%"
          height="70vh"
          alignItems="center"
          justifyContent="flex-start"
        >
          <MainDiv height="70vh" backgroundColor="white" borderRadius="35px">
            <TopSection>
              <WantCategory top="-50px" width="40%" borderRadius="20px">
                더보기 <p> 민원작성하기</p>
              </WantCategory>
            </TopSection>
            <InputContainer
              marginTop="0px"
              borderRadius="20px"
              placeholder="민원 제목을 입력해주세요"
            />
            <InputContainer
              marginTop="10px"
              borderRadius="20px"
              placeholder="민원 유형을 짧게 입력해주세요"
            />
            <InputTextArea
              marginTop="10px"
              marginBottom="20px"
              borderRadius="20px"
              height="30vh"
              alignItems="flex-start"
              placeholder="민원 유형을 입력해주세요"
            />
            <CustomButtonSubmit width="80%" onClick={handleRegistrationClick}>
              민원 등록하기
            </CustomButtonSubmit>
          </MainDiv>
        </CustomColumn>
      </PageContainer>
      {showModal && (
        <ComplainModal
          show={showModal}
          onClose={handleCloseModal}
          navigate={navigate}
        />
      )}
    </ContainerCenter>
  );
};

export default ComplainWrite;

const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled(ContainerCenter)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  background: linear-gradient(to bottom, #e5ddc9, white);
  gap: 2rem;
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
  align-items: center;
  justify-content: flex-start;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
`;

const InputTextArea = styled.textarea.attrs({
  placeholder:
    "민원 유형을 입력해주세요.\n(돌보미 관련 민원 글이라면 해당 돌봄글 링크와 돌보미분의 성함을 함께 적어주세요.)",
})`
  display: flex;
  justify-content: flex-start;
  align-items: ${(props) => props.alignItems || "center"};
  align-content: flex-start;
  width: ${(props) => props.width || "85%"};
  height: ${(props) => props.height || "auto"};
  padding: 10px 15px;
  border: 1.5px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${(props) => props.borderRadius || "35px"};
  font-size: 18px;
  outline: none;
  color: #3e3537;

  margin-top: ${(props) => props.marginTop || "auto"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};

  min-height: 100px;
  box-sizing: border-box;
`;
