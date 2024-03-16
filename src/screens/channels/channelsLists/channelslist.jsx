import React, { useState } from "react";
import "./channelslist.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  ChannelDataLogo,
  TwoIcon,
  YoutubeLogoIcon,
} from "../../../assets/images";
import { ChannelsLogo } from "../../../assets/svg";
import ChannelSelector from "../channelSelector/channelselectos";
import "../../../assets/images/YoutubeLogo.png";
import axios from "axios";

let Data = [
  {
    id: "channel1",
    name: "Nas - Des Frenca",
    subscribers: "123K",
    image: TwoIcon,
  },
  {
    id: "channel2",
    name: "Nas - Des Frenca",
    subscribers: "123K",
    image: TwoIcon,
  },
  {
    id: "channel3",
    name: "Nas - Des Frenca",
    subscribers: "123K",
    image: TwoIcon,
  },
  {
    id: "channel4",
    name: "Nas - Des Frenca",
    subscribers: "123K",
    image: TwoIcon,
  },
  {
    id: "channel5",
    name: "Nas - Des Frenca",
    subscribers: "123K",
    image: TwoIcon,
  },
  {
    id: "channel6",
    name: "Nas - Des Frenca",
    subscribers: "123K",
    image: TwoIcon,
  },
  {
    id: "channel7",
    name: "Nas - Des Frenca",
    subscribers: "123K",
    image: TwoIcon,
  },
  {
    id: "channel8",
    name: "Nas - Des Frenca",
    subscribers: "123K",
    image: TwoIcon,
  },
];
let Channels = [
  {
    id: "UCB_qr75-ydFVKSF9Dmo6izg",
    title: "FORMULA 1",
    description:
      "The home of risk takers, late brakers and history makers! 💫\n\n2024 BEGINS: BAHRAIN 🇧🇭 29 FEBRUARY - 2 MARCH\n",
    thumbnail:
      "https://yt3.ggpht.com/tyLW5LsJGwr4ViM30OeYbuLcu_MXfpRzP8y-X9_aKfTNJeMFHmnNbPyxxhaFDA9NRgwEu9mT-g=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "10.1M",
  },
  {
    id: "UCYiLX0kW-HROiyVaY72PwZA",
    title: "Stop & Go F1",
    description: "Videos Discussing The Wonderful World of Formula 1",
    thumbnail:
      "https://yt3.ggpht.com/ncdVQKwxoZwfhaSpLwB7MePztu2e9q7PSCP6e_9NC5bT_iFpA2gRFhc84K1Za-Eg5OkMAfCptQ=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "1.7K",
  },
  {
    id: "UC9nXSzh9ycaE_OmXWqCL3xw",
    title: "F1 Shorts",
    description:
      "I make the best formula 1 shorts you've ever seen! I cover everything from history, memes, rivalries, to news, theories and predictions.",
    thumbnail:
      "https://yt3.ggpht.com/ytc/AIdro_njwAvzasN02RWzBJsY9IC1TkwZGf7FfoGz4eHM=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "210.0K",
  },
  {
    id: "UCHZoXt-0rB1VXc92NwYp7KA",
    title: "NewsF1 Motorsport e Automotive",
    description:
      "Newsf1 -  Motorsport e Automotive\n\nNotizie sulla formula 1 e Tecnica -- News formula one \nInterviste, retroscena, curiosità e anteprime dal mondo della Formula 1.",
    thumbnail:
      "https://yt3.ggpht.com/G7oafA6nU0amEiiO2whOCnw8Ctm9ivGvI5H03pzy6usa8mRYh6KVBJJyLOPi012c0Xlaud34oA=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "20.0K",
  },
  {
    id: "UCXHm4g2vzvFYgZUL8PETqKw",
    title: "BOTECO F1",
    description:
      "Primeiro canal brasileiro especializado em Fórmula 1 do YouTube.\n\nMissão: Nosso compromisso é sempre falar de F1 da forma mais coerente e informal possível, com responsabilidade com os conteúdos publicados e ao mesmo tempo, com a alegria de fãs que fazem de seus dias mais felizes com informações e coberturas do esporte à motor mais respeitado de todos os tempos.\n\nObjetivo: Renovar a abordagem automobilística no Brasil e levar a beleza do esporte para novas gerações.\n\nThis website is unofficial and is not associated in any way with the Formula One group of \ncompanies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and \nrelated marks are trade marks of Formula One Licensing B.V.",
    thumbnail:
      "https://yt3.ggpht.com/bdkTlswBix_p45hg7TwmopJEi_c-wfz1R3y3oeIiqxfEvW2enqM-ZSuAEJZdzTUsYNmCHcam2mw=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "233.0K",
  },
  {
    id: "UC-SUZwyfOJwJVnQ-Cb7d3Vg",
    title: "Untold F1 ",
    description:
      "I make Racing Videos you don't wanna miss!!!\n\nMy goal is to create Unique high-quality videos, explaining the most fascinating stories that ever happened in Racing History.\n\nAll of the videos on this channel are created by my team and I. By using After Effects, Premiere Pro, and Photoshop, we create unique content with the help of background musics and Voiceover, in order to create cinematic videos for all you guys. \nSo, enjoy the best Reactionary, Narrative and educational Stories you'll ever see about racing.\n",
    thumbnail:
      "https://yt3.ggpht.com/1SSg8XiAySCjdXAIDKnpaCst0dos-CHKRX9ZHfqEw_bNHCzsviU1E6frFA7YFfwEnWkjgA6tHQ=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "37.3K",
  },
  {
    id: "UC3kxJQ9RfaS5CKeYbbFMi4Q",
    title: "Sky Sports F1",
    description:
      "Welcome to the home of Sky Sports F1 on YouTube!\n\nSubscribe to the channel for live shows, race action, exclusive driver interviews, in depth analysis and more!\n\nClick the link to subscribe and ensure you never miss an upload  ► http://bit.ly/SubscribeSkyF1\nAdd the Sky Sports F1 TV channel to your Sky package by clicking here ► http://bit.ly/WatchSkyF1\n\nAnd make sure you're following across social media and the web:\n►FACEBOOK: http://www.facebook.com/SkySportsF1\n►INSTAGRAM: http://www.instagram.com/SkySportsF1\n►TWITTER: https://www.twitter.com/SkySportsF1\n►WEBSITE: https://www.skysports.com/f1",
    thumbnail:
      "https://yt3.ggpht.com/ytc/AIdro_mFU8Vi-kNvGvvJyh95JFmvGgmRtc2WYT4dI2UH6Q=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "734.0K",
  },
  {
    id: "UCXQBAleLZGKLSfNrqsjDOyg",
    title: "F1 REVERSE",
    description:
      "Welcome to F1 REVERSE! We create videos about F1, F1 Drivers and more. If you have any business inquiries, copyright matters or other inquiries please contact us at: formula1reverse@gmail.com\n",
    thumbnail:
      "https://yt3.ggpht.com/5aMdoLUqdZgDltQl-0r_eYU6Fg3Vf1oZk1acKxYPdEM92SEMzplwIKbk0gQxwUQ3R66o2tNXjHc=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "63.4K",
  },
  {
    id: "UCEJXYWVqEI-UM0L0zmOQPQw",
    title: "SPORTS FOR F1",
    description:
      "Apaixonado por fórmula 1, venha acompanhar e debater notícias, estatísticas, fatos, curiosidades e comentários sobre tudo o que rola na Fórmula 1.\nVem com a gente! Vem pro SPORTS FOR... ; )\n\nParcerias: f1plusbrasil@gmail.com\n\n#fórmula1 #formula12024  #f1 #f12024  \n",
    thumbnail:
      "https://yt3.ggpht.com/u51qrtdJKl8PE5MeAOrk9JV_76hvHPHNTMbjV54NLPwSBl7nMte-D05sps4rxeG55F0vqTgR=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "37.1K",
  },
  {
    id: "UC4uyjMBsU1K4XfckwDKeVyA",
    title: "F1 Race Day",
    description:
      "Welcome to F1 Race Day your ultimate destination for News, updates, rumors, drivers, team developments and more!\n\nFor business inquiries, copyright matters or other inquiries please contact us at: f1racedaycontact@gmail.com\n",
    thumbnail:
      "https://yt3.ggpht.com/GzQsiB8gV0E9kcFNLrtcIFb-JMBq6Yhxh0_EFBVhaalLeNdjSbjwhWCV0GY6Z345XfjB2bTiaw=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "7.6K",
  },
  {
    id: "UCMQ7Gx6v-pQy_gsRoMJYzOA",
    title: "Sky Sport F1",
    description:
      "Goditi tutta la Formula 1® in diretta esclusiva su Sky. Prova Sky Q a 9€ per 30 giorni 🔗 http://tiny.cc/ytdes\n",
    thumbnail:
      "https://yt3.ggpht.com/bKydV-9WEUOhZf1o-yGZ9V4nxO3iR9qZjz2ka6TUNBM0F7_w-wcsAEseY7RAPw8ypANsDoSx1w=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "129.0K",
  },
  {
    id: "UCoeN_SAlvcBWaOB0eJ312eQ",
    title: "IcEbEAr F1",
    description:
      "Ezen a csatornán sok F1 23-es videó lesz látható. Többek között Live videók. Ranked, unranked, event és Time Trial. Ha lesz rá kereslet akkor karrier versenyek is lesznek fent.\n\nSzámítógépem:\nAsus Rog Helios Ház\nAsus Rog z390-e gaming Alaplap\nIntel i9-9900k 5.0 ghz OC Processzor\nAsus Rog Strix LC360 AIO vízhűtés\nAsus Rog Strix 3080 OC Videókártya\nG.Skill Trident Z 3200mhz RGB 32gb Ram\nAsus Rog Thor 850p Táp\nAsus Rog Strix PG248Q Monitor\nSamsung SMBX2231 Másodlagos Monitor\nSteelseries Arctis 7+ Fejhallgató\nLogitech G502 Egér\nAsus Rog Strix Claymore II.  Billentyűzet\nFanatec DD2 Base\nFanatec Clubsport 2.5x Kormány\nFanatec CSL V2 Pedál\nPlayseat F1 Intelligence ülés",
    thumbnail:
      "https://yt3.ggpht.com/ytc/AIdro_lXRWvtITTjaTWmFeyOT6Pvw0HWgYApUhmIieV3eQ=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "743",
  },
  {
    id: "UCjZbtDJzJpUqrjdz5oiuBRw",
    title: "F1 Unleashed",
    description:
      "Welcome to F1 Unleashed, your ultimate destination for everything Formula 1! 🏁\n\nGet ready to dive deep into the world of Formula 1 racing with us. From the latest news straight from the pit lanes to exclusive behind-the-scenes insights, we're your one-stop source for all things F1. Whether you're a die-hard fan or just curious about the fast-paced world of motorsport, we've got you covered.\n\nJoin us on this exhilarating journey through the twists and turns of the Formula 1 season. Our team of dedicated experts is here to bring you the most up-to-date information, thrilling race analyses, and interviews with the key players in the F1 universe.\n\nDon't miss out on any of the action – hit that subscribe button and ring the notification bell to stay in the loop. Whether you're a seasoned enthusiast or a newcomer to the F1 scene, our channel is your ticket to the heart of Formula 1. 🏎️💨\n\nStay informed, stay entertained, and stay with F1 Unleashed!\n",
    thumbnail:
      "https://yt3.ggpht.com/7JvAniqjnxVwjxOWVrwdCnJAJmdMNlHbqXfl9Zh0pMFd632sCuZ-U6EgWnyIebPjRp2-4d-xFw=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "3.9K",
  },
  {
    id: "UC2psrEXlvCPupHSk4jLkmbA",
    title: "F1 RETRO",
    description: "All things F1. ",
    thumbnail:
      "https://yt3.ggpht.com/Op1IR1bBp5uyN9FC0XsK-zECSIfEow08Yg0s_cX9M85vpyk-VsOAcmEk9RK_-H-EFRnByq4CoA=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "4.7K",
  },
  {
    id: "UCmaItsxNPLEQ-NIjv5gPScg",
    title: "Sky Sport Formel 1",
    description:
      "Hallo und herzlich willkommen auf dem offiziellen Formel 1 Kanal von Sky Sport Deutschland. Hier findet Ihr alle Highlights der schnellsten Rennserie der Welt. Darüber hinaus zeigen wir Euch interessante Features und alles, was das Motorsportherz höher schlagen lässt. Abonniert jetzt unseren neuen Formel 1 YouTube-Kanal und verpasst kein Video mehr!\n\nImpressum:\nSky Deutschland Fernsehen GmbH & Co. KG\nMedienallee 26\n85774 Unterföhring\nDeutschland\nTel.: 089/9958-02\nimpressum@sky.de\n\nAmtsgericht München, HRA 80699\nUStIdNr.: DE 118 376 113\n\nAufsichtsbehörde nach § 5 TMG Abs. 1 Nr. 8: Bayerische Landeszentrale für neue Medien\n",
    thumbnail:
      "https://yt3.ggpht.com/QSpKYw8w4paK-b8mrOOQFU2bQYBEKLjVkcPPlmOZZYC55MxfCM8BSh8is84dN9aGX-b8IidzXw=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "88.1K",
  },
  {
    id: "UCsc_vaQj7XgAsdtIxes5EXA",
    title: "津川哲夫のF1グランプリボーイズ  Tetsuo's F1 Grand Prix Boys",
    description:
      "F1大好きおじいちゃんの津川哲夫のチャンネル。\nF1レースのあんなことやこんなこと、ドライバーやエンジン話まで、F1を語り尽くします！\n\nF1 favorite grandfather Tetsuo Tsugawa's channel.\nWe will talk about F1 such things as F1 racing, such things, drivers and engines!\n\n\n",
    thumbnail:
      "https://yt3.ggpht.com/JWLSLoVbn8C0SxgLT0i8L-U0rMXy9QhExsusRzNXBeoRuh8AQ_IP003VmklFa3Unq6tCYI5qxQ=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "43.7K",
  },
  {
    id: "UCsEbkolOt86pcfCvZBQ_V-Q",
    title: "Late Braking F1 Podcast ",
    description:
      "Welcome to Late Braking F1 - Sam, Ben and Harry here! We are long-time friends and Formula 1 fans, and together host the Late Braking F1 Podcast. We create twice weekly videos covering all the latest in the world of F1 from breaking news to race reviews, with a mixture of knowledge, debate, and fun.\n\n• Listen to our PODCAST we release episodes every Wednesday and Sunday - search Late Braking F1 wherever you get your podcasts!\n• Follow us on SOCIALS for all sorts of F1 content! @latebrakingf1 on Instagram, X (Twitter) and TikTok\n• Support us on PATREON for exclusive content - @latebrakingf1 (link below)\n• Wanna get in touch? You can EMAIL us at podcast@latebraking.co.uk\n",
    thumbnail:
      "https://yt3.ggpht.com/jwzEKy81IVGk4Rb8GJSEOjfqo2AtCA1nUuOlXGiJYuhfgjCM5OE_xRh9XVByPCbSTN0mDR8iHg=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "5.4K",
  },
  {
    id: "UCZDb1s_gORJHxTE0vwIKaiw",
    title: "F1 Seba",
    description:
      "F1 fan\nPresets/Scp’s - https://payhip.com/F1Seba \n18 - Australian\n#stopf1toxicity\n",
    thumbnail:
      "https://yt3.ggpht.com/5KXAT7G6b7etY56uzvvaXHwRtYkJZZ0EredgmG9LAXiQtQZy4n75Pwb-G5fpC0053ILA61NoNQg=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "24.1K",
  },
  {
    id: "UCy2wPseASvvs0-GrvIMT2fQ",
    title: "Primeira Fila F1",
    description:
      "Canal para falar de histórias, curiosidades e informação sobre esse esporte maravilhoso, que é o automobilismo.\n\nVídeos todas as segundas, quartas, sextas e domingos. Sempre às 20h.\n\nSejam bem-vindos!\n",
    thumbnail:
      "https://yt3.ggpht.com/qghnuzdgdln_O5gl7s8BHPT6nRTnHW38OqsFlSVeQoI7PBlFLTm7mPmvtSVd893yiLk9BYxZ0g=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "33.4K",
  },
  {
    id: "UCqT_OQ0z27waRXhbWxHT6Ow",
    title: "F1® Manager",
    description:
      "Create a team and lead them to glory in F1® Manager 24. Coming this Summer.\n\nLearn more & wishlist now: https://fron.dev/YT-F1M24-Announce\n\nCheck out our other channels:\n\nWebsite – https://f1manager.com\nTwitter – https://twitter.com/F1manager\nTikTok - https://www.tiktok.com/@f1manager\nInstagram - https://www.instagram.com/f1manager/\nFacebook - https://facebook.com/f1managergame\n",
    thumbnail:
      "https://yt3.ggpht.com/xhcf4eRhA75k-PaBJ0q1miimLHQMDGXcMTUo_uGbNwfaIeX0K9UD3mfOB2ndjmXQxsquZ5rkH08=s800-c-k-c0x00ffffff-no-rj",
    subscribersCount: "32.4K",
  },
];
export const ChannelList = () => {
  const [formData, setFormData] = useState({});
  const [Channels, setChannels] = useState([]);

  const SearchChannel = async () => {
    await axios
      .post("/channel", formData)
      .then((response) => {
        console.log(response, "resss");
        setFormData({ ...formData, message: response.data.messege });
        setChannels(response.data.data);
      })
      .catch((error) => {
        console.log(error, "cathchhhh");
        // document.getElementById(
        //   "response"
        // ).innerHTML = `<div class="alert alert-danger"role="alert"><strong>Opss! </strong>${error.response.data.message}</div>`;
        // setLoad(false);
      });
  };

  return (
    <React.Fragment>
      <section>
        <Container>
          {/* Input CONTAINER */}
          <Row
            className="justify-content-between align-items-center p-3"
            style={{ backgroundColor: "red" }}
          >
            <Col
              lg={8}
              // style={{ backgroundColor: "blue" }}
            >
              Enter the name of your YouTube channel or its link
              <Row
                className="justify-content-around align-items-center"
                // style={{ backgroundColor: "black" }}
              >
                <Col
                  lg={8}
                  md={8}
                  sm={8}
                  //   style={{ backgroundColor: "purple" }}
                  className="align-items-center justify-content-center"
                >
                  <Form style={{ width: "100%" }}>
                    <InputGroup>
                      <InputGroup.Text
                        style={{
                          backgroundColor: "white",
                          borderRight: "none",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faYoutube}
                          style={{ color: "#FF0000" }}
                          size="2x"
                        />
                      </InputGroup.Text>
                      <FormControl
                        style={{
                          backgroundColor: "white",
                          borderLeft: "none",
                        }}
                        placeholder="Enter your youtube channel name or url"
                        onChange={(e) =>
                          setFormData({ ...formData, url: e.target.value })
                        }
                      />
                    </InputGroup>
                  </Form>
                </Col>
                <Col
                  lg={3}
                  md={4}
                  sm={4}
                  //   style={{ backgroundColor: "pink" }}
                  className="align-items-center justify-content-center"
                >
                  <Button
                    variant="primary"
                    //    className="py-2 px-5"
                    style={{ height: "100%", width: "100%" }}
                    onClick={SearchChannel}
                  >
                    Get Started
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "33%",
                      }}
                    />
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col
              lg={4}
              //  style={{ backgroundColor: "palegoldenrod" }}
              className="align-items-center justify-content-center"
            >
              or add your channel via YouTube
              <Button
                // variant="primary"
                variant="light"
                //    className="py-2 px-5"
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  style={{ color: "#FF0000", marginRight: "10px" }}
                  size="2x"
                />
                Get Started
              </Button>
            </Col>
          </Row>
          {/* CHANNNELS LIST COMPONENT */}
        </Container>
        <Container fluid>
          <Row
            className="justify-content-between align-items-center"
            style={{
              backgroundColor: "#f0f4f9",
            }}
          >
            <Col
              className="justify-content-center align-items-center p-5 "
              style={{
                backgroundColor: "#f0f4f9",
                // backgroundColor: "purple",
              }}
              xl={12}
            >
              {/* turnery here */}
              {Channels.length > 0 ? (
                <ChannelSelector channels={Channels} />
              ) : (
                <div className="ChannelLogocont">
                  {/* <ChannelsLogo /> */}
                  <Image src={ChannelDataLogo} />
                  <h4>{formData.message}</h4>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};
