// import css
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='copyright'>&copy; Copyright {new Date().getFullYear()} - Virginie GAFFINET. Tout droits réservés.
      </p>
    </footer>
  )
};

export default Footer;