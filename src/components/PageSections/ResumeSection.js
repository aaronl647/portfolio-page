import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import "./Sections.css";

export default function ResumeSection(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const { pdf } = props;

  return (
    <>
      <div className="resume-container">
        <Document
          file={pdf}
          options={{ workerSrc: "pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </>
  );
}
