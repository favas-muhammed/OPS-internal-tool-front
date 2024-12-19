import { Link } from "react-router-dom";
import "./Pages.css";

function SRPVPage() {
  return (
    <div className="page">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      <h1>SRPV Special Sales</h1>
      {/* Add your SRPV specific content here */}
    </div>
  );
}

export default SRPVPage;
