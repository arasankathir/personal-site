import Image from 'react-bootstrap/Image';
import './hero.css';

const Hero = () => {
  return (
    <div className="profile-image-wrapper">
      <Image
        className="profile-image"
        src="https://avatars.githubusercontent.com/u/170983716?v=4"
        alt="profile picture"
      />
    </div>
  );
};

export default Hero;
