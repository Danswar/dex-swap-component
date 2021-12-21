import styled from "styled-components";

const WrapperArrow = styled.div`
  position: relative;
`;

const ArrowDown = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid #cfcdcd;
`;

const InvertButton = (props) => {
  return (
    <WrapperArrow>
      <ArrowDown {...props}>&#11015;</ArrowDown>
    </WrapperArrow>
  );
};

export default InvertButton;
