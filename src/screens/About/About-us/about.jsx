import React, { useRef, useState } from "react";
import "./About.css";
import {
  AboutUS,
  AboutSection2,
  AboutSliderImg1,
  AboutSliderImg2,
  ModalIcon,
  ReviewsLogo,
  PaymentSuccessIcon,
} from "../../../assets/images";
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function About() {
  usePageTitle("About Us");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const AboutImages = [
    { id: 1, img: AboutSliderImg1 },
    { id: 2, img: AboutSliderImg2 },
    { id: 3, img: ModalIcon },
    { id: 4, img: ReviewsLogo },
    { id: 5, img: PaymentSuccessIcon },
    // { id: 6, img: AboutSliderImg2 },
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <React.Fragment>
      <div className="container-fluid about-main-container d-flex justify-content-center align-items-center mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <h2 className="about-text pb-5">About Us</h2>
            </div>
            <div className="col-md-6">
              <Image src={AboutUS} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row About-Section-1">
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h3 className="about-text-2">
                Exceptional designs for your <br /> exceptional ideas
              </h3>
              <div className="row mt-5">
                <div className="col-md-6">
                  <h5 className="about-text-3">01</h5>
                  <p className="about-text-4">
                    Cursus vitae congue mauris <br /> rhoncus. Amet est placerat
                    in
                  </p>
                </div>
                <div className="col-md-6">
                  <h5 className="about-text-3">02</h5>
                  <p className="about-text-4">
                    Pharetra magna ac placerat <br /> vestibulum lectus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <Image src={AboutSection2} className="img-fluid About-second-img" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row About-Section-2">
          <div className="col-md-6">
            <div className="About-Before-text d-flex">
              <h2>M</h2>
              <p className="about-text-4 mt-2 ms-2">
                in nulla posuere sollicitudin aliquam ultrices sagittis. Quisque
                id <br />
                diam vel quam elementum pulvinar. Mi proin sed libero enim{" "}
              </p>
            </div>

            <p className="about-text-4 About-text-8">
              Sed faucibus turpis. Porttitor lacus luctus. Elementum nibh tellus
              molestie nunc non blandit massa. Malesuada fames ac turpis
              egestas.
            </p>
          </div>
          <div className="col-md-6">
            <p className="about-text-4">
              Cursus vitae congue mauris rhoncus. Amet est placerat in egestas
              erat. Pharetra magna ac placerat vestibulum lectus. Porttitor
              lacus luctus accumsan tortor posuere ac ut.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row About-Section-3">
          <section className="About-slider-container">
            <Swiper
              spaceBetween={30}
              slidesPerView={2} // Default view: 2 slides per view
              slidesPerGroup={1} // Slide one image at a time
              loop={true} // Enable looping
              autoplay={{
                delay: 1000, // Adjust the delay (in ms) as needed
                disableOnInteraction: false, // Continue autoplay after interaction
              }}
              pagination={{ clickable: false }}
              modules={[Pagination, Autoplay]} // Include Autoplay module
              onSlideChange={handleSlideChange}
              ref={swiperRef}
              className="mySwiper"
              breakpoints={{
                // when window width is >= 640px
                300: {
                  slidesPerView: 1, // Show 1 slide on smaller screens
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1, // Show 1 slide on smaller screens
                  spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 1, // Show 2 slides on medium screens
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2, // Show 2 slides on medium screens
                  spaceBetween: 30,
                },
                // when window width is >= 1024px
              }}
            >
              {AboutImages.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div className="slider-image-container">
                    <Image src={item.img} className="About-slider-img" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}
