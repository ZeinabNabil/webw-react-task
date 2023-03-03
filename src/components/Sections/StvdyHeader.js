import React from "react";

// Style
import style from "../../css/Sections/StvdyHeader.module.css";
import "../../css/App.css";
import AboutUSBtn from "../CommonComponents/AboutUSBtn";

// Images
import headerImg from "../../images/NoPath.png";
import client1 from "../../images/client-1.png";
import client2 from "../../images/client-2.png";
import client3 from "../../images/client-3.png";
import client4 from "../../images/client-4.png";
import client5 from "../../images/client-5.png";

const StvdyHeader = () => {
  const navLinks = ["Browser", "Bootcamps", "How It Works", "Testemonial"];
  const clients = [
    {
      id: "client1",
      img: client1,
    },
    {
      id: "client2",
      img: client2,
    },
    {
      id: "client3",
      img: client3,
    },
    {
      id: "client4",
      img: client4,
    },
    {
      id: "client5",
      img: client5,
    },
  ];
  return (
    <div className={style.stvdy_header}>
      <div className={style.stvdy_navbar}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className={`navbar-brand ${style.navbar_logo}`} href="#">
              St<span>v</span>dy
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {navLinks.map((link, index) => (
                  <li key={index} className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <AboutUSBtn />
            </div>
          </div>
        </nav>
      </div>
      <div className={style.header_content}>
        <div className="row" style={{ marginRight: "0px" }}>
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            style={{ paddingLeft: "0px" }}
          >
            <div className={style.header_text}>
              <p>Advanced Platform</p>
              <h1>Take your team to the next level</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </p>
              <button>About Us</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={style.header_left_img}>
              <img src={headerImg} alt="header img" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.clients}>
        {clients.map((client) => (
          <div key={client.id} className={style.client}>
            <img src={client.img} alt={client.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StvdyHeader;
