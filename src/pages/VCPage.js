import PageLayout from "../components/layout/PageLayout";

const VCPage = () => {
  return (
    <PageLayout title="VC Special Sales">
      <div className="vc-content">
        <p>Welcome to the VC Special Sales management interface.</p>

        <style jsx>{`
          .vc-content {
            text-align: left;
            padding: var(--spacing-sm);
          }
        `}</style>
      </div>
    </PageLayout>
  );
};

export default VCPage;
