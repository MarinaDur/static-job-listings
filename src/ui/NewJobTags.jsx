import { styled } from "styled-components";

const NewJobTags = styled.div`
  padding: 0.6rem 0.8rem 0.4rem;
  border-radius: 30px;
  background: ${(props) =>
    props.$tagName === "new"
      ? "var(--cl-desaturated-dark-cyan)"
      : "var(--cl-cery-dark-grayish-cyan)"};
`;

export default NewJobTags;
