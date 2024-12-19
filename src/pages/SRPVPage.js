import PageLayout from "../components/layout/PageLayout";

const SRPVPage = () => {
  return (
    <PageLayout title="SRPV Special Sales">
      {/* Add your SRPV specific content here */}
      <div className="srpv-content">
        <p>Welcome to the SRPV Special Sales management interface.</p>

        <style jsx>{`
          .srpv-content {
            text-align: left;
            padding: 1rem;
          }
        `}</style>
      </div>
    </PageLayout>
  );
};

export default SRPVPage;
