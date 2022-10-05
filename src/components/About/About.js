import './About.css';
// import image
import myImage from '../../assets/images/virginie1.jpg';
// import pdf
import myCV from '../../assets/pdf/CV-virginie-gaffinet.pdf'

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
          <p className='main-about'>Hello, je m'appelle Virginie Gaffinet, j'ai 35 ans et je suis développeuse Web Front-end. Après plusieurs années dans la vente ainsi que la restauration, j’ai décidé de faire une reconversion professionelle dans un métier qui est une passion.</p>
          <p className='main-about'>J’ai commencé le développement web en autodidacte étant plus jeune grâce à <a href="https://openclassrooms.com/fr/" className='formation-name'>Openclassroom</a>. Puis j'ai eu l'opportunité de faire une reconversion, j'ai donc complété mon parcours avec une formation de 6 mois chez <a href="https://oclock.io/" className='formation-name'>O’clock</a> dans le but de devenir de Développeur web. J'ai pu découvrir tous les aspects du développement web (front-end et back-end). J'ai finalement choisis de me perfectioner en front-end, je prend un réel plaisir à créer, integrer des interfaces, et voir le rendu final.</p>
          <p className='main-about'>Grâce à mon expérience dans le domaine de la vente et la restauration, le travail en équipe, la rigueur ainsi que l’autonomie sont des savoir-faire que j’aimerais mettre au service de mon métier.</p>
          <h4 className='small-title'>Soft skills</h4>
          <div className='soft-skills-container'>
            <p className='soft-skill'>Autonomie</p>
            <p className='soft-skill'>Organisation</p>
            <p className='soft-skill'>Esprit d'équipe</p>
            <p className='soft-skill'>Communication</p>
          </div>
        </div>
      </div>
      <div className='about second-part-about-container'>
        <img className='my-image' src={myImage} alt='mon portrait'></img>
        <p className='small-title name'>Virginie Gaffinet</p>
        <p className='about-me'>35 ans</p>
        <p className='about-me'>Perpignan</p>
        <p className='about-me'>Hobbies : Tennis, informatique, jeux vidéo, musique</p>
        <a href={myCV} download="CV-Virginie-Gaffinet" className='my-cv'>
          <button className='upload-cv'>Télécharger mon CV</button>
        </a>
      </div>
    </div>   
  )
};

export default About;