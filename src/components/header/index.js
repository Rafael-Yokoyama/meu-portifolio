import React  from "react";
 import './style.css'

const Headertop = () =>{

    return(
  <header className="header">
      <div className="container">
          <div  className="row ">
               <div className="logo">
                   <a href="#" > Dev Yokoyama</a>
               </div>
               <input type= "checkbox" id ="nav-check"/> 
                   <label for="nav-check" className="nav-toggler">
                  <span></span>
                   </label>
                 
               <nav className="nav"> 
                <ul>
              
                    <li> <a href="about"> about </a> </li>
                    <li> <a href="#why-us"> Habilidades </a> </li>
                    <li> <a href=""> projetos </a> </li>
                    <li> <a href=""> contato </a> </li>
                    <li className="header-btn"> <a href="" > Peça orçamento </a> </li>
                    
                </ul>


               </nav>

          </div>
          

      </div>
  </header>


    )}
  
    export default Headertop;