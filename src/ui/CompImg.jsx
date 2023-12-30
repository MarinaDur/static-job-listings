import { styled } from "styled-components";

const StyledCompImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, -50%);
  width: 50px;

  @media (min-width: 1024px) {
    position: static;
    top: auto;
    left: auto;
    transform: translate(0, 0);
    width: 75px;
  }
`;

function CompImg({ logo }) {
  return <StyledCompImg src={logo} alt="company-logo" />;
}

export default CompImg;
