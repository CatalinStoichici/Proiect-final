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
import FindUs from './container/FindUs/FindUs';
import Footer from './container/Footer/Footer';


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
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;
