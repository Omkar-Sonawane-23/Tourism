import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#2b2b2b', paddingTop: '30px', paddingBottom: '20px', fontFamily: 'Roboto, sans-serif' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h3 className="footer-heading" style={{ color: '#fff', fontWeight: 'bold', fontSize: '28px', marginBottom: '15px', fontStyle:'italic' }}>Bharat Yatra</h3>
            <p className="footer-text" style={{ color: '#ccc', fontSize: '16px' }}>
              Embark on a journey where every step tells a story, every destination unveils a treasure, and every experience paints a memory. Explore the world with Bharat Yatra, where adventure awaits at every turn.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center text-center" style={{ marginTop: '20px' }}>
            <a href="https://twitter.com/OmkarSonawane23" className="social-link" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', padding: '5px' }}>
              <FontAwesomeIcon icon={faTwitter} className="fa-lg footer-icon" style={{ color: '#fff', fontSize: '32px', transition: 'transform 0.2s' }} />
            </a>
            <a href="https://www.instagram.com/omkar_sonawane_23/" className="social-link" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', padding: '5px' }}>
              <FontAwesomeIcon icon={faInstagram} className="fa-lg footer-icon" style={{ color: '#fff', fontSize: '32px', transition: 'transform 0.2s' }} />
            </a>
            <a href="https://github.com/Web403" className="social-link" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', padding: '5px' }}>
              <FontAwesomeIcon icon={faGithub} className="fa-lg footer-icon" style={{ color: '#fff', fontSize: '32px', transition: 'transform 0.2s' }} />
            </a>
            <a href="https://www.linkedin.com/in/omkar-sonawane-0663a0257/" className="social-link" target="_blank" rel="noopener noreferrer" style={{ padding: '5px' }}>
              <FontAwesomeIcon icon={faLinkedin} className="fa-lg footer-icon" style={{ color: '#fff', fontSize: '32px', transition: 'transform 0.2s' }} />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col text-center py-3" style={{ color: '#ccc' }}>
            <p className="copyright" style={{ fontSize: '14px' }}>© Bharat Yatra . All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Inline CSS for icon animation */}
      <style>
        {`
          .social-link:hover .footer-icon {
            animation: iconMovement 0.3s forwards;
          }

          @keyframes iconMovement {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
