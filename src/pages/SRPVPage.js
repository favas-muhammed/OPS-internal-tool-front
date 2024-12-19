import React from "react";
import PageLayout from "../components/layout/PageLayout";
import FileUpload from "../components/upload/FileUpload";
import "./Pages.css";

const SRPVPage = () => {
  return (
    <PageLayout title="SRPV Special Sales">
      <div className="page-content">
        <div className="upload-section">
          <FileUpload title="DB Extraction" acceptedTypes=".xlsx,.xls,.csv" />
          <FileUpload title="SRPV Extraction" acceptedTypes=".xlsx,.xls,.csv" />
        </div>
      </div>

      <style>
        {`
          .upload-section {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
        `}
      </style>
    </PageLayout>
  );
};

export default SRPVPage;
