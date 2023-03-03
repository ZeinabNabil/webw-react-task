import React from "react";

// Style
import style from "../../css/Sections/Sections.module.css";

// Image
import platformImg from "../../images/NoPath.png";
import BestSection from "../CommonComponents/BestSection";

const BestPlatformSectionFour = () => {
  return (
    <div className={`${style.best_platform} ${style.best_platform_sec_four}`}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={style.platform_content}>
            <BestSection
              header="Best Platform for the Technological Era"
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet"
              link="Learn About Our Success"
              addIcon={false}
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className={style.platform_img}>
            <img src={platformImg} alt="Platform img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPlatformSectionFour;
