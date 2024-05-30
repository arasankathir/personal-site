import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from '../../types/button';
import './button.css';

const AppButton: React.FC<Button> = ({ icon, tooltipText, onClick, href }) => {
  return href ? (
    <OverlayTrigger
      delay={{ hide: 25, show: 75 }}
      overlay={(props) => <Tooltip {...props}>{tooltipText}</Tooltip>}
      placement="bottom"
    >
      <a
        id="contact-me"
        href={href}
        className="btn btn-dark app-button"
        role="button"
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    </OverlayTrigger>
  ) : (
    <OverlayTrigger
      delay={{ hide: 25, show: 75 }}
      overlay={(props) => <Tooltip {...props}>{tooltipText}</Tooltip>}
      placement="bottom"
    >
      <button
        type="button"
        className="btn btn-dark app-button"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    </OverlayTrigger>
  );
};

export default AppButton;
