import React from "react";
import "../../App.css";
import ProjectGallery from "../ProjectGallery/ProjectGallery";

function Projects() {
  return (
    <div>
      <h1 className="projects">PROJECTS</h1>
      <div className="projects__container">
        <ProjectGallery />
      </div>
    </div>
  );
}

export default Projects;
