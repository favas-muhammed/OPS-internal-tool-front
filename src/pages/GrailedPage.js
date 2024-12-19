import { Link } from "react-router-dom";
import "./Pages.css";

function GrailedPage() {
  return (
    <div className="page">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      <h1>Grailed Special Sales</h1>
      {/* Add your Grailed specific content here */}
    </div>
  );
}

export default GrailedPage;
