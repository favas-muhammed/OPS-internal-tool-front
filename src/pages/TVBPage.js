import { Link } from "react-router-dom";
import "./Pages.css";

function TVBPage() {
  return (
    <div className="page">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>
      <h1>TVB Special Sales</h1>
      {/* Add your TVB specific content here */}
    </div>
  );
}

export default TVBPage;
