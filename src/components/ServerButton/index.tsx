import React from "react";

import {
  Button,
  DiscordLogo,
  PlusIcon,
  DownloadIcon,
  CompassIcon,
} from "./styles";

export interface Props {
  isHome?: boolean;
  name?: string;
  selected?: boolean;
  hasMentions?: number;
  hasNotifications?: boolean;
  isGreen?: boolean;
  isPlus?: boolean;
  isCompass?: boolean;
  isDownload?: boolean;
}

const ServerButton: React.FC<Props> = ({
  isHome,
  name,
  selected,
  hasMentions,
  hasNotifications,
  isGreen,
  isPlus,
  isCompass,
  isDownload,
}) => {
  return (
    <Button
      isHome={isHome}
      name={name}
      className={selected ? "active" : ""}
      hasMentions={hasMentions}
      hasNotifications={hasNotifications}
      isGreen={isGreen}
      isPlus={isPlus}
      isCompass={isCompass}
      isDownload={isDownload}
    >
      {isHome && <DiscordLogo />}
      {isPlus && <PlusIcon />}
      {isDownload && <DownloadIcon />}
      {isCompass && <CompassIcon />}
    </Button>
  );
};

export default ServerButton;
