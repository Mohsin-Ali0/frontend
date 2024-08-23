import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { Container } from "react-bootstrap";
import "./PrivacyPolicy.css";

export const PrivacypolicyContent = () => {
  const [data, setData] = useState({
    content: "",
    lastupdate: "",
  });

  useEffect(() => {
    getPrivacyPolicy("privacyPolicy");
  }, []);

  const getPrivacyPolicy = async (contentType) => {
    try {
      const res = await axios.get(
        "api/admin/configuration/getFrontConfigbyId",
        {
          params: { contentType },
        }
      );

      if (res.data && res.data.data) {
        const sanitizedContent = DOMPurify.sanitize(res.data.data.value || "");
        setData({
          content: sanitizedContent,
          lastupdate: res.data.data.lastUpdatedAt || "",
        });
      } else {
        console.error("No data found in the response");
      }
    } catch (error) {
      console.error("Error fetching terms and conditions:", error);
    }
  };
  return (
    <Container fluid>
      <h1 className="title pt-5 pb-5">VidTrial Privacy Policy</h1>

      <div className="privacy-policy">
        {/* Parse and render sanitized HTML content */}
        {parse(data.content)}
        <p style={{ fontSize: 12 }}>
          Last update: {new Date(data.lastupdate).toLocaleString()}
        </p>
      </div>

      {/* <div className="privacy-policy">
        <section className="section">
          <h2>About VidTrial</h2>
          <p>
            VidTrial is located at{" "}
            <a href="https://www.vidtrial.com">https://www.vidtrial.com</a> and
            is operated by:
          </p>
          <p>Address Here</p>
        </section>

        <section className="section">
          <h2>Collection & Uses of Information</h2>
          <p>
            VidTrial can’t provide the best services without collecting certain
            information about you. We guarantee that we only collect the
            information we need for supporting your account and running your
            campaigns.
          </p>
          <p>
            Here is the list of information we collect about you, your devices,
            and your videos:
          </p>
          <ol>
            <li>
              Your email address that will be used for logging in at VidTrial.
              We also will use this email address to contact you if you wish so.
            </li>
            <li>
              Your IP address to understand your location and to protect your
              account in the future.
            </li>
            <li>
              Your location based on your IP address. It helps us to provide you
              with the best support.
            </li>
            <li>
              The timezone of your device, so we can show you the right time in
              our reports.
            </li>
            <li>
              The language preferences of your device to show you VidTrial in
              the right language.
            </li>
            <li>
              If you register with us using your social media account, we
              receive your ID number, name, email address, and profile picture
              stored with this account.
            </li>
          </ol>
        </section>

        <section className="section">
          <h2>When you are using our services</h2>
          <ol>
            <li>
              When you create a promotion, we save the URL of the videos you
              have entered and URL of the YouTube channel you have entered or we
              found using the video’s URL.
            </li>
            <li>
              We collect the public information about your video channel (its
              URL, number of subscribers) and the public information about the
              video you want to promote (its title, number of views, likes,
              dislikes, comments, the length of the video).
            </li>
            <li>
              We also collect all information you have entered during the
              creation of the promotion.
            </li>
          </ol>
        </section>

        <section className="section">
          <h2>When you are paying for our services</h2>
          <p>
            Your payments are being processed by our partners, well-known global
            payment processors. We receive from them and store the following
            information about you:
          </p>
          <ol>
            <li>
              Your name or the name you have given to the payment processor.
            </li>
            <li>
              Your address or the address you have given to the payment
              processor.
            </li>
          </ol>
          <p>
            We use this information to create correct invoices for your
            payments. We don’t use this information in any other way.
          </p>
        </section>

        <section className="section">
          <h2>How we share, store, and protect your information</h2>
          <p>
            The information is stored securely on our servers in the EU. We
            follow strict security procedures in the storage and disclosure of
            your personal data, and to protect it against accidental loss,
            destruction or damage.
          </p>
          <p>
            Only our employees and software developers have access to your data.
            And only to the data which is necessary for their job. For example,
            your support manager will have access to your contact data such as
            your email address and the list of your videos.
          </p>
        </section>

        <section className="section">
          <h2>Your rights</h2>
          <ol>
            <li>
              You can always delete your account and remove all information we
              have collected about you from VidTrial. It can be made on the
              settings page in your VidTrial dashboard.
            </li>
            <li>
              You have the right to opt-out of marketing communications we send
              you at any time. You can exercise this right by clicking on the
              "unsubscribe" link in the marketing emails we send you or by
              updating your preferences in your VidTrial dashboard.
            </li>
          </ol>
        </section>

        <section className="section">
          <h2>Cookies</h2>
          <p>
            A cookie is a small piece of text that is sent to a visitor's
            browser by VidTrial. The browser provides this piece of text to the
            originating website when this visitor returns. A "persistent" cookie
            may be used to help save your settings and customizations across
            site visits.
          </p>
        </section>

        <section className="section">
          <h2>Children's Privacy</h2>
          <p>
            We do not permit users under the age of 18 to use VidTrial and
            promote their videos with us. It means we do not knowingly collect
            personal information from anyone under the age of 18.
          </p>
        </section>

        <section className="section">
          <h2>Changes to Privacy Policy</h2>
          <p>This policy may change over time.</p>
        </section>

        <section className="section">
          <h2>How to Contact Us</h2>
          <p>By email: contact@VidTrial.com</p>
          <p>
            Vid Trail Inc
            <br />
            Address Here
          </p>
        </section>
        <section className="section">
          <p style={{fontSize:12}}>Last update: April 23, 2024</p>
        </section>
      </div> */}
    </Container>
  );
};
