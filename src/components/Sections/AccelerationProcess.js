import React from "react";

// Style
import style from "../../css/Sections/Sections.module.css";
import Content from "../CommonComponents/Content";

const AccelerationProcess = () => {
  const AccelerationProcessSteps = [
    {
      id: "step1",
      num: "1",
      header: "Market Research",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: "step2",
      num: "1",
      header: "Market Research",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
    {
      id: "step3",
      num: "1",
      header: "Market Research",
      content:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    },
  ];
  return (
    <div className={style.acceleration_process}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Content
            header="Acceleration Process to Grow Your Business"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          {AccelerationProcessSteps.map((step) => (
            <div key={step.id} className={style.acceleration_process_steps}>
              <h4>
                <span>{step.num}</span>
                {step.header}
              </h4>
              <p>{step.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={style.acceleration_process_text}>
        Don't Just Take our Word for it!
      </div>
    </div>
  );
};

export default AccelerationProcess;
