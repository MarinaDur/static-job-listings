import { styled } from "styled-components";

const StyledTag = styled.div`
  padding: 0.8rem;
  background: var(--cl-light-grayish-cyan-filter-tablets);
  border-radius: 5px;
  color: var(--cl-desaturated-dark-cyan);
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: var(--cl-desaturated-dark-cyan);
    color: var(--color-neutral-white);
  }

  &:active {
    background: var(--cl-cery-dark-grayish-cyan);
  }
`;

function Tag({ text, handleTag }) {
  return <StyledTag onClick={() => handleTag(text)}>{text}</StyledTag>;
}

export default Tag;
