import React from "react";
import { useWeb3React } from "@web3-react/core";
import { createGlobalStyle } from "styled-components";

import { SettingsButton, MainButton } from "./components/UI/Buttons";
import { Title } from "./components/UI/Typographies";
import Container from "./components/UI/Container";
import TokenInput from "./components/TokenInput";
import InvertButton from "./components/InvertButton";
import Header from "./components/UI/Header";
import useAuth from "./hooks/useAuth";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
`;

export const DexSwap = () => {
  const { login, logout } = useAuth();
  const { account } = useWeb3React();

  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Title>Swap</Title>
        <SettingsButton>Settings</SettingsButton>
        {account && <SettingsButton onClick={logout}>Logout</SettingsButton>}
      </Header>
      <TokenInput />
      <InvertButton />
      <TokenInput />
      <MainButton onClick={account ? () => {} : login}>
        {account ? "Swap" : "Connect your wallet"}
      </MainButton>
    </Container>
  );
};
