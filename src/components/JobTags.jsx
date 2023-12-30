import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Tag from "../ui/Tag";
import { useFilter } from "../context/FilterContext";

const StyledJobTags = styled(Flex)`
  flex-direction: row;
  gap: 1.2rem;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

function JobTags({ job }) {
  const { role, level, languages, tools } = job;
  const { handleAddFilterTag } = useFilter();
  return (
    <StyledJobTags>
      {role && <Tag text={role} handleTag={handleAddFilterTag} />}

      {level && <Tag text={level} handleTag={handleAddFilterTag} />}

      {languages.length > 0 &&
        languages.map((lang, index) => (
          <Tag key={index} text={lang} handleTag={handleAddFilterTag} />
        ))}

      {tools.length > 0 &&
        tools.map((tool, index) => (
          <Tag key={index} text={tool} handleTag={handleAddFilterTag} />
        ))}
    </StyledJobTags>
  );
}

export default JobTags;
