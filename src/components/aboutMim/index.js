import React  from "react";

import img  from "../../img/courses/home.png";
import'./style.css'

const AboutMim = () => {
    return(
        <section className="section" id="#">
        <div className="container">
            <div className="row">
                <div className="  section-title"> 
                <h2>Sobre <span>Mim</span></h2>
              </div>
            </div>

            <div className="row">
                <div className="fun-facts-img">
                    <img src={img}/>
                </div>
                <div className="fun-facts-items">
                    <div className="row justify-content">
                    <div className=""> 
                     
                        
                        <p>Meu nome é Rafael, tenho 21 anos, moro no Brasil, especificamente em Itatiba-SP.
                             Atualmente estudo Engenharia da Computação estudando em uma universidade .
                              Também tenho estudado bastante sozinho para aprender novas tecnologias</p>


                              <p>Iniciei como Desenvolvedor Front End em 2020. Desde então venho dedicando cada dia mais .
                                   Vejo que estou no caminho certo pois, vejo os resultados que as horas dedicadas trazem.</p>
                     
                        </div>
                
                       
            
                       
                      


                    </div>
                </div>
            </div>
        </div>


    </section>

    )
}

export default AboutMim