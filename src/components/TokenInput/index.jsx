import React from "react";
import CoinPicker from "../CoinPicker";
import { InputWrapper, Input } from "./styled.components";

const TokenInput = () => {
  return (
    <InputWrapper>
      <Input
        inputmode="decimal"
        autocomplete="off"
        autocorrect="off"
        type="text"
        pattern="^[0-9]*[.,]?[0-9]*$"
        placeholder="0.0"
        minlength="1"
        maxlength="79"
        spellcheck="false"
      />
      <CoinPicker>ETH</CoinPicker>
    </InputWrapper>
  );
};

export default TokenInput;
