import React from "react";
import "./termsandconditions.css";
import { Container } from "react-bootstrap";
export const TermsandConditionContent = () => {
  return (
    <Container fluid>
      <h1 className="title pt-5 pb-5">VidTrial Terms Of Service Page</h1>
      <div className="terms-container">
        <h2>Terms of Service</h2>
        <p>
          These Terms of Service describe your rights and responsibilities as a
          VidTrial Customer (You) and the VidTrial service (We) while using our
          site <a href="https://www.VidTrial.com">https://www.VidTrial.com</a>{" "}
          to promote your videos on Google Ads (Promotion).
        </p>
        <p>
          Please read the Terms of Service carefully. By accepting, you certify
          that you are of legal age (which means you are either legally
          emancipated, or have reached the age of majority as defined in
          yourEmail: contact@VidTrial.com jurisdiction).
        </p>
        <ul className="custom-list">
          <li>
            <strong>Have Questions Regarding The ToS</strong>
            <p>
              If you have any questions regarding these Terms of Service, please
              contact us via email or online chat. Our team will assist you with
              all service features, terms, and privacy related queries. Your
              feedback is valuable for us, let us know how we can improve our
              solutions and features to deliver even better service, remember we
              are only a message away.
            </p>
          </li>
          <li>
            <strong>About ViTrail</strong>
            <p>
              US Office Address: VidTrial Inc, 2875 NE 191st ST., Suite 500,
              Aventura, FL 33180, USA
            </p>
            <p>Company Registration Number: [Insert Number Here]</p>
          </li>
          <li>
            <strong>How to reach out to our team</strong>
            <p>
              Got questions for us? Reach out to our team via the following
              channels for any:
            </p>
            <ul>
              <li className="inner-list">
                Email:{" "}
                <a href="mailto:contact@VidTrial.com">contact@VidTrial.com</a>
              </li>
              <li className="inner-list">Online Chat</li>
              <li className="inner-list">Phone: [Insert Phone Number]</li>
            </ul>
          </li>
          <li>
            <strong>Communications & Response Time</strong>
            <p>
              Our usual response time during office hours is 1 hour. Our
              official working hours are 9 AM to 6 PM (CET). In case we are out
              of office, response times can take up to 24 hours. In case we have
              not responded to your queries & questions within 48 hours, contact
              us immediately over our Live Chat service.
            </p>
            <p>
              Usually, we reply within one hour if you contact us between 8-22
              CET. However, on rare occasions, it can take up to 24 hours. If
              you fail to receive a reply in 24 hours, please contact us again.
            </p>
          </li>
          <li>
            <strong>What we do - Our Services</strong>
            <p>
              The VidTrial service is designed to promote your YouTube channel
              videos using the Google Ads network. Promotion packages start from
              $100 or €93. VAT is applicable if you live in an EU country.
            </p>
            <p>
              VidTrial guarantees generating views from Google Ad campaigns.
              Your views estimate is the minimum number you will receive as
              determined by the budget and length of promotion.
            </p>
            <p>
              VidTrial does not guarantee the number for interactions, such as
              new subscribers, likes, and comments.
            </p>
            <p>
              The promotion takes place on YouTube using their In-feed Video Ads
              (Discovery Ads) and TrueView In-Stream Ads.
            </p>
          </li>
          <li>
            <strong>When do promotions start</strong>
            <p>
              Ad promotions begin after at least one of your YouTube videos have
              passed the Google review process; this usually takes up to 48
              hours, and can sometimes take longer based on Google's review
              process. It primarily depends on the content and the targeting
              chosen. You can always contact us to get updates on the review
              process and what to do for future review processes.
            </p>
          </li>
          <li>
            <strong>How long are promotions executed</strong>
            <p>
              Generally, your promotion is executed for 6-8 days. Based on
              metrics, sometimes promotions are executed for longer intervals.
              The timeline for promotions depends on the targeting settings and
              content. Exact length of the promotions cannot be guaranteed.
            </p>
          </li>
          <li>
            <strong>Types of Targeting that can be chosen</strong>
            <p>
              You can set the targeting for your entire promotion, before &
              during the promotion. Targeting can be set by country, age,
              gender, and interests. In case you are not sure, we will do it for
              you before starting your promotion. We guarantee you that we never
              change the targeting you chose for countries, age, and gender.
            </p>
            <p>
              The targeting can be adjusted by interests to make your promotion
              perform better.
            </p>
            <p>
              We set the targeting for promotions by default and change it
              during the promotion if you choose automatic targeting.
            </p>
          </li>
          <li>
            <strong>Video selection</strong>
            <p>
              You can select the videos for your promotion manually, or we can
              choose them automatically. You can always add new videos to your
              promotion from your VidTrial dashboard.
            </p>
            <p>
              You can select all future videos from your channel to be added
              automatically to your promotion. You can turn this option on when
              creating your promotion or choose it later in your VidTrial
              dashboard.
            </p>
          </li>
          <li>
            <strong>Google ads review process</strong>
            <p>
              We can't influence the Google review process in any way. We can
              only make sure that your ads don't violate Google Ads policies.
            </p>
            <p>
              There is a possibility that not all of your videos will pass the
              Google review. When this happens, we will only promote the videos
              that have passed the Google review.
            </p>
          </li>
        </ul>
        <p style={{fontSize:12}}>Last update: April 23, 2024</p>
      </div>
    </Container>
  );
};
