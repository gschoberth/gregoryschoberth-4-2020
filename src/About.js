import React from "react";
import "./styles.scss";
import bio from "./assets/data/about.json";

import ProfilePic from "./assets/images/profile-pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <section className="section__about" id="about">
      <div className="section-header">
        <h2 className="secondary-header">About Me</h2>
        <h3 className="tertiary-header">Hi, I'm Greg Schoberth</h3>
      </div>
      <div className="image-wrapper">
        <img src={ProfilePic} className="profile-pic" />
      </div>
      <ul className="social-media">
        <li className="social-icon">
          <a href="https://github.com/gschoberth">
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </a>
        </li>
        <li className="social-icon">
          <a href="https://twitter.com/gmschoberth">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </li>
        <li className="social-icon">
          <a href="https://www.linkedin.com/in/gregoryschoberth/">
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
        </li>
        <li className="social-icon">
          <a href="mailto:gregoryschoberth@gmail.com">
            <FontAwesomeIcon icon="envelope" size="2x" />
          </a>
        </li>
      </ul>
      <div className="text-wrapper">
        {bio.map((text) => {
          return <p className="about-text">{text.bio}</p>;
        })}
      </div>
    </section>
  );
};

export default About;
