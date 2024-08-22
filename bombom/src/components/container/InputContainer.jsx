import styled from "styled-components";

const InputContainer = styled.input.attrs({ type: "text" })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "85%"};
  padding: 10px 30px 10px 30px;
  border: 1.5px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 35px;
  font-size: 18px;
  outline: none;
  color: #3e3537;

  margin-top: ${(props) => props.marginTop || "auto"};
`;

export default InputContainer;
