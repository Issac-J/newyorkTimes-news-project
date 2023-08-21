import React from "react";
import styled from "styled-components";
import Input from "../components/Input";

const Home = () => {
  return (
    <HomeDiv>
      <Input />
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
