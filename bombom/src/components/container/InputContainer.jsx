import styled from "styled-components";

const InputContainer = styled.input.attrs({ type: "text" })`
  display: flex;
  justify-content: flex-start;
  align-items: ${(props) => props.alignItems || "center"};
  align-content: flex-start;
  width: ${(props) => props.width || "85%"};
  height: ${(props) => props.height || "auto"};
  padding: 10px 30px;
  border: 1.5px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${(props) => props.borderRadius || "35px"};
  font-size: 18px;
  outline: none;
  color: #3e3537;

  margin-top: ${(props) => props.marginTop || "auto"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
`;

export default InputContainer;
