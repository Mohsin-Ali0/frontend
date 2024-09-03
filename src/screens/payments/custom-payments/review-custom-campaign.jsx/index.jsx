import React from "react";

import { Badge, Card, Col, Container, Image, Row } from "react-bootstrap";
import "../custom-payments.css";
import {
  ComponentBlock,
  ComponentContainer,
} from "../../../../components/componentBlock/component-Block";
import { decodeGoogleSpecialCharacters } from "../../../../utils/decodeSpecialchar";
import {
  LikesIcon,
  SubscribersIcon,
  ViewsIcon,
} from "../../../../assets/images";

const ReviewCustomCampaign = ({
  campaignData,
  BidDetails,
  queryClassName = "scroll__to__view",
}) => {
  const ReviewDetails = [
    {
      name: "Estimated Outcome",
      component: (
        <EstimatedDetails
          data={campaignData?.budget}
          BidDetails={BidDetails?.bidCost}
        />
      ),
    },
    {
      name: "Review the Channel",
      component: <ChannelReview data={campaignData?.channel} />,
    },
    {
      name: "Review the Videos",
      component: <VideosReview data={campaignData?.videos} />,
    },
    {
      name: "Review the Audience and Interests Targeting",
      component: <AudienceAndInterestReview data={campaignData?.audience} />,
    },
  ];
  return (
    <div
      className="d-flex flex-column"
      style={{
        flex: "1 1 auto",
        gap: "20px",
        padding: "20px",
      }}
    >
      <Container>
        {ReviewDetails.map((section, index) => (
          <Card
            key={index}
            className={queryClassName}
            style={{ marginBottom: "20px", backgroundColor: "#EEEFF7" }}
          >
            <Card.Header>
              <h4>{section.name}</h4>
            </Card.Header>
            <Card.Body style={{ marginTop: 10 }}>{section.component}</Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default ReviewCustomCampaign;

const EstimatedDetails = ({ data, BidDetails }) => {
  const campaign_amount_aftertax =
    parseFloat(data?.amount) -
    parseFloat(data?.percentage.custom_percentage_amount);

  return (
    <Row className="gy-4">
      <Col md={4}>
        <ComponentBlock title="Views">
          <Col className="d-flex justify-content-center align-items-center">
            <Image width={32} height={20} src={ViewsIcon} />
            <p className="m-2">
              {Math.floor(
                parseFloat(campaign_amount_aftertax) /
                  parseFloat(BidDetails?.interactions?.hiCpv?.value)
              )}
              ~
              {Math.floor(
                parseFloat(campaign_amount_aftertax) /
                  parseFloat(BidDetails?.interactions?.loCpv?.value)
              )}
            </p>
          </Col>
        </ComponentBlock>
      </Col>
      <Col md={4}>
        <ComponentBlock title="Subscribers">
          <div className="d-flex justify-content-between align-items-center">
            <Image width={32} height={32} src={SubscribersIcon} />
            <p className="m-2">
              {Math.floor(
                parseFloat(campaign_amount_aftertax) /
                  parseFloat(
                    BidDetails?.interactions?.hiCostPerSubscriber?.value
                  )
              )}
              ~
              {Math.floor(
                parseFloat(campaign_amount_aftertax) /
                  parseFloat(
                    BidDetails?.interactions?.loCostPerSubscriber?.value
                  )
              )}
            </p>
          </div>
        </ComponentBlock>
      </Col>
      <Col md={4}>
        <ComponentBlock title="Likes">
          <div className="d-flex justify-content-between align-items-center">
            <Image width={32} height={32} src={LikesIcon} />
            <p className="m-2">
              {Math.floor(
                parseFloat(campaign_amount_aftertax) /
                  parseFloat(BidDetails?.interactions?.hiCostPerLike?.value)
              )}
              ~
              {Math.floor(
                parseFloat(campaign_amount_aftertax) /
                  parseFloat(BidDetails?.interactions?.loCostPerLike?.value)
              )}
            </p>
          </div>
        </ComponentBlock>
      </Col>
    </Row>
  );
};

const ChannelReview = ({ data }) => (
  <ComponentBlock title="Selected Channel" style={{ padding: "20px" }}>
    <Row className="align-items-center">
      <Col xs={12} md={3} className="align-items-center text-center">
        <Image
          src={data?.thumbnail}
          rounded
          style={{ width: "100px", height: "100px" }}
        />
      </Col>
      <Col xs={12} md={1}>
        <div
          className="d-none d-md-block"
          style={{ borderLeft: "1px dashed", height: "100px" }}
        />
      </Col>
      <Col xs={12} md={8} className="text-left">
        <span>
          <p>Channel Name: {decodeGoogleSpecialCharacters(data?.title)}</p>
          <p>Subscribers: {data?.subscribersCount}</p>
          <p>Description: {decodeGoogleSpecialCharacters(data?.description)}</p>
        </span>
      </Col>
    </Row>
  </ComponentBlock>
);

const VideosReview = ({ data }) => (
  <ComponentBlock title="Selected Videos" style={{ padding: 40 }}>
    <Row>
      {data?.map((video, index) => (
        <React.Fragment key={index}>
          <Col xs={12}>
            <Row className="align-items-center">
              <Col xs={12} md={3} className="align-items-center text-center">
                <Image
                  src={video?.thumbnail}
                  rounded
                  width={150}
                  height={100}
                />
              </Col>
              <Col xs={12} md={1}>
                <div
                  className="d-none d-md-block"
                  style={{ borderLeft: "1px dashed", height: "100px" }}
                />
              </Col>
              <Col xs={12} md={8}>
                <p>
                  Video Title: {decodeGoogleSpecialCharacters(video?.title)}
                </p>
              </Col>
            </Row>
          </Col>
          {index < data?.length - 1 && (
            <Col xs={12}>
              <hr style={{ borderStyle: "dashed" }} />
            </Col>
          )}
        </React.Fragment>
      ))}
    </Row>
  </ComponentBlock>
);

const AudienceAndInterestReview = ({ data }) => (
  <>
    {data?.automated ? (
      <ComponentContainer>
        <ComponentBlock title="Automated Targeting">
          <Badge className="custom-review-badge text-wrap">
            Automatic Targeting will use YouTube Ads Algorithm to show your
            videos in the recommended list only to interested viewers that were
            watching similar content worldwide.
          </Badge>
        </ComponentBlock>
      </ComponentContainer>
    ) : (
      <ComponentContainer>
        {data?.countries.length > 0 && (
          <ComponentBlock title="Selected Countries">
            <RenderChips data={data?.countries} type="countries" />
          </ComponentBlock>
        )}
        {data?.age.length > 0 && (
          <ComponentBlock title="Selected Age">
            <RenderChips data={data?.age} type="age" />
          </ComponentBlock>
        )}
        {data?.gender.length > 0 && (
          <ComponentBlock title="Selected Gender">
            <RenderChips data={data?.gender} type="gender" />
          </ComponentBlock>
        )}
        {data?.intrest.length > 0 && (
          <ComponentBlock title="Selected Interests">
            <RenderChips data={data?.intrest} type="intrest" />
          </ComponentBlock>
        )}
        {data?.tags.length > 0 && (
          <ComponentBlock title="Selected Tags">
            <RenderChips data={data?.tags} type="tags" />
          </ComponentBlock>
        )}
      </ComponentContainer>
    )}
  </>
);

const RenderChips = ({ data, type }) => {
  switch (type) {
    case "countries":
      return data?.map((option, index) => (
        <Badge className="custom-review-badge" key={index}>
          {option}
        </Badge>
      ));
      break;
    case "age":
      const sortedData = data?.sort((a, b) => {
        const ageOrder = {
          "18-24": 1,
          "25-34": 2,
          "35-44": 3,
          "45-54": 4,
          "55-64": 5,
          "65+": 6,
        };
        return (ageOrder[a] || 0) - (ageOrder[b] || 0);
      });
      return sortedData?.map((age, index) => (
        <Badge key={index} className="custom-review-badge">
          {age}
        </Badge>
      ));
      break;
    case "gender":
      return <Badge className="custom-review-badge">{data}</Badge>;
    case "intrest":
      return data?.map((item, index) => (
        <Badge key={index} className="custom-review-badge">
          {item}
        </Badge>
      ));
    case "tags":
      return data?.map((item, index) => (
        <Badge key={index} className="custom-review-badge">
          {item}
        </Badge>
      ));
    default:
      break;
  }
};
