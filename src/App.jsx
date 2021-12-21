import React from "react";
import { createGlobalStyle } from "styled-components";

import { SettingsButton, MainButton } from "./components/UI/Buttons";
import { Title } from "./components/UI/Typographies";
import Container from "./components/UI/Container";
import TokenInput from "./components/TokenInput";
import InvertButton from "./components/InvertButton";
import Header from "./components/UI/Header";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
`;

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Title>Swap</Title>
        <SettingsButton>Settings</SettingsButton>
      </Header>
      <TokenInput />
      <InvertButton />
      <TokenInput />
      <MainButton>Connect your wallet</MainButton>
    </Container>
  );
};
