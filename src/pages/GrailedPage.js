import PageLayout from "../components/layout/PageLayout";

const GrailedPage = () => {
  return (
    <PageLayout title="Grailed Special Sales">
      <div className="grailed-content">
        <p>Welcome to the Grailed Special Sales management interface.</p>

        <style jsx>{`
          .grailed-content {
            text-align: left;
            padding: var(--spacing-sm);
          }
        `}</style>
      </div>
    </PageLayout>
  );
};

export default GrailedPage;
