import { styled } from "styled-components";
import Flex from "../ui/Flex";
import NewJobTags from "../ui/NewJobTags";
import Paragraphs from "../ui/Paragraphs";
import CompImg from "../ui/CompImg";

//Fir image in one column and text in the other
const StyledJobDesc = styled(Flex)`
  width: 100%;
  justify-content: left;
  padding-bottom: 2rem;
  flex-direction: row;
  border-bottom: 1px solid var(--cl-dark-grayish-cyan);
  position: relative;

  @media (min-width: 1024px) {
    border-bottom: none;
    padding-bottom: 0;
    gap: 2rem;
  }
`;

const StyledText = styled(Flex)`
  width: 100%;
  margin-top: 3.5rem;
  @media (min-width: 1024px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const StyledCompany = styled(Flex)`
  /* justify-content: left; */
  width: 100%;
  flex-direction: row;
  gap: 2.5rem;
  padding-bottom: 1rem;
`;

const JobTag = styled(Flex)`
  flex-direction: row;
  gap: 0.5rem;
`;

const JobTitle = styled(Flex)`
  width: 100%;
  align-items: flex-start;
  padding-bottom: 1.5rem;
`;

const PosDesc = styled(Flex)`
  width: 100%;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

function JobDesc({ job }) {
  const { company, logo, position, postedAt, contract, location } = job;
  return (
    <StyledJobDesc className="styledJobDesc">
      <CompImg logo={logo} />
      <StyledText className="styledText">
        <StyledCompany className="styledCompany">
          <Paragraphs>{company}</Paragraphs>
          <JobTag>
            {job.new && (
              <NewJobTags $tagName="new">
                <Paragraphs $type="new-ft">NEW!</Paragraphs>
              </NewJobTags>
            )}
            {job.featured && (
              <NewJobTags>
                <Paragraphs $type="new-ft">FEATURED</Paragraphs>
              </NewJobTags>
            )}
          </JobTag>
        </StyledCompany>
        <JobTitle className="jobTitle">
          <Paragraphs $type="job-title">{position}</Paragraphs>
        </JobTitle>
        <PosDesc className="posDesc">
          <Paragraphs $type="pos-details">{postedAt}</Paragraphs>
          <Paragraphs $type="pos-details" $height="asterisk">
            *
          </Paragraphs>
          <Paragraphs $type="pos-details">{contract}</Paragraphs>
          <Paragraphs $type="pos-details" $height="asterisk">
            *
          </Paragraphs>
          <Paragraphs $type="pos-details">{location}</Paragraphs>
        </PosDesc>
      </StyledText>
    </StyledJobDesc>
  );
}

export default JobDesc;
