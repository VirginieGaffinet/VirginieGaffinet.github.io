import './Header.css';
// hooks
import { useEffect, useRef } from 'react';
// import components
import NavBar from './NavBar/NavBar';
import Burger from './Burger/Burger';

function Header({isActive, setIsActive}) {
  const burgerMenu = useRef();
  const handleBurgerMenuClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      // -> if it's not a click on our "burger button"
      // we close the burger menu
      if (isActive && burgerMenu.current && !burgerMenu.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    // -> we attached a click listener to the document
    // https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
    // https://www.codingdeft.com/posts/react-on-click-outside/
    document.addEventListener('click', checkIfClickedOutside);

    // -> we remove our click listener after the update of our component
    // -> our component re update if isBurgerMenuOpen changed
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isActive]);

  return (
    <div className="header-container">
      <a href='#accueil' className='logo-name-contains'>
        <h1 className="logo-name">Virginie Gaffinet</h1>
      </a>
      <div 
        className={(isActive ? "burger-nav-container show-burger-nav" : "")} 
        ref={burgerMenu}
        onClick={handleBurgerMenuClick}
      >
        <NavBar isActive={isActive}/>
        <Burger isActive={isActive} setIsActive={setIsActive}/>
      </div>
      
    </div>
)};

export default Header;