import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AppButton from '../button/button';
import './navbar.css';
import { useEffect, useState } from 'react';

const AppNavbar = () => {
  const [mailtoLink, setMailtoLink] = useState('');

  useEffect(() => {
    const user = 'arasan.kathiravan';
    const domain = 'gmail.com';
    const constructedEmail = `${user}@${domain}`;
    setMailtoLink(`mailto:${constructedEmail}`);
  }, []);

  const downloadResume = () => {
    const fileUrl = '/documents/Arasan_Kathiravan_Resume.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Arasan_Kathiravan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar>
        <div className="container-fluid px-0">
          <Navbar.Brand className="brand-logo">
            <b>AK</b>
          </Navbar.Brand>
          <Nav className="justify-content-end nav-link-items">
            <AppButton
              tooltipText="Contact Me"
              icon={faEnvelope}
              href={mailtoLink}
            ></AppButton>
            <div className="button-spacer"></div>
            <AppButton
              onClick={downloadResume}
              tooltipText="Download Resume"
              icon={faFileDownload}
            ></AppButton>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};

export default AppNavbar;
