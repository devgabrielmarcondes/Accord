import styled from "styled-components";

export const Container = styled.div`
  grid-area: FT;
  z-index: 1;
  justify-content: space-between;

  display: flex;
  align-items: center;
  padding: 0 0.8rem;

  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0rem 0.1rem 0rem 0rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 0.8rem;

  font-size: 1.6rem;
  font-weight: bold;

  color: var(--white);
`;

export const Separator = styled.div`
  height: 2.4rem;
  width: 0.1rem;

  background-color: var(--white);
  opacity: 0.2;

  margin: 0 1.3rem;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  > button {
    border-radius: 0.4rem;

    padding: 0.2rem 0.8rem;
    margin: 0 0.8rem;

    color: var(--gray);

    font-size: 1.6rem;

    cursor: pointer;

    &:hover {
      background-color: #3a3d44;
      color: var(--white);
      opacity: 0.7;
    }
  }

  > button.active {
    background-color: #3e4349 !important;
    color: var(--white);
    opacity: 1 !important;
  }

  > button.friend {
    background-color: var(--online);
    color: var(--white);
    opacity: 1 !important;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > img:nth-child(1) {
    margin-left: 0 !important;
  }

  > img {
    margin-left: 1.2rem;

    color: var(--white);
    opacity: 0.7;
    cursor: pointer;

    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
