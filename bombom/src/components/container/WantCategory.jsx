import styled from "styled-components";

const WantCategory = styled.div`
  padding: 10px 30px;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.lightGrayHover};
  border-radius: 35px;
  position: relative;
  float: left;
  left: 10px;
  top: -30px;
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
`;

export default WantCategory;
