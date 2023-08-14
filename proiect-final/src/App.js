import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import './App.css';
import './index.css';
import AboutUs from './container/AboutUs/AboutUs';
import SpecialMenu from './container/SpecialMenu/SpecialMenu';
import Chef from './container/Chef/Chef';
import Intro from './container/Intro/Intro';
import Gallery from './container/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Gallery />
    </div>
  );
}

export default App;
