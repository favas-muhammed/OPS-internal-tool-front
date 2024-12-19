import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/PageLayout.css";

const PageLayout = ({ children, title, showBackButton = true }) => {
  return (
    <div className="page-layout">
      <header className="page-layout__header">
        <h1>TBC - Internal Tool</h1>
      </header>

      <main className="page-layout__main">
        <div className="page-layout__content">
          {showBackButton && (
            <Link
              to="/"
              className="page-layout__back-button"
              aria-label="Back to home"
            >
              ← Back to Home
            </Link>
          )}
          {title && <h2 className="page-layout__title">{title}</h2>}
          {children}
        </div>
      </main>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  showBackButton: PropTypes.bool,
};

export default PageLayout;
