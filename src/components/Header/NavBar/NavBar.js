import './NavBar.css';

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

export default NavBar;