import PropTypes from "prop-types";
import "../../styles/NavigationIcon.css";

const NavigationIcon = ({ icon, label, onClick, isInteractive = true }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && onClick) {
      onClick();
    }
  };

  const className = `nav-icon ${isInteractive ? "nav-icon--interactive" : ""}`;
  const interactiveProps = isInteractive
    ? {
        onClick,
        role: "button",
        tabIndex: 0,
        onKeyPress: handleKeyPress,
        "aria-label": `Navigate to ${label}`,
      }
    : {
        "aria-label": label,
      };

  return (
    <div className={className} {...interactiveProps}>
      <div className="nav-icon__circle">
        <i className={`fas fa-${icon}`} aria-hidden="true" />
      </div>
      <span className="nav-icon__label">{label}</span>
    </div>
  );
};

NavigationIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isInteractive: PropTypes.bool,
};

export default NavigationIcon;
