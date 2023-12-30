import { styled, css } from "styled-components";

const Paragraphs = styled.p`
  color: var(--cl-desaturated-dark-cyan);
  font-weight: 700;
  text-align: left;

  ${(props) =>
    props.$type === "new-ft" &&
    css`
      color: var(--cl-light-grayish-cyan-filter-tablets);
      font-size: 1.4rem;
    `}

  ${(props) =>
    props.$type === "pos-details" &&
    css`
      color: var(--cl-dark-grayish-cyan);
      font-weight: 500;
      display: inline;
      height: ${(props) => props.$height === "asterisk" && ".9rem"};
    `}

  ${(props) =>
    props.$type === "job-title" &&
    css`
      color: var(--cl-cery-dark-grayish-cyan);
      justify-content: left;
      cursor: pointer;

      &:hover {
        color: var(--cl-desaturated-dark-cyan);
      }

      @media (min-width: 1024px) {
        font-size: 2rem;
      }
    `}

  ${(props) =>
    props.$type === "clear" &&
    css`
      color: var(--cl-dark-grayish-cyan);
      cursor: pointer;
      &:hover {
        color: var(--cl-desaturated-dark-cyan);
        text-decoration: underline;
      }
    `}
`;

export default Paragraphs;
