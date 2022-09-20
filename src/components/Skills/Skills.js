// import css
import './Skills.css'

// import data
import { skills_data_front } from '../../data/skillsData';
import { skills_data_framework } from '../../data/skillsData';
import { skills_data_back } from '../../data/skillsData';

// import components
import Separator from '../Reusable/Separator/Separator';

function Skills() {
  return (
    <div className='skills-container' id='skills'>
       <div className='skills-title'>
        <h3 className='title-nav'>Compétences</h3>
        <Separator />
      </div>
      <div className='skills'>
        <div className='skill'>
          <h4 className="skill-category-title">Front-End</h4>
          {skills_data_front.map(({skill, percent, picture}) => (
            <div className="skill-category" key={skill}>
              <img src={picture} alt="logo" className='logo'></img>
              <p className='skill-name'>{skill}</p>
              <progress className="progress-bar" max="100" value={percent}>{percent}</progress>
            </div>
          ))}
        </div>
        <div className='skill'>
          <h4 className="skill-category-title">Back-End</h4>
          {skills_data_back.map(({skill, percent, picture}) => (
            <div className="skill-category" key={skill}>
              <img src={picture} alt="logo" className='logo'></img>
              <p className='skill-name'>{skill}</p>
              <progress className="progress-bar" max="100" value={percent}>{percent}</progress>
            </div>
          ))}
        </div>
        <div className='skill'>
          <h4 className="skill-category-title">Framework</h4>
          {skills_data_framework.map(({skill, percent, picture}) => (
            <div className="skill-category" key={skill}>
              <img src={picture} alt="logo" className='logo'></img>
              <p className='skill-name'>{skill}</p>
              <progress className="progress-bar" max="100" value={percent}>{percent}</progress>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Skills;