import React from "react";
import { createGlobalStyle } from "styled-components";

import Button from "./components/UI/Button";
import Container from "./components/UI/Container";
import TokenInput from "./components/TokenInput";
import InvertButton from "./components/InvertButton";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
`;

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <TokenInput />
      <InvertButton />
      <TokenInput />
      <Button>Connect your wallet</Button>
    </Container>
  );
};
