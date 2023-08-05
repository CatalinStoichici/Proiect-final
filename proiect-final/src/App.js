import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import './App.css';
import './index.css';
import AboutUs from './container/AboutUs/AboutUs';
import SpecialMenu from './container/SpecialMenu/SpecialMenu';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs />
      <SpecialMenu />
    </div>
  );
}

export default App;
