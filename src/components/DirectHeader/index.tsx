import React from "react";

import { Container, Input } from "./styles";

const DirectHeader: React.FC = () => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Find a server or start a new conversation with your friends"
      />
    </Container>
  );
};

export default DirectHeader;
