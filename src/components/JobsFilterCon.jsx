import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Job from "./Job";
import data from "../data/data.json";
import { useFilter } from "../context/FilterContext";
import Filter from "./Filter";

const StyledJobsFilterCon = styled(Flex)`
  justify-content: center;
  /* background: var(--cl-light-grayish-cyan-background); */
  width: 100%;
  padding: 0 0 6rem;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledJobsCon = styled(Flex)`
  gap: 4rem;
  justify-content: center;
  padding-top: ${(props) => (props.$isFilter ? "0" : "4rem")};
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

function JobsFilterCon() {
  const { filterTags, filteredJobs } = useFilter();
  return (
    <StyledJobsFilterCon>
      {filterTags.length > 0 && <Filter />}
      <StyledJobsCon $isFilter={filterTags.length > 0}>
        {filterTags.length === 0
          ? data.map((job, index) => <Job job={job} key={index} />)
          : data
              .filter((job) => filteredJobs.includes(job.id))
              .map((job, index) => <Job job={job} key={index} />)}
      </StyledJobsCon>
    </StyledJobsFilterCon>
  );
}

export default JobsFilterCon;
