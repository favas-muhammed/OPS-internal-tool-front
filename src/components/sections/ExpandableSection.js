import PropTypes from "prop-types";
import "../../styles/ExpandableSection.css";
import NavigationIcon from "../navigation/NavigationIcon";

const ExpandableSection = ({ mainIcon, mainLabel, children }) => {
  return (
    <div className="expandable-section">
      <div className="expandable-section__main">
        <NavigationIcon
          icon={mainIcon}
          label={mainLabel}
          isInteractive={false}
        />
      </div>
      <div className="expandable-section__content">{children}</div>
    </div>
  );
};

ExpandableSection.propTypes = {
  mainIcon: PropTypes.string.isRequired,
  mainLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ExpandableSection;
