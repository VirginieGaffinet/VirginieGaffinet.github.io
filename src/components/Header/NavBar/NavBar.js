import './NavBar.css';
// import propTypes
import PropTypes from 'prop-types';
function NavBar({isActive}) {
  return (
    <ul className={"nav-container" + (isActive ? " show-nav" : "")}>
        <li className="nav-name"><a href="#accueil" className="nav-link">Accueil</a></li>
        <li className="nav-name"><a href="#about" className="nav-link">A propos</a></li>
        <li className="nav-name"><a href="#skills" className="nav-link">Compétences</a></li>
        <li className="nav-name"><a href="#portfolio" className="nav-link">Portfolio</a></li>
        <li className="nav-name"><a href="#contact" className="nav-link">Contact</a></li>
    </ul>
  )
};

NavBar.propTypes = {
  isActive : PropTypes.bool,
}

export default NavBar;