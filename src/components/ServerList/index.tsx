import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome selected name="Home" />
      <Separator />
      <ServerButton />
      <ServerButton hasMentions={5} />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasMentions={1} />
      <ServerButton isGreen isPlus />
      <ServerButton isGreen isCompass />
      <Separator />
      <ServerButton isGreen isDownload />
    </Container>
  );
};

export default ServerList;
