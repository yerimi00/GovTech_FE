import styled from "styled-components";

const WantCategory = styled.div`
  padding: 10px 30px;
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.lightGrayHover};
  border-radius: 35px;
  position: relative;
  float: left;
  left: 10px;
  top: ${(props) => props.top || "-30px"};
  font-size: 30px;
  font-weight: bold;
  font-family: "Cafe24SsurroundAir", sans-serif;
  margin-top: ${(props) => props.marginTop || "auto"};
  // width: 100%;
`;

export default WantCategory;
