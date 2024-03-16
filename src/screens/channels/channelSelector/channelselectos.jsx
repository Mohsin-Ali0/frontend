import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChannelCard from "../../../components/ChannelCard/channelcard";

const ChannelSelector = ({ channels }) => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleSelectChannel = (channel) => {
    setSelectedChannel(channel);
  };

  return (
    <Container>
      <h2>Select Your Channel</h2>
      <Row>
        {channels.map((channel) => (
          <Col key={channel.id} xs={6} md={6} lg={3}>
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
