import { Row, Col } from 'react-bootstrap';
import './App.css';
import AppNavbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import TechStack from './components/tech-stack/tech-stack';
//import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import OpeningMessage from './components/opening-message/opening-message';
import Bio from './components/bio/bio';
import SocialMedia from './components/social-media/social-media';

function App() {
  return (
    <>
      <div className="horizontal-margins">
        <AppNavbar></AppNavbar>
        <div className="vertical-margins">
          <Row>
            <Col className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
              <section id="About Me">
                <Hero></Hero>
                <div
                  style={{
                    textAlign: 'center',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                  }}
                >
                  <Bio></Bio>
                  <SocialMedia></SocialMedia>
                </div>
              </section>
            </Col>
            <Col className="col-lg-8 col-md-8 col-sm-12 d-flex justify-content-start">
              <OpeningMessage />
            </Col>
          </Row>
          {/* <div>
            <section id="Portfolio">
              <Projects></Projects>
            </section>
          </div> */}
          <div>
            <section id="Tech Stack">
              <TechStack></TechStack>
            </section>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
