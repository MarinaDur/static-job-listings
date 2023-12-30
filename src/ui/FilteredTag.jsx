import { styled } from "styled-components";
import Flex from "./Flex";
import Paragraphs from "./Paragraphs";

const StyledFilteredTagCon = styled(Flex)`
  background: var(--cl-light-grayish-cyan-filter-tablets);
  border-radius: 5px;
  flex-direction: row;
  gap: 0.2rem;
`;

const StyledFilteredTag = styled.div`
  padding: ${(props) => (props.$filter ? "0 0 0 0.8rem" : "0.8rem")};
`;

const StyledIconRemove = styled.div`
  background: var(--cl-desaturated-dark-cyan) url("icon-remove.svg") no-repeat
    center;
  width: 30px;
  height: 30px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--cl-cery-dark-grayish-cyan) url("icon-remove.svg")
      no-repeat center;
  }
`;

function FilteredTag({ text, handleDelete }) {
  return (
    <StyledFilteredTagCon>
      <StyledFilteredTag>
        <Paragraphs>{text}</Paragraphs>
      </StyledFilteredTag>
      <StyledIconRemove onClick={() => handleDelete(text)} />
    </StyledFilteredTagCon>
  );
}

export default FilteredTag;
