import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChannelCard from "../../../components/ChannelCard/channelcard";

const ChannelSelector = ({
  channels,
  setselectedChannel,
  selectedChannel,
  ShowSelected,
}) => {
  // const [selectedChannel, setSelectedChannel] = useState(null);

  const handleSelectChannel = (channel) => {
    console.log(channel, "channel");
    setselectedChannel(channel);
    ShowSelected(true);
  };

  return (
    <Container>
      <h2>Select Your Channel</h2>
      <Row>
        {channels.map((channel) => (
          <Col key={channel.channelId} xs={12} md={6} lg={3} sm={12} xxs={12}>
            <ChannelCard
              channel={channel}
              isSelected={selectedChannel === channel}
              onSelect={handleSelectChannel}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ChannelSelector;
