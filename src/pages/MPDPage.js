import { Link } from "react-router-dom";
import "./Pages.css";

function MPDPage() {
  return (
    <div className="page">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      <h1>MPD Special Sales</h1>
      {/* Add your MPD specific content here */}
    </div>
  );
}

export default MPDPage;
