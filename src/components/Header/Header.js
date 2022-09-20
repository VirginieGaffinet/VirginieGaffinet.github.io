import './Header.css';
// import components
import NavBar from './NavBar/NavBar';
import Burger from './Burger/Burger';

function Header({isActive, setIsActive}) {
  return (
    <div className="header-container">
      <a href='#accueil' className='logo-name-contains'>
        <h1 className="logo-name">Virginie Gaffinet</h1>
      </a>
      <div className={(isActive ? "burger-nav-container show-burger-nav" : "")}>
        <NavBar isActive={isActive}/>
        <Burger isActive={isActive} setIsActive={setIsActive}/>
      </div>
      
    </div>
)};

export default Header;