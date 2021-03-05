import React from 'react';
import './App.css';
import  Header from'./components/header'
import  About from'./components/about'
import  Habilidades from'./components/habilidades'
import  Projetos from'./components/projetos'

function App() {
  return (
<>

    <Header/>
     <About/>
     <Habilidades/>
     <Projetos/>
</>
    
  );
}

export default App;