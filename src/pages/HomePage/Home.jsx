import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Home.scss';

import { showData } from '../../constants/showData';

function Home() {
    return (
        <section className="home-section">
            <div className="trick"></div>
        <div className="home-nav">
          <p>SHOWS A-Z</p>
          <div>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <div className="show-grid">
          {showData.map((show) => (
            <div key={show.id} className="show-grid-item">
              <img src={show.showImg} className="show-grid-image" loading="lazy" alt="" />
            </div>
          ))}
        </div>
      </section>
    );
}

export default Home
