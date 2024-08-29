import styled from "styled-components";

const CustomButtonSubmit = styled.button`
  background: #c6c0af;
  font-family:"Cafe24SsurroundAir"
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: ${(props) => props.borderRadius || "35px"};
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  width: ${(props) => props.width || "100%"};
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

export default CustomButtonSubmit;
