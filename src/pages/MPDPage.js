import PageLayout from "../components/layout/PageLayout";

const MPDPage = () => {
  return (
    <PageLayout title="MPD Special Sales">
      <div className="mpd-content">
        <p>Welcome to the MPD Special Sales management interface.</p>

        <style jsx>{`
          .mpd-content {
            text-align: left;
            padding: var(--spacing-sm);
          }
        `}</style>
      </div>
    </PageLayout>
  );
};

export default MPDPage;
