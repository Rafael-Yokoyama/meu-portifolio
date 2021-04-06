import React from 'react';
import './App.css';
import  Header from'./components/header'

import  Habilidades from'./components/habilidades'
import  Projetos from'./components/projetos'
import  Footer from'./components/footer'
import AboutMim from './components/aboutMim';
import About from './components/about';


function App() {
  return (
<>

    <Header/>

     <About/>
     <AboutMim/>
     <Habilidades/>
     <Projetos/>
     <Footer/>
</>
    
  );
}

export default App;