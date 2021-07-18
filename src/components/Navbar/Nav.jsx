import React from 'react';
import './Nav.scss';

import disneyLogo from '../../assets/DisneyNOW.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faGamepad, faHome, faIceCream, faPlayCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import mickey from '../../assets/mickey.svg';

function Nav() {
    return (
      <header className="header">
        <nav className="nav">
          <div className="nav-main">
            {/* <div className="nav-main-imgcontainer"> */}
              <img src={disneyLogo} alt="" className="nav-main-image" />
            {/* </div> */}
            <div className="nav-main-icons">
              <FontAwesomeIcon
                icon={faSearch}
                className="fa-lg nav-main-icons-icon"
              />
              <FontAwesomeIcon icon={faCog} className="fa-lg" />
            </div>
          </div>
          <div className="nav-primary">
            <div className="nav-primary-item">
              <FontAwesomeIcon icon={faHome} className="fa-2x" />
              <p>HOME</p>
            </div>
            <div className="nav-primary-item active">
              <FontAwesomeIcon icon={faPlayCircle} className="fa-2x" />
              <p>SHOWS</p>
            </div>
            <div className="nav-primary-item">
              <FontAwesomeIcon icon={faGamepad} className="fa-2x" />
              <p>GAMES</p>
            </div>
            <div className="nav-primary-item">
              <FontAwesomeIcon icon={faIceCream} className="fa-2x" />
              <p>DCOM</p>
            </div>
            <div className="icons-on-ipad">
              <div className="nav-primary-item">
                <FontAwesomeIcon icon={faSearch} className="fa-2x" />
                <p>SEARCH</p>
              </div>
              <div className="nav-primary-item">
                <FontAwesomeIcon icon={faCog} className="fa-2x" />
                <p>SETTINGS</p>
              </div>
            </div>
            <div className="nav-primary-item">
              <img src={mickey} alt="" className="mickey" />
              <p>ME</p>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Nav
