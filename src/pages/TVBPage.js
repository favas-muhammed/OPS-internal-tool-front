import PageLayout from "../components/layout/PageLayout";

const TVBPage = () => {
  return (
    <PageLayout title="TVB Special Sales">
      <div className="tvb-content">
        <p>Welcome to the TVB Special Sales management interface.</p>

        <style jsx>{`
          .tvb-content {
            text-align: left;
            padding: var(--spacing-sm);
          }
        `}</style>
      </div>
    </PageLayout>
  );
};

export default TVBPage;
