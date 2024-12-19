import { Link } from "react-router-dom";
import "./Pages.css";

function VCPage() {
  return (
    <div className="page">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      <h1>VC Special Sales</h1>
      {/* Add your VC specific content here */}
    </div>
  );
}

export default VCPage;
