import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import SRPVPage from "./pages/SRPVPage";
import VCPage from "./pages/VCPage";
import TVBPage from "./pages/TVBPage";
import MPDPage from "./pages/MPDPage";
import GrailedPage from "./pages/GrailedPage";

function MainContent() {
  const navigate = useNavigate();

  const handleProfileClick = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TBC - Internal Tool</h1>
      </header>
      <main className="App-main">
        <div className="welcome-section">
          <h2>Welcome to TBC Internal Tool</h2>
          <p>Your centralized platform for internal operations</p>
          <div className="special-sales-container">
            <div className="special-sales-icon">
              <div className="icon">
                <i className="fas fa-percent"></i>
              </div>
              <span>Special Sales</span>
            </div>
            <div className="profile-icons">
              <div className="profile-icon">
                <div className="icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <span>CHOOSE</span>
              </div>
              <div
                className="profile-icon"
                onClick={() => handleProfileClick("/srpv")}
                role="button"
                tabIndex={0}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleProfileClick("/srpv")
                }
              >
                <div className="icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <span>SRPV</span>
              </div>
              <div
                className="profile-icon"
                onClick={() => handleProfileClick("/vc")}
                role="button"
                tabIndex={0}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleProfileClick("/vc")
                }
              >
                <div className="icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <span>VC</span>
              </div>
              <div
                className="profile-icon"
                onClick={() => handleProfileClick("/tvb")}
                role="button"
                tabIndex={0}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleProfileClick("/tvb")
                }
              >
                <div className="icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <span>TVB</span>
              </div>
              <div
                className="profile-icon"
                onClick={() => handleProfileClick("/mpd")}
                role="button"
                tabIndex={0}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleProfileClick("/mpd")
                }
              >
                <div className="icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <span>MPD</span>
              </div>
              <div className="profile-icon">
                <div className="icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <span>Bradery</span>
              </div>
              <div
                className="profile-icon"
                onClick={() => handleProfileClick("/grailed")}
                role="button"
                tabIndex={0}
                onKeyPress={(e) =>
                  e.key === "Enter" && handleProfileClick("/grailed")
                }
              >
                <div className="icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <span>Grailed</span>
              </div>
            </div>
          </div>
          <div className="dhl-shipping-container">
            <div className="dhl-shipping-icon">
              <div className="icon">
                <i className="fas fa-truck"></i>
              </div>
              <span>DHL Shipping Cost</span>
            </div>
            <div className="profile-icons">
              <div className="profile-icon">
                <div className="icon">
                  <i className="fas fa-file-invoice"></i>
                </div>
                <span>InvoiceQuick</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/srpv" element={<SRPVPage />} />
      <Route path="/vc" element={<VCPage />} />
      <Route path="/tvb" element={<TVBPage />} />
      <Route path="/mpd" element={<MPDPage />} />
      <Route path="/grailed" element={<GrailedPage />} />
    </Routes>
  );
}

export default App;
