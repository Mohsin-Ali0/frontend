import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChannelCard from "../../../components/ChannelCard/channelcard";

const ChannelSelector = ({ channels, setselectedChannel ,selectedChannel}) => {
  // const [selectedChannel, setSelectedChannel] = useState(null);

  const handleSelectChannel = (channel) => {
    console.log(channel, "channel");
    setselectedChannel(channel);
  };

  return (
    <Container>
      <h2>Select Your Channel</h2>
      <Row>
        {channels.map((channel) => (
          <Col key={channel.channelId} xs={6} md={6} lg={3}>
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
