import { ArrowWrapper, Button } from "./styled.components";

const ArrowDown = () => (
  <svg
    width="12"
    height="7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="sc-33m4yg-8 khlnVY"
  >
    <path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path>
  </svg>
);

const CoinPicker = ({ children }) => {
  return (
    <Button>
      <img
        src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880"
        alt="logo"
      />
      <span>{children}</span>
      <ArrowWrapper>
        <ArrowDown />
      </ArrowWrapper>
    </Button>
  );
};

export default CoinPicker;
