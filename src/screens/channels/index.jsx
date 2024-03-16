import React from "react";
import { Banner } from "../home/banner/banner";
import Layout from "../../components/Layout/layout";
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
