import React from "react";

// Style
import style from "../../css/Sections/Sections.module.css";

const BusinessSolutionContent = ({ header, content }) => {
  return (
    <div className={style.business_solution_text}>
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
};

export default BusinessSolutionContent;
