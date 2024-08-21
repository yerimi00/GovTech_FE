import React, { useState } from "react";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomColumn from "../../components/container/CustomColumn";
import WantCategory from "../../components/container/WantCategory";
import WantCard from "../../components/card/wantcard";
import { ReturnBtn } from "../../components/icons/wantbolbom";
import CardContainer from "../../components/container/CardContainer";
import Modal from "../../components/modal/Modal";

const ChatPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatData, setChatData] = useState([
    { chat: "안녕하세요", isMe: false },
    { chat: "안녕하세요", isMe: true },
    // 채팅 데이터 추가...
  ]);
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [paymentRequested, setPaymentRequested] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim()) {
      setChatData([...chatData, { chat: inputValue, isMe: true }]);
      setInputValue("");
    }
  };

  const handlePlusButtonClick = () => {
    setShowOptions(!showOptions);
  };

  const handleFindClick = () => {
    navigate("/want");
  };

  const handlePaymentRequest = () => {
    setShowModal(false);
    setPaymentRequested(true);
    setChatData([
      ...chatData,
      { chat: "결제를 요청합니다", isMe: true, showPaymentButton: true },
    ]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const cardData = {
    title: "돌봄 원해요01",
    location: "경기도 성남시",
    caregiverInfo: ["나이: 70세, 키워드: 친절, 경험 많음"],
    hourlyRate: "시급: 15,000원",
  };

  return (
    <ChatPageContainer>
      <PageContainer height="50vh">
        <CustomColumn
          width="90%"
          alignItems="center"
          justifyContent="flex-start"
          gap="1rem"
        >
          <MainDiv backgroundColor="white" borderRadius="35px">
            <HeaderContainer>
              <CustomRow
                width="90%"
                justifyContent="flex-start"
                position="relative"
              >
                <ReturnIconWrapper
                  width="40%"
                  borderRadius="20px"
                  backgroundColor="#E2DFD6"
                  onClick={handleFindClick}
                  zIndex="4"
                >
                  <ReturnBtn />
                </ReturnIconWrapper>
                <WantCategory width="40%" borderRadius="20px" zIndex="5">
                  제목 돌봄 원해요01
                </WantCategory>
              </CustomRow>
            </HeaderContainer>

            <ContentContainer>
              <WantCard
                title={cardData.title}
                location={cardData.location}
                caregiverInfo={cardData.caregiverInfo.join(", ")}
                hourlyRate={cardData.hourlyRate}
                styled={{ backgroundColor: "white" }}
              />
              <CardContainer
                alignItems="center"
                height="5em"
                borderRadius="35px"
              >
                위 글에 대한 채팅이 시작됩니다.
                <div>
                  <p>보호자 AAA님의 프로필 보러가기</p>
                </div>
                <div>
                  <p>돌보미 BBB님의 프로필 보러가기</p>
                </div>
              </CardContainer>

              <ChatMessages>
                {chatData.map((message, index) => (
                  <ChatMessage key={index} isMe={message.isMe}>
                    {message.chat}
                    {message.showPaymentButton && (
                      <PaymentButton>결제하기</PaymentButton>
                    )}
                  </ChatMessage>
                ))}
              </ChatMessages>
            </ContentContainer>
          </MainDiv>
        </CustomColumn>
      </PageContainer>

      {/* 채팅 작성부분 */}
      <ChatInputContainer showOptions={showOptions}>
        <PlusButton onClick={handlePlusButtonClick}>+</PlusButton>
        <ChatInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요"
        />
        <SendButton onClick={handleSendClick}>전송</SendButton>
      </ChatInputContainer>

      {showOptions && (
        <OptionsContainer>
          {!paymentRequested && (
            <OptionButton onClick={() => setShowModal(true)}>
              결제 요청하기
            </OptionButton>
          )}
          <OptionButton onClick={() => alert("리뷰 작성하기 클릭됨")}>
            리뷰 작성하기
          </OptionButton>
        </OptionsContainer>
      )}

      {showModal && (
        <Modal show={showModal} onClose={handleCloseModal} cardData={cardData}>
          <OptionButton onClick={handlePaymentRequest}>
            결제 요청하기
          </OptionButton>
        </Modal>
      )}
    </ChatPageContainer>
  );
};

export default ChatPage;

const ChatPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 10vh;
`;

const PageContainer = styled(ChatPageContainer)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  background: linear-gradient(to bottom, #e5ddc9, white);
  gap: 2rem;
  padding-top: 10vh;
`;

const MainDiv = styled.div`
  background-color: ${(props) => props.backgroundColor || "#AFAFAF"};
  border: none;
  width: ${(props) => props.width || "100%"};
  border-radius: ${(props) => props.borderRadius || "auto"};
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
  position: relative;
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 10;
  padding-bottom: 1rem;
`;

const ContentContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 60vh; /* MainDiv 내부에서 스크롤 가능하게 높이 설정 */
`;

const ReturnIconWrapper = styled.div`
  position: absolute;
  top: -30px;
  left: -30px;
  padding: 13px 50px 13px 10px;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.lightGrayHover};
  border-radius: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  cursor: pointer;
`;

const ChatMessages = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto; /* 채팅이 많아지면 스크롤이 가능하도록 설정 */
  padding: 1rem; /* padding 추가로 가독성 개선 */
  box-sizing: border-box; /* 패딩이 포함된 크기 계산 */
`;

const ChatMessage = styled.div`
  max-width: 60%;
  padding: 10px;
  border-radius: 15px;
  background-color: ${(props) => (props.isMe ? "#E5DDC9" : "#F6F3EC")};
  align-self: ${(props) => (props.isMe ? "flex-end" : "flex-start")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: #ffffff;
  border-top: 1px solid #dddddd;
  position: fixed;
  bottom: ${(props) => (props.showOptions ? "30vh" : "11vh")};
  left: 0;
  transition: bottom 0.3s ease;
  z-index: 2;
`;

const OptionsContainer = styled.div`
  position: fixed;
  bottom: 10vh;
  left: 0;
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-top: 1px solid #dddddd;
  transition: bottom 0.3s ease;
  z-index: 1;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #dddddd;
  margin: 0 10px;
  font-size: 16px;
`;

const PlusButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #c6c0af;
  color: #ffffff;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #c6c0af;
  color: ${({ theme }) => theme.colors.mainDark};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
`;

const OptionButton = styled.button`
  padding: 10px 20px;
  background-color: #e5ddc9;
  color: ${({ theme }) => theme.colors.mainDark};
  font-family: "Cafe24SsurroundAir";
  font-weight: bold;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  font-size: 16px;
  height: 135px;
`;

const PaymentButton = styled.button`
  padding: 5px 10px;
  background-color: #c6c0af;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 5px;
`;
