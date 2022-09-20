import './Burger.css';

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

export default Burger;

