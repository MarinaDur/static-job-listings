import { styled } from "styled-components";
import Flex from "../ui/Flex";
import JobDesc from "./JobDesc";
import JobTags from "./JobTags";

const StyledJob = styled(Flex)`
  background: var(--color-neutral-white);
  width: 85%;
  border-radius: 10px;
  border-left: ${(props) =>
    props.$featured && "5px solid var(--cl-desaturated-dark-cyan)"};
  padding: 0 2rem 2.5rem;
  gap: 2rem;
  box-shadow: 3px 14px 49px -14px var(--cl-desaturated-dark-cyan);
  -webkit-box-shadow: 3px 14px 49px -14px var(--cl-desaturated-dark-cyan);
  -moz-box-shadow: 3px 14px 49px -14px var(--cl-desaturated-dark-cyan);

  @media (min-width: 1024px) {
    padding: 3rem;
  }
`;

function Job({ job }) {
  const { featured } = job;
  return (
    <StyledJob $featured={featured}>
      <JobDesc job={job} />
      <JobTags job={job} />
    </StyledJob>
  );
}

export default Job;
