import React from "react";
import Rotate from 'react-reveal/Rotate';
import "./style.css";

const Headertop = () => {

  
  return (
    <header className="header">
      <div className="container">
        <div className="row ">
          <div className="logo">
          <Rotate top left>
            <a href="#"> Dev Yokoyama</a>
            </Rotate>  
          </div>
          <input type="checkbox" id="nav-check" />
          <label htmlFor="nav-check" className="nav-toggler">
            <span></span>
          </label>

          <nav className="nav">
            <ul>
              <li>
                {" "}
                <a href="#aboutmim"> Sobre </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#habilidades"> Habilidades </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#projetos"> projetos </a>{" "}
              </li>
              <li>
                {" "}
                <a href="#footer"> contato </a>{" "}
              </li>
              <Rotate top left>
              <li className="header-btn">
                {" "}
  
                <a
                  href="https://api.whatsapp.com/send?phone=11984720604&text=Mande uma mensagem para conversarmos"
                  target="_blank"
                >
                   
                
              Orçamento
                 
                </a>
            
              </li>
              </Rotate>
         
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Headertop;
