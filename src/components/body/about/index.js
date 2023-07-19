import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There ✋,I am,
          <br /> <span className="info-name">Wal Husna Faizul</span>.
          <br /> I am a full stack developer and still studying at Riau Islamic
          University, Pekanbaru, majoring in informatics engineering.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding1.png")}
            style={{
              width: "300px",
              height: "300px",
              margin: 30,
              marginRight: 0,
            }}
            className="picture"
            alt="Iwal"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
