import React from "react";

import FriendIcon from "../../assets/images/FriendIcon.svg";
import ChatNew from "../../assets/images/ChatNew.svg";
import Inbox from "../../assets/images/Inbox.svg";
import HelpCircle from "../../assets/images/HelpCircle.svg";

import { Container, Actions, Title, Separator, Links, Icons } from "./styles";

const FriendsTab: React.FC = () => {
  return (
    <Container>
      <Actions>
        <img src={FriendIcon} alt="friend icon" />

        <Title>Friends</Title>

        <Separator />

        <Links>
          <button className="active">Available</button>
          <button>Everyone</button>
          <button>Pending</button>
          <button>Blocked</button>
          <button className="friend">Add friend</button>
        </Links>
      </Actions>

      <Icons>
        <img src={ChatNew} alt="New private chat" />

        <Separator />

        <img src={Inbox} alt="Inbox" />
        <img src={HelpCircle} alt="Help" />
      </Icons>
    </Container>
  );
};

export default FriendsTab;
