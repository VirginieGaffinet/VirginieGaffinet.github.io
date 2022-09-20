// import css
import './App.css';
// import react
import { useState } from 'react';
// import components
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import About from '../About/About';

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="app">
      <Header 
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Welcome />
      <About />
    </div>
  );
}

export default App;
