import React from "react";
import { Tabs, Tab } from "react-bootstrap";

function ProjectGallery() {
  return (
    <>
      <div className="gallery-tab-container">
        <div className="gallery-tab-wrapper">
          <Tabs defaultActiveKey="projects">Test</Tabs>
        </div>
      </div>
    </>
  );
}

export default ProjectGallery;
