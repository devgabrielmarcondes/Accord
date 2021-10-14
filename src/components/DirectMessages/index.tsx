import React from "react";

import Tab from "../Tab";

import { Container, Tabs, Direct, User, Avatar, NameDesc } from "./styles";

export interface RowProps {
  name: string;
  members?: number;
  isServer?: boolean;
}

const Row: React.FC<RowProps> = ({ name, members, isServer }) => {
  return (
    <User>
      <Avatar />

      <NameDesc>
        <h1>{name}</h1>
        <p>{isServer ? members + " members" : ""}</p>
      </NameDesc>
    </User>
  );
};

const DirectMessages: React.FC = () => {
  return (
    <Container>
      <Tabs>
        <Tab isFriend selected text="Friends" />
        <Tab isNitro text="Nitro" />
      </Tabs>

      <Direct>
        <span>Direct Messages</span>
        <Row name="Server Name" members={6} isServer />
        <Row name="Server Name" members={8} isServer />
        <Row name="xi_red" />
        <Row name="Planck" />
        <Row name="Archimedes" />
        <Row name="Server Name" members={10} isServer />
        <Row name="SunTzu" />
        <Row name="Hawking" />
        <Row name="Einstein" />
        <Row name="Server Name" members={3} isServer />
        <Row name="Server Name" members={7} isServer />
        <Row name="Server Name" members={3} isServer />
        <Row name="Server Name" members={2} isServer />
        <Row name="anxoety" />
        <Row name="Roadyz" />
      </Direct>
    </Container>
  );
};

export default DirectMessages;
