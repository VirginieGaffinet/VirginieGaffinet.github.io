import './Burger.css';
// import propTypes
import PropTypes from 'prop-types';

function Burger ({isActive, setIsActive}) {
  return (
  <div id="hamburger-icon" className={(isActive ? 'open' : '')}
  onClick={() => {
    setIsActive(!isActive)
  }}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
)};

Burger.propTypes = {
  isActive : PropTypes.bool,
  setIsActive : PropTypes.func,
}

export default Burger;

