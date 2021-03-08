import React from 'react';
import './App.css';
import  Header from'./components/header'
import  About from'./components/about'
import  Habilidades from'./components/habilidades'
import  Projetos from'./components/projetos'
import  Footer from'./components/footer'
import AboutMim from './components/aboutMim';


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