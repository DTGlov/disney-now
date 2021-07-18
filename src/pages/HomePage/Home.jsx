import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Home.scss';

import { showData } from '../../constants/showData';
import Footer from '../../components/Footer/Footer';

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
        <div className="show-grid-container">
          <div className="show-grid-menu">
            <div className="show-grid-names">
              <p className="item-active">SHOWS A-Z</p>
              <p>ON NOW</p>
              <p>DISNEY CHANNEL</p>
              <p>DISNEY JUNIOR</p>
              <p>DISNEY XD</p>
              <p>SHORTS</p>
              <p>READY FOR PRESCHOOL</p>
              <p>PRINCESS</p>
            </div>
          </div>

          <div className="show-grid">
            {showData.map((show) => (
              <div key={show.id} className="show-grid-item">
                <img
                  src={show.showImg}
                  className="show-grid-image"
                  loading="lazy"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </section>
    );
}

export default Home
