import React, { useState } from "react";
import styled from "styled-components";
import CustomRow from "../../components/container/CustomRow";
import CustomColumn from "../../components/container/CustomColumn";
import WantCategory from "../../components/container/WantCategory";
import WantCard from "../../components/card/wantcard";
import { ReturnBtn } from "../../components/icons/wantbolbom";
import CardContainer from "../../components/container/CardContainer";

const ChatPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatData, setChatData] = useState([
    { chat: "안녕하세여", isMe: false },
    { chat: "안녕하세여", isMe: true },
    { chat: "안녕하세여", isMe: false },
    { chat: "안녕하세여", isMe: true },
  ]);
  const [showOptions, setShowOptions] = useState(false); // 버튼 표시 여부 상태

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
    setShowOptions(!showOptions); // 버튼 표시/숨기기 토글
  };

  const handleFindClick = () => {
    navigate("/want");
  };

  const cardData = {
    title: "돌봄 원해요01",
    location: "경기도 성남시",
    caregiverInfo: ["나이: 70세, 키워드: 친절, 경험 많음"],
    hourlyRate: "시급: 15,000원",
  };

  return (
    <ChatPageContainer>
      <PageContainer>
        <CustomColumn
          width="90%"
          alignItems="center"
          justifyContent="flex-start"
          gap="1rem"
        >
          <MainDiv backgroundColor="white" borderRadius="35px">
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
              >
                <ReturnBtn />
              </ReturnIconWrapper>
              <WantCategory width="40%" borderRadius="20px" zIndex="2">
                제목 돌봄 원해요01
              </WantCategory>
            </CustomRow>
            <MainDiv backgroundColor="white">
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
                  </ChatMessage>
                ))}
              </ChatMessages>
            </MainDiv>
          </MainDiv>
        </CustomColumn>
      </PageContainer>

      <ChatInputContainer>
        <PlusButton onClick={handlePlusButtonClick}>+</PlusButton>
        <ChatInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요"
        />
        <SendButton onClick={handleSendClick}>전송</SendButton>
      </ChatInputContainer>

      {showOptions && ( // 옵션 버튼을 표시할 조건
        <OptionsContainer>
          <OptionButton onClick={() => alert("결제 요청하기 클릭됨")}>
            결제 요청하기
          </OptionButton>
          <OptionButton onClick={() => alert("리뷰 작성하기 클릭됨")}>
            리뷰 작성하기
          </OptionButton>
        </OptionsContainer>
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
  padding-bottom: 10vh; /* Footer 높이를 고려하여 padding 추가 */
`;

const PageContainer = styled(ChatPageContainer)`
  width: 100%;
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
  justify-content: center;
  font-family: ${(props) => props.fontFamily || "Noto Sans KR"};
  position: relative;
`;

const ReturnIconWrapper = styled.div`
  position: absolute;
  top: -20px;
  left: 0px;
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  width: 100%;
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
  bottom: 10vh;
  left: 0;
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
  background-color: #dddddd;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
`;

const OptionsContainer = styled.div`
  position: fixed;
  bottom: 20vh; /* ChatInputContainer 위에 나타나도록 위치 조정 */
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: white;
  border-top: 1px solid #dddddd;
`;

const OptionButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
`;
