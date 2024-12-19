import React from "react";
import PageLayout from "../components/layout/PageLayout";
import "./Pages.css";

const InvoiceQuickPage = () => {
  return (
    <PageLayout showBackButton={true} title="InvoiceQuick Profile">
      <div className="page-content">
        <h2>InvoiceQuick Profile Content</h2>
        {/* Add specific content for InvoiceQuick profile here */}
      </div>
    </PageLayout>
  );
};

export default InvoiceQuickPage;
