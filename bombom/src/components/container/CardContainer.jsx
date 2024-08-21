import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.lightGray};
  border-radius: ${(props) => props.borderRadius || "20px"};
  padding: 1rem;
  margin: 0.5rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
  min-height: 120px;
  align-items: ${(props) => props.alignItems || "flex-start"};
  width: ${(props) => props.width || "20rem"};
  height: ${(props) => props.height || "150px"};
`;

export default CardContainer;
