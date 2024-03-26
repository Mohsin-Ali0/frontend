import React from "react";
import { LoginLayout } from "../../components/Layout/loggedinlayout/loginLayout";
import { ChannelList } from "./channelsLists/channelslist";

export const ChannelsScreen = () => {
  return (
    <div>
      <LoginLayout>
        <ChannelList />
      </LoginLayout>
    </div>
  );
};
