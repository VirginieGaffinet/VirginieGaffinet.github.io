import './About.css';
// import image
import myImage from '../../assets/images/virginie1.jpg';
// import pdf
import myCV from '../../assets/pdf/cv-Virginie-Gaffinet-referent-numerique.pdf'

// import components
import Separator from '../Reusable/Separator/Separator';

function About() {
  return (
    <div className='about-container' id='about'>
      <div className='about-title'>
        <h3 className='title-nav'>A propos</h3>
        <Separator />
      </div>
      <div className='about first-part-about-container'>
        <div className='main-about-container'>
          <h4 className='small-title'>Mon parcours</h4>
          <p className='main-about'>Hello, je m'appelle Virginie Gaffinet, j'ai 35 ans et je suis à la recherche d'un poste dans <span className='about-dev'>le         numérique</span>. Passionnée d’informatique et de nouvelles technologies depuis toujours et forte de mes expériences dans la vente et le développement Web,   j’ai le sens du service et je suis rigoureuse.</p>
          <p className='main-about'>j’ai commencé le développement web en autodidacte étant plus jeune grâce à <a href="https://openclassrooms.com/fr/" className='formation-name' target='_blank' rel="noreferrer">Openclassroom</a>. Puis j'ai eu l'opportunité de faire une formation de 6 mois chez <a href="https://oclock.io/" className='formation-name' target='_blank' rel="noreferrer">O’clock</a> dans le but de me perfectionner dans le métier de Développeur web et en apprendre plus dans les métiers de l'informatique en général. J'ai pu découvrir tous les aspects du développement web (front-end et back-end). J’aime apprendre et je suis toujours à la recherche de nouvelles compétences et
            connaissances.</p>
          <h4 className='small-title'>Soft skills</h4>
          <div className='soft-skills-container'>
            <p className='soft-skill'>Autonomie</p>
            <p className='soft-skill'>Organisation</p>
            <p className='soft-skill'>Esprit d'équipe</p>
            <p className='soft-skill'>Communication</p>
            <p className='soft-skill'>Empathie</p>
          </div>
        </div>
      </div>
      <div className='about second-part-about-container'>
        <img className='my-image' src={myImage} alt='mon portrait'></img>
        <p className='small-title name'>Virginie Gaffinet</p>
        <p className='about-me'>35 ans</p>
        <p className='about-me'>Perpignan</p>
        <p className='about-me'>Hobbies : Développement Web, informatique, Tennis, jeux vidéo</p>
        <a href={myCV} download="CV-Virginie-Gaffinet-referent-numerique" className='my-cv'>
          <button className='upload-cv'>Télécharger mon CV</button>
        </a>
      </div>
    </div>   
  )
};

export default About;