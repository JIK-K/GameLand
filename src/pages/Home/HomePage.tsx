import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100vh;
  height: 100vw;
  background-color: #228be6; /* 오타 수정 */
`;

const HomePage = () => {
  return (
    <div>
      This is Home page
      <Background>sdfsdf</Background>
    </div>
  );
};
export default HomePage;
