import React from "react";

import Message from "../../assets/images/Message.svg";
import MoreVertical from "../../assets/images/MoreVertical.svg";

import {
  Container,
  User,
  UserInfo,
  Actions,
  Avatar,
  NameDesc,
  MessageIcon,
  MoreIcon,
} from "./styles";

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
        <MessageIcon>
          <img src={Message} alt="" />
        </MessageIcon>
        <MoreIcon>
          <img src={MoreVertical} alt="" />
        </MoreIcon>
      </Actions>
    </User>
  );
};

const FriendStatus: React.FC = () => {
  return (
    <Container>
      <span>Online - 9</span>
      <Friend name="Kim Jong-un" status="Status" />
      <Friend name="Kim Jong-un" status="Status" />
      <Friend name="Kim Jong-un" status="Status" />
      <Friend name="Kim Jong-un" status="Status" />
      <Friend name="Kim Jong-un" status="Status" />
      <Friend name="Kim Jong-un" status="Status" />
      <Friend name="Kim Jong-un" status="Status" />
      <Friend name="Kim Jong-un" status="Status" />
      <Friend name="Kim Jong-un" status="Status" />
    </Container>
  );
};

export default FriendStatus;
