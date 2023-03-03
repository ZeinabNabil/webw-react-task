import React from "react";

// Style
import style from "../../css/Sections/StvdyFooter.module.css";

const StvdyFooter = () => {
  const services = [
    "Avis clients",
    "Mentions légales",
    "Plan du site",
    "Blog d’Idéematic",
    "Le dictionnaire du digital",
    "‹ Notre boutique /›",
  ];
  return (
    <div className={style.stvdy_footer}>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className={style.study}>
            <h2>Study</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget diam at mi sollicitudin
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className={style.services}>
            <h3>Nos services</h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className={style.sign_up}>
            <h3>Sign up for Special Offers!</h3>
            <div className={`"input-group mb-3" ${style.form_group}`}>
              <input type="text" className="form-control" placeholder="Mail" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StvdyFooter;
