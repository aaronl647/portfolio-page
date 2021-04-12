import React from "react";
import "./PDFDownloader.css";

function PDFDownloader(props) {
  const { pdf } = props;
  return (
    <>
      <div className="pdf-container">
        <div className="button-container">
          <a href={pdf}>Download a Copy Here!</a>
        </div>
      </div>
    </>
  );
}

export default PDFDownloader;
