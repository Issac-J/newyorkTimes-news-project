import React from "react";
import styled from "styled-components";

const Input = () => {
  return <SearchBar />;
};

export default Input;

const SearchBar = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 18px;
  padding: 20px;
  height: 25px;
  width: 700px;
`;
