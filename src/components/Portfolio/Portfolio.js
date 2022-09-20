// import css
import './Portfolio.css';
// import data
import { portfolioData } from '../../data/portfolioData';
// import components
import Separator from '../Reusable/Separator/Separator';

function Portfolio() {
  return (
    <div className='portfolio-container-all' id='portfolio'>
      <div className='portfolio-title'>
        <h3 className='title-nav'>Portfolio</h3>
        <Separator />
      </div>
      <div className='portfolio-container'>
        {portfolioData.map(({name, picture, url}) => (
           <div className='portfolio' key={name}>
              <h4>{name}</h4>
              <a href={url} className="url-img">
                <img src={picture} alt="portfolio-img" className='portfolio-img'></img>
              </a>
              <a href={url}>Mon projet</a>
           </div>
        ))}
      </div>
    </div>
  )
};

export default Portfolio;