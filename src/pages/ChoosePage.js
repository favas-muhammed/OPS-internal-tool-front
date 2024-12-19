import React from "react";
import PageLayout from "../components/layout/PageLayout";
import "./Pages.css";

const ChoosePage = () => {
  return (
    <PageLayout showBackButton={true} title="Choose Profile">
      <div className="page-content">
        <h2>Choose Profile Content</h2>
        {/* Add specific content for Choose profile here */}
      </div>
    </PageLayout>
  );
};

export default ChoosePage;
