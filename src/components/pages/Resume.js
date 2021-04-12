import React from "react";
import ResumeSection from "../PageSections/ResumeSection";
import PDFDownloader from "../PDFDownloader/PDFDownloader";
import resumePDF from "../../resume.pdf";

function Resume() {
  return (
    <div>
      <h1 className="resume">RESUME</h1>
      <ResumeSection pdf={resumePDF} />
      <PDFDownloader pdf={resumePDF} />
    </div>
  );
}

export default Resume;
