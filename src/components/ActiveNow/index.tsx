import React from "react";

import RobloxIcon from "../../assets/images/RobloxIcon.png";
import { Container, User, UserInfo, Actions, Avatar, NameDesc } from "./styles";

export interface FriendProps {
  name: string;
  status: string;
}

const Friend: React.FC<FriendProps> = ({ name, status }) => {
  return (
    <User>
      <UserInfo>
        <Avatar />

        <NameDesc>
          <h1>{name}</h1>
          <p>{status}</p>
        </NameDesc>
      </UserInfo>

      <Actions>
        <img src={RobloxIcon} alt="Roblox Icon" />
      </Actions>
    </User>
  );
};

const ActiveNow: React.FC = () => {
  return (
    <Container>
      <span>Active Now</span>

      <Friend name="Eu aí" status="Roblox - 44m" />
      <Friend name="Marcelo" status="Roblox - 6m" />
      <Friend name="Joojo" status="Roblox - 38m" />
    </Container>
  );
};

export default ActiveNow;
