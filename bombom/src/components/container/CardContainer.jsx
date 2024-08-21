import styled from "styled-components";

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 20px;
  padding: 1rem;
  margin: 0.5rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 20rem;
  cursor: pointer;
  min-height: 150px;
  width: 100%;
`;

export default CardContainer;
