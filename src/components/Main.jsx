import { styled } from "styled-components";
import Header from "./Header";
import JobsFilterCon from "./JobsFilterCon";

const StyledMain = styled.div`
  min-height: 100vh;
  background: var(--cl-light-grayish-cyan-background);
`;

function Main() {
  return (
    <StyledMain>
      <Header />
      <JobsFilterCon />
    </StyledMain>
  );
}

export default Main;
