import styled, { css } from "styled-components";

import { Discord, Plus, Download, Compass } from "../../styles/icons";

import { Props } from ".";

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  position: relative;

  width: 4.8rem;
  height: 4.8rem;
  margin-bottom: 0.8rem;

  border-radius: 50%;

  background-color: ${({ isHome }) =>
    isHome ? "var(--discord)" : "var(--primary)"};

  cursor: pointer;
  transition: 180ms all ease;

  > img {
    width: 2.8rem;
    height: 2rem;

    background-color: var(--white);
  }

  &::before {
    width: 0.9rem;
    height: 0.9rem;
    position: absolute;
    left: -1.7rem;
    top: calc(50% - 0.45rem);
    background-color: var(--white);
    border-radius: 50%;
    content: "";
    display: ${({ hasNotifications }) =>
      hasNotifications ? "inline" : "none"};
  }

  &:hover::before {
    width: 0.8rem;
    height: 2rem;
    position: absolute;
    left: -1.65rem;
    top: calc(50% - 1rem);
    background-color: var(--white);
    border-radius: 0.4rem;
    content: "";
    display: inline;
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 1.6rem;
    padding: 0 0.4rem;
    position: absolute;
    bottom: -0.4rem;
    right: -0.4rem;
    border-radius: 1.2rem;
    border: 0.4rem solid var(--tertiary);
    text-align: right;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--white);
    content: "${({ hasMentions }) => hasMentions && hasMentions}";
    display: ${({ hasMentions }) =>
      hasMentions && hasMentions > 0 ? "inline" : "none"};
  }

  &:hover,
  &.active {
    border-radius: 1.6rem;
    background-color: ${({ isGreen }) =>
      isGreen ? "var(--online)" : "var(--discord)"};

    > svg {
      color: ${({ isGreen }) => (isGreen ? "var(--white)" : "var(--white)")};
    }
  }
`;

const iconCSS = css`
  width: 2.4rem;
  height: 2.4rem;

  color: var(--online);
`;

export const PlusIcon = styled(Plus)`
  ${iconCSS}
`;

export const DownloadIcon = styled(Download)`
  ${iconCSS}
`;

export const CompassIcon = styled(Compass)`
  ${iconCSS}
`;

export const DiscordLogo = styled(Discord)`
  width: 2.8rem;
  height: 2.4rem;

  color: var(--white);
`;
