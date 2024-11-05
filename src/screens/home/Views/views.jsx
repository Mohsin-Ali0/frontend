import React from "react";
import "./views.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  YoutubeLogoIcon,
  HeartIcon,
  EyeIcon,
  UsersIcon,
} from "../../../assets/images/index";

export const Views = () => {
  return (
    <React.Fragment>
      <section className="view-bg_img py-5">

        <div className="container">

          <div className="d-flex row">

            <div className="col-md-6 d-flex justify-content-center flex-column">
              <h2>
                Achievement Designed For{" "}
                <span style={{ color: "#139DFF" }}> <br />YouTube Creators </span>{" "}
                <br />
              </h2>
              <p >Your Innovation Driven YouTube Promotion Tool </p>
            </div>
            <div className="col-md-6 d-flex justify-content-around">

              <div className="">
                <div className="d-flex gap-2">
                  <img src={YoutubeLogoIcon} alt="" className="view-Icons" />
                  <div className="">

                    <h1 className="">
                      125K<span className="plusIcon">+</span>
                    </h1>
                    <p>YouTube Videos Promoted</p>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <img src={EyeIcon} alt="" className="view-Icons" />
                  <div className="">
                    <h1 className="">
                      7K<span className="plusIcon">+</span>
                    </h1>
                    <p>Views Generated</p>
                  </div>
                </div>




              </div>

              <div className="">

              <div className="d-flex gap-2">
                  <img src={UsersIcon} alt="" className="view-Icons" />
                  <div className="">
                    <h1 className="">
                    5M<span className="plusIcon">+</span>
                    </h1>
                    <p>Subscribers Added</p>
                  </div>
                </div>

              <div className="d-flex gap-2">
                  <img src={HeartIcon} alt="" className="view-Icons" />
                  <div className="">
                    <h1 className="">
                   124<span className="plusIcon">+</span>
                    </h1>
                    <p>YouTube Channels Boosted</p>
                  </div>
                </div>


            
              </div>


            </div>
          </div>
        </div>


       
      </section>
    </React.Fragment>
  );
};
