import { styled } from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 140px;
  background: var(--cl-desaturated-dark-cyan) url("bg-header-mobile.svg")
    no-repeat center bottom;
  background-size: cover;

  @media (min-width: 1024px) {
    background: var(--cl-desaturated-dark-cyan) url("bg-header-desktop.svg")
      no-repeat center bottom;
    background-size: cover;
    height: 170px;
  }
`;

function Header() {
  return <StyledHeader />;
}

export default Header;
