import React from "react";

// Style
import style from "../../css/Sections/Sections.module.css";
import BestSection from "../CommonComponents/BestSection";

// Icons
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import HdIcon from "@mui/icons-material/Hd";

// Images
import scaleImg from "../../images/Icon simple-boost.png";

// Component
import BusinessSolutionContent from "../CommonComponents/BusinessSolutionContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BestBusinessSection = () => {
  return (
    <div className={style.best_business_section}>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <BestSection
            header="The best business solution for you"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. 
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet"
            link="Learn About Our Success"
            addIcon={true}
          />
        </div>
        <div className="col-lg-6 col-md-12">
          <div className={style.business_solution_content}>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className={style.business_icons}
                  style={{ backgroundColor: "#F1291E" }}
                >
                  <img src={scaleImg} alt="Scale Your Activity" />
                </div>
                <BusinessSolutionContent
                  header="Scale Your Activity"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className={style.business_icons}
                  style={{ backgroundColor: "#36C5AD" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bootstrap-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
                  </svg>
                </div>
                <BusinessSolutionContent
                  header="Bootcamps"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className={style.business_icons}
                  style={{ backgroundColor: "#CB4BF8" }}
                >
                  <HdIcon />
                </div>
                <BusinessSolutionContent
                  header="Hight Quality"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className={style.business_icons}
                  style={{ backgroundColor: "#56E65B" }}
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <BusinessSolutionContent
                  header="Get Certifcation"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestBusinessSection;
