import techStackData from '../../data/tech-stack.json';
import Image from 'react-bootstrap/Image';
import './tech-stack.css';

const TechStack = () => {
  const header = 'Tech Stack';
  const subHeader =
    'I specialize in Full-Stack development with experience in the following technologies';
  return (
    <div
      id="stack"
      className="stack-container"
      style={{ marginTop: '4rem', marginBottom: '4rem' }}
    >
      <div>
        <h2>{header}</h2>
        <h6 className="sub-header-buffer">{subHeader}</h6>
      </div>

      <article className="tech-stack slider">
        <div className="slide-track">
          {techStackData?.map((tech, index) => {
            return (
              <div className="slide" key={index}>
                <Image
                  src={tech.background}
                  alt={tech.title}
                  width={500}
                  height={500}
                />
              </div>
            );
          })}
          {techStackData?.map((tech, index) => {
            return (
              <div className="slide" key={index}>
                <Image
                  src={tech.background}
                  alt={tech.title}
                  width={500}
                  height={500}
                />
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
};
export default TechStack;
