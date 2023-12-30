import { styled } from "styled-components";
import Flex from "../ui/Flex";
import Paragraphs from "../ui/Paragraphs";
import { useFilter } from "../context/FilterContext";
import FilteredTag from "../ui/FilteredTag";

const StyledFilter = styled(Flex)`
  flex-direction: row;
  width: 85%;
  background: var(--color-neutral-white);
  border-radius: 10px;
  padding: 2rem;
  justify-content: space-between;
  gap: 4rem;
  box-shadow: 3px 14px 49px -14px var(--cl-desaturated-dark-cyan);
  -webkit-box-shadow: 3px 14px 49px -14px var(--cl-desaturated-dark-cyan);
  -moz-box-shadow: 3px 14px 49px -14px var(--cl-desaturated-dark-cyan);
  max-height: 220px;
  overflow-y: scroll;
  transform: translateY(-50%);

  @media (min-width: 1024px) {
    overflow-y: auto;
  }
`;

const StyledFilterCat = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;
const StyledClear = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: 1024px) {
    margin-left: 5rem;
  }
`;

function Filter() {
  const { filterTags, clearAllTags, handleDeleteTag } = useFilter();
  return (
    <StyledFilter>
      <StyledFilterCat>
        {filterTags.map((tag, index) => (
          <FilteredTag text={tag} key={index} handleDelete={handleDeleteTag} />
        ))}
      </StyledFilterCat>
      <StyledClear onClick={clearAllTags}>
        <Paragraphs $type="clear">Clear</Paragraphs>
      </StyledClear>
    </StyledFilter>
  );
}

export default Filter;
