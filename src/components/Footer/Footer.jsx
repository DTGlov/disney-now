import React from 'react';
import './Footer.scss';
import mickey from '../../assets/mickeysill.png'

function Footer() {
    const now = new Date();
    return (
      <footer className="footer">
        <div className="footer-details">
          <p className="footer-disclaimer">
            This is not the official Disney Now Web App
            <span>
              <a
                href="https://disneynow.com/all-shows"
                target="_blank"
                rel="noreferrer"
              >
                Disney Now Official Site
              </a>
            </span>
            . It is a redesign, built purely for educational purposes.
          </p>
          <div className="copy-sec">
            <img src={mickey} alt="" className="copy-sec-img" />
            <p className="copy">
              Copyright &copy; {now.getFullYear()} DTGLOVER
            </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer
