// import css
import './Portfolio.css';
// import data
import { portfolioData } from '../../data/portfolioData';
// fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// import components
import Separator from '../Reusable/Separator/Separator';
import { useState } from 'react';

function Portfolio() {
  const [active, setActive] = useState(null);

  return (
    <div className='portfolio-container-all' id='portfolio'>
      <div className='portfolio-title'>
        <h3 className='title-nav'>Portfolio</h3>
        <Separator />
      </div>
      <div className='portfolio-container'>
        {portfolioData.map(({name, picture, url, githubUrl, informations, html, javascript, React, css}) => (
           <div className='portfolio' key={name}>
              <h4>{name}</h4>
                <img 
                  src={picture} 
                  alt="portfolio-img" 
                  className='portfolio-img'
                  onClick={() => {
                    setActive(name);
                    console.log(name);
                  }}
                > 
                </img>
                <button 
                  className='img-button'
                  onClick={() => {
                    setActive(name);
                    console.log(name);
                  }}
                >Voir plus</button>
              <div className={`portfolio-modalInfo ${active === name ? ' show-modal' : 'hide-modal'}`}>
                <div className='portfolio-modalInfo-container'>
                  <p>{informations}</p>
                  <ul>
                    <li>{html}</li>
                    <li>{javascript}</li>
                    <li>{React}</li>
                    <li>{css}</li>
                  </ul>
                </div>
                <FontAwesomeIcon 
                  icon={faXmark} 
                  size="xl" 
                  className='portfolio-xMark'
                  onClick={() => {
                    setActive(null);
                  }}
                ></FontAwesomeIcon>
                <div className='button-container'>
                  <a href={url} className="url-img" target="_blank" rel="noreferrer">
                    <button className='portfolio-button'>Voir le projet</button>
                  </a>
                  <a href={githubUrl} className="url-img" target="_blank" rel="noreferrer">
                    <button className='portfolio-button'>Lien GitHub</button>
                  </a>
                </div>
              </div>
           </div>
        ))}
      </div>
    </div>
  )
};

export default Portfolio;