import React from "react";
import Card from "react-bootstrap/Card";
import "./channelcard.css"; // Make sure to create this CSS file
import { Image } from "react-bootstrap";
import { YoutubeLogoIcon } from "../../assets/images";

const ChannelCard = ({ channel, isSelected, onSelect }) => {
  // Apply 'selected' class if the channel is selected
  const cardClass = isSelected ? "channel-card selected" : "channel-card";

  return (
    <Card className={`${cardClass} p-4`} onClick={() => onSelect(channel)}>
      <div className="cardImage">
        <Image
          variant="top"
          src={channel.thumbnail}
          roundedCircle
          // onError={({ currentTarget }) => {
          //   currentTarget.onerror = null; // prevents looping
          //   currentTarget.src = "../../assets/images/youtube-views-icon.png";
          // }}
        />
      </div>

      <Card.Body>
        <Card.Title>{channel.title}</Card.Title>
        <Card.Text>{channel.subscribersCount} Subscribers</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ChannelCard;
