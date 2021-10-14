import React from "react";

import FriendIcon from "../../assets/images/FriendIcon.svg";
import NitroIcon from "../../assets/images/NitroIcon.svg";

import { Button } from "./styles";

export interface Props {
  isFriend?: boolean;
  isNitro?: boolean;
  selected?: boolean;
  text: string;
}

const Tab: React.FC<Props> = ({ isFriend, isNitro, selected, text }) => {
  return (
    <Button
      isFriend={isFriend}
      isNitro={isNitro}
      text={text}
      className={selected ? "active" : ""}
    >
      {isFriend && <img src={FriendIcon} alt="person icon" />}
      {isNitro && <img src={NitroIcon} alt="nitro icon" />}
      {text && <span>{text}</span>}
    </Button>
  );
};

export default Tab;
