import styled from "styled-components";

export const Container = styled.div`
  grid-area: DH;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  background-color: var(--secondary);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const Input = styled.input`
  width: 22.4rem;

  padding: 0.6rem;
  border-radius: 0.3rem;

  font-size: 1.3rem;
  font-weight: 500;
  background-color: var(--tertiary);
  color: var(--symbol-dark);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
