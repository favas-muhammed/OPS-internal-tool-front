import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = ({ title, acceptedTypes = ".xlsx,.xls,.csv" }) => {
  const [file, setFile] = useState(null);
  const [sheetLink, setSheetLink] = useState("");
  const [uploadType, setUploadType] = useState("file"); // 'file' or 'link'

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setSheetLink("");
    }
  };

  const handleLinkChange = (e) => {
    setSheetLink(e.target.value);
    setFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadType === "file" && file) {
      // Handle file upload
      console.log("Uploading file:", file);
    } else if (uploadType === "link" && sheetLink) {
      // Handle Google Sheet link
      console.log("Processing Google Sheet:", sheetLink);
    }
  };

  return (
    <div className="file-upload-container">
      <h3>{title}</h3>
      <div className="upload-type-selector">
        <button
          className={`type-button ${uploadType === "file" ? "active" : ""}`}
          onClick={() => setUploadType("file")}
        >
          Upload File
        </button>
        <button
          className={`type-button ${uploadType === "link" ? "active" : ""}`}
          onClick={() => setUploadType("link")}
        >
          Google Sheet Link
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        {uploadType === "file" ? (
          <div className="file-input-container">
            <input
              type="file"
              accept={acceptedTypes}
              onChange={handleFileChange}
              className="file-input"
            />
            {file && <p className="file-name">Selected: {file.name}</p>}
          </div>
        ) : (
          <div className="link-input-container">
            <input
              type="url"
              placeholder="Paste Google Sheet link here"
              value={sheetLink}
              onChange={handleLinkChange}
              className="link-input"
            />
          </div>
        )}
        <button
          type="submit"
          className="submit-button"
          disabled={!file && !sheetLink}
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
