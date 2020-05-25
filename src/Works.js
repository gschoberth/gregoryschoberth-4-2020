import React from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projects from "./assets/data/projects.json";

const Works = () => {
  return (
    <div className="section__works" id="works">
      <div className="section-header">
        <h2 className="secondary-header">Works</h2>
        <h3 className="tertiary-header">Products & Projects</h3>
      </div>
      {projects.map((project) => {
        return (
          <Project
            title={project.title}
            description={project.description}
            stack={project.stack}
            link={project.link}
          />
        );
      })}
    </div>
  );
};

const Project = (props) => {
  return (
    <section className="project-wrapper">
      <div className="project-caption">
        <h3 className="project-header">{props.title}</h3>
        <a href={props.link} className="project-link">
          <FontAwesomeIcon icon="external-link-alt" />
        </a>
      </div>

      <p>{props.description}</p>
      <div className="project-stack">
        <h3 className="stack-header">Stack:</h3>
        <h2 className="stack-tech">{props.stack}</h2>
      </div>
    </section>
  );
};

export default Works;
