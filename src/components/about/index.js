import React  from "react";

import img  from "../../img/courses/home.png";
import './style.css'

const About= () => {
    return (
        <section className="about-section" id="about">
           <div className="container">
               <div className="row h-100 ">
                   <div className="about-text">

                       <h1>Desenvolvedor  <span>Front-end</span> </h1>
       

                       <a href="" className=" btn btn-1">ver projetos</a>
                       
                   </div>

                   <div className="about-img">
                       <div className="about-img-inner">
                           <div className="about-skills">
                                 <div className="about-skills-itens">react</div>
                               <div className="about-skills-itens">html</div>
                               <div className="about-skills-itens">css</div>
                             
                               <div className="about-skills-itens">js</div>
                               <div className="about-skills-itens">ts</div>
                               

                           </div>
                           <img src= {img} alt="about-img" />

                       </div>
                   </div>

               </div>

           </div>
        </section>
    )

}

export default About