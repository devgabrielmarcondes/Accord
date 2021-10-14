import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  width: 22.4rem;
  height: 4.2rem;
  margin-top: 0.2rem;

  background-color: var(--secondary);

  > img {
    margin-left: 0.6rem;
  }

  > span {
    margin-left: 1.2rem;
    color: ${({ isNitro }) => (isNitro ? "var(--gray)" : "var(--white)")};
    font-size: 1.4rem;
    font-weight: 500;
  }

  &:hover {
    background-color: ${({ selected }) =>
      selected ? "var(--selected)" : "var(--hover)"};
  }

  transition: background 100ms;

  &.active {
    background-color: var(--selected);
  }

  cursor: pointer;
  border-radius: 0.5rem;
`;
