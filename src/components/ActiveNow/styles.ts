import styled from "styled-components";

export const Container = styled.div`
  grid-area: AN;

  display: flex;
  flex-direction: column;

  padding: 1.6rem 0.8rem 1.6rem 1.6rem;

  background-color: var(--primary);

  overflow-y: scroll;

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

  > span {
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);

    margin-bottom: 1.6rem;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.8rem 1.6rem;
  margin-top: 0.8rem;

  cursor: pointer;
  border-radius: 0.8rem;

  background-color: var(--secondary);

  &:hover {
    background-color: var(--pseudo);
  }
`;

export const UserInfo = styled.div`
  display: flex;
`;

export const Actions = styled.div`
  display: flex;
`;

export const Avatar = styled.div`
  flex-shrink: 0;

  width: 3.2rem;
  height: 3.2rem;

  border-radius: 50%;

  background-color: #c4c4c4;
`;

export const NameDesc = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    margin-left: 1.2rem;

    color: var(--white);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 500;
    font-size: 1.6rem;
  }

  > p {
    margin-left: 1.2rem;

    color: var(--gray);

    text-transform: uppercase;
    font-weight: 200;
    font-size: 1.4rem;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
