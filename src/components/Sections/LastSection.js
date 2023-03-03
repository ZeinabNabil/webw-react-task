import React from "react";

// Style
import style from "../../css/Sections/Sections.module.css";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Images
import rateImg from "../../images/rate image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Content from "../CommonComponents/Content";
const LastSection = () => {
  const ratings = [
    {
      id: "rate1",
      img: rateImg,
      name: "Florrie Jacobs",
      sub: "CEO of Company",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: "rate2",
      img: rateImg,
      name: "Florrie Jacobs",
      sub: "CEO of Company",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
    {
      id: "rate3",
      img: rateImg,
      name: "Florrie Jacobs",
      sub: "CEO of Company",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
    },
  ];
  const counts = [
    {
      id: "count1",
      num: "570",
      name: "Dowload",
    },
    {
      id: "count2",
      num: "570",
      name: "Active User",
    },
    {
      id: "count3",
      num: "570",
      name: "Positive Feedback",
    },
    {
      id: "count4",
      num: "570",
      name: "+ rating",
    },
  ];
  return (
    <div className={style.last_section}>
      <div className="row">
        {counts.map((count) => (
          <div key={count.id} className="col-lg-3 col-md-6 col-sm-12">
            <div className={style.counts} key={count.id}>
              <div>{count.num}</div>
              <div>{count.name}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={style.last_section_swiper}>
            <Swiper
              // install Swiper modules
              modules={[Pagination, A11y]}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {ratings.map((rate) => (
                <SwiperSlide key={rate.id}>
                  <div className={style.rate_container}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className={style.rate_img}>
                          <img src={rate.img} alt={rate.id} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className={style.rate_content}>
                          <h3>{rate.name}</h3>
                          <h4>{rate.sub}</h4>
                          <p>{rate.text}</p>
                          <div className={style.rate_stars}>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={style.last_section_content}>
            <Content
              header="Grow Your Business and Join Our Happy Users"
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
 Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
