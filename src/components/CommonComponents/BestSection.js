import React from "react";

// Style
import style from "../../css/Sections/BestSection.module.css";

// Icons
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BestSection = ({ header, content, addIcon, icon }) => {
  return (
    <div className={style.best_section}>
      <h1>{header}</h1>
      <p>{content}</p>
      <p>
        Learn About Our Success
        {addIcon ? (
          <span>
            <FontAwesomeIcon icon={faRightLong} />
          </span>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

export default BestSection;
