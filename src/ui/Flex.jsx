import { styled } from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export default Flex;
