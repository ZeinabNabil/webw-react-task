import React from "react";

// Style
import style from "../../css/Sections/Sections.module.css";

// Components
import AboutUSBtn from "./AboutUSBtn";

const Content = ({ header, content }) => {
  return (
    <>
      <div className={style.content}>
        <h2>{header}</h2>
        <p>{content}</p>
        <AboutUSBtn />
      </div>
    </>
  );
};

export default Content;
