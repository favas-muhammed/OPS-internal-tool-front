import React from "react";
import PageLayout from "../components/layout/PageLayout";
import "./Pages.css";

const BraderyPage = () => {
  return (
    <PageLayout showBackButton={true} title="Bradery Profile">
      <div className="page-content">
        <h2>Bradery Profile Content</h2>
        {/* Add specific content for Bradery profile here */}
      </div>
    </PageLayout>
  );
};

export default BraderyPage;
