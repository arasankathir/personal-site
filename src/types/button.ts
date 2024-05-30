import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface Button {
  tooltipText: string;
  icon: IconDefinition;
  onClick?: () => void;
  href?: string;
}

export default Button;
