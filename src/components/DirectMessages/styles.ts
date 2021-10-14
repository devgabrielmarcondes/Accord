import styled from "styled-components";

export const Container = styled.div`
  grid-area: DM;

  display: flex;
  flex-direction: column;

  padding: 0.8rem 0.8rem 0.8rem 0.8rem;

  background-color: var(--secondary);

  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar);
    border-radius: 0.3rem;
  }

  ::-webkit-scrollbar-track {
    background: var(--secondary);
  }

  max-height: calc(100vh - 4.6rem);
  overflow-y: scroll;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
`;

export const Direct = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.6rem;

  > span {
    margin-bottom: 0.4rem;

    color: var(--gray);
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  margin-top: 0.2rem;
  padding: 0.5rem 0.4rem 0.5rem 0.4rem;

  cursor: pointer;
  border-radius: 0.4rem;

  background: transparent;

  &:hover {
    * h1,
    p {
      color: var(--white);
      opacity: 0.7;
    }

    background: var(--hover);
  }
`;

export const NameDesc = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin-left: 1.2rem;

    color: var(--gray);
    opacity: 0.7;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 400;
    font-size: 1.6rem;
  }

  > p {
    margin-left: 1.2rem;

    color: var(--gray);
    opacity: 0.7;

    font-weight: 400;
    font-size: 1.2rem;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background-color: var(--primary);
`;
