import { Routes, Route, useNavigate } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import NavigationIcon from "./components/navigation/NavigationIcon";
import ExpandableSection from "./components/sections/ExpandableSection";
import SRPVPage from "./pages/SRPVPage";
import VCPage from "./pages/VCPage";
import TVBPage from "./pages/TVBPage";
import MPDPage from "./pages/MPDPage";
import GrailedPage from "./pages/GrailedPage";
import "./styles/App.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <PageLayout showBackButton={false} title="Welcome to TBC Internal Tool">
      <p className="home-description">
        Your centralized platform for internal operations
      </p>

      <div className="home-sections">
        <ExpandableSection mainIcon="percent" mainLabel="Special Sales">
          <NavigationIcon
            icon="shopping-bag"
            label="CHOOSE"
            isInteractive={false}
          />
          <NavigationIcon
            icon="shopping-bag"
            label="SRPV"
            onClick={() => handleNavigation("/srpv")}
          />
          <NavigationIcon
            icon="shopping-bag"
            label="VC"
            onClick={() => handleNavigation("/vc")}
          />
          <NavigationIcon
            icon="shopping-bag"
            label="TVB"
            onClick={() => handleNavigation("/tvb")}
          />
          <NavigationIcon
            icon="shopping-bag"
            label="MPD"
            onClick={() => handleNavigation("/mpd")}
          />
          <NavigationIcon
            icon="shopping-bag"
            label="Bradery"
            isInteractive={false}
          />
          <NavigationIcon
            icon="shopping-bag"
            label="Grailed"
            onClick={() => handleNavigation("/grailed")}
          />
        </ExpandableSection>

        <ExpandableSection mainIcon="truck" mainLabel="DHL Shipping Cost">
          <NavigationIcon
            icon="file-invoice"
            label="InvoiceQuick"
            isInteractive={false}
          />
        </ExpandableSection>
      </div>
    </PageLayout>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/srpv" element={<SRPVPage />} />
      <Route path="/vc" element={<VCPage />} />
      <Route path="/tvb" element={<TVBPage />} />
      <Route path="/mpd" element={<MPDPage />} />
      <Route path="/grailed" element={<GrailedPage />} />
    </Routes>
  );
};

export default App;
