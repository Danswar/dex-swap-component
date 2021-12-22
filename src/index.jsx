import React from "react";
import { Web3ReactProvider } from "@web3-react/core";

import { DexSwap } from "./DexSwap";
import getLibrary from "./utils/getLibrary";

const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <DexSwap />
    </Web3ReactProvider>
  );
};

export default App;
