import React from "react";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Style
import style from "../../css/Sections/Sections.module.css";

// Images
import platformImg from "../../images/NoPath.png";

const PlatformOverview = () => {
  const platformOverviewImgs = [
    {
      id: "platfromImg1",
      img: platformImg,
    },
    {
      id: "platfromImg2",
      img: platformImg,
    },
    {
      id: "platfromImg3",
      img: platformImg,
    },
  ];
  return (
    <div className={style.platform_overview}>
      <div className={style.platform_overview_content}>
        <p>Advanced Customer Service Platform</p>
        <h2>Platform Overview</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. <br />
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet
        </p>
      </div>
      <div className={style.platform_overview_imgs}>
        <Swiper
          // install Swiper modules
          modules={[Pagination, A11y]}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {platformOverviewImgs.map((pImg) => (
            <SwiperSlide key={pImg.id}>
              <img src={pImg.img} alt={pImg.id} style={{ width: "100%" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlatformOverview;
