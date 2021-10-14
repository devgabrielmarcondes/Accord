import styled from "styled-components";

export const Container = styled.div`
  grid-area: FS;

  display: flex;
  flex-direction: column;

  padding: 1.6rem 3rem;

  background-color: var(--primary);

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

  max-height: 100vh;
  overflow-y: scroll;

  > span {
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--symbol);

    margin-bottom: 0.8rem;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.4rem 1.6rem;

  border-top: 0.1rem solid #464a51;

  cursor: pointer;
  border-radius: 0.4rem;

  background: transparent;

  &:hover {
    background: #464a51;
    * button {
      background-color: var(--tertiary);
    }
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

  background-color: var(--secondary);
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

    font-weight: 400;
    font-size: 1.4rem;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const MessageIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--secondary);
  padding: 0.8rem;

  cursor: pointer;
  border-radius: 50%;
`;

export const MoreIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--secondary);
  padding: 0.8rem;
  margin-left: 1.6rem;

  cursor: pointer;
  border-radius: 50%;
`;
