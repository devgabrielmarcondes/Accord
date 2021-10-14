import React from "react";

import ServerList from "../ServerList";
import DirectHeader from "../DirectHeader";
import DirectMessages from "../DirectMessages";
import UserInfo from "../UserInfo";
import FriendsTab from "../FriendsTab";
import FriendStatus from "../FriendStatus";
import ActiveNow from "../ActiveNow";

import { Grid } from "./styles";

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <DirectHeader />
      <DirectMessages />
      <UserInfo />
      <FriendsTab />
      <FriendStatus />
      <ActiveNow />
    </Grid>
  );
};

export default Layout;
