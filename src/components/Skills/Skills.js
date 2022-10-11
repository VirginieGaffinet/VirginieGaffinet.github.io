// import css
import './Skills.css'

// import data
import { skills_data_front } from '../../data/skillsData';
import { skills_data_divers } from '../../data/skillsData';
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
          {skills_data_front.map(({skill, picture}) => (
            <div className="skill-category" key={skill}>
              <img src={picture} alt="logo" className='logo'></img>
              <p className='skill-name'>{skill}</p>
            </div>
          ))}
        </div>
        <div className='skill'>
          <h4 className="skill-category-title">Back-End</h4>
          {skills_data_back.map(({skill, picture}) => (
            <div className="skill-category" key={skill}>
              <img src={picture} alt="logo" className='logo'></img>
              <p className='skill-name'>{skill}</p>
            </div>
          ))}
        </div>
        <div className='skill'>
          <h4 className="skill-category-title">Divers</h4>
          {skills_data_divers.map(({skill, picture}) => (
            <div className="skill-category" key={skill}>
              <img src={picture} alt="logo" className='logo'></img>
              <p className='skill-name'>{skill}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='skills'>
        <h4 className="skill-category-title">Gestion de projet</h4>
        <ul className='other-skills'>
          <li>Création de wireframe</li>
          <li>User Stories</li>
          <li>Méthode SCRUM</li>
          <li>Versioning avec Git/GitHub</li>
        </ul>
      </div>
    </div>
  )
};

export default Skills;