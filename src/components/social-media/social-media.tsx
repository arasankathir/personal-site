import {
  faBluesky,
  faGithub,
  faLinkedin,
  faSquareYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './social-media.css';
import BrandLogo from '../../types/brand-logo';

const SocialMedia = () => {
  const socialMediaLogos: BrandLogo[] = [
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/arasan-kathiravan/',
    },
    {
      icon: faGithub,
      link: 'https://github.com/arasankathir',
    },
    { icon: faBluesky, link: 'https://bsky.app/profile/arasank94.bsky.social' },
    {
      icon: faSquareYoutube,
      link: 'https://www.youtube.com/channel/UCsay3c8Vln0A6W1c3yWtgtg',
    },
  ];

  const socialMediaLogoElements = socialMediaLogos.map((logo, idx) => (
    <FontAwesomeIcon
      onClick={() => window.open(logo.link, '_blank')!.focus()}
      key={'social-media-icon ' + idx}
      className="social-media-icon"
      icon={logo.icon}
    />
  ));

  return <div className="social-media-icon-row">{socialMediaLogoElements}</div>;
};

export default SocialMedia;
