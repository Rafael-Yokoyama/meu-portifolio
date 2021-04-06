import React from "react";
import "./style.css";
import img from "../../img/projeto1.PNG";
import img1 from "../../img/projeto2.PNG";
import img2 from "../../img/projeto3.PNG";
import img3 from "../../img/projeto4.PNG";
import img4 from "../../img/projeto5.PNG";
import ScrollAnimation from "react-animate-on-scroll";

const Projetos = () => {
  return (
    <section className="fun-facts-section" id="projetos">
      <div className="container">
      <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
        <div className="row">
          <div className="  section-title">
            <h2>
              meus <span>projetos</span>
            </h2>
          </div>
        </div>
        </ScrollAnimation>
      
        <div className="row">

          <div className="cards" id="Containerimg">
            
            <div className="divimg">
              <a
                className="bloquinho"
                href="https://pizzariayo.netlify.app/"
                target="_blank"
              >
                <span>
                  <img className="imagemProjetos" src={img4} alt="imagem" />
                </span>
                <figcaption>
                  {" "}
                  Projeto fictício sobre uma Pizzaria <p>
                    clique para visitar
                  </p>{" "}
                </figcaption>
              </a>
            </div>
   
            <div className="divimg">
              <a
                className="bloquinho"
                href="https://fariah-braids.netlify.app/"
                target="_blank"
              >
                <span>
                  <img className="imagemProjetos" src={img} alt="imagem" />
                </span>
                <figcaption>
                  {" "}
                  Website criado sobre Braids e designer de sobrancelhas{" "}
                  <p>clique para visitar</p>{" "}
                </figcaption>
              </a>
            </div>
    
        
            <div className="divimg">
              <a
                className="bloquinho"
                href="https://rafael-yokoyama.github.io/projeto_food/build/"
                target="_blank"
              >
                <span>
                  <img className="imagemProjetos" src={img1} alt="imagem" />
                </span>
                <figcaption>
                  {" "}
                  Projeto Beer & Foods liste comidas <p>
                    clique para visitar
                  </p>{" "}
                </figcaption>
              </a>
            </div>
            
         
            <div className="divimg">
              <a
                className="bloquinho"
                href="https://rafael-yokoyama.github.io/Curriculo_Ts//build/"
                target="_blank"
              >
                <span>
                  <img className="imagemProjetos" src={img2} alt="imagem" />
                </span>
                <figcaption>
                  {" "}
                  Projeto Curriculum apenas um modelo <p>
                    clique para visitar
                  </p>{" "}
                </figcaption>
              </a>
            </div>

            <div className="divimg">
              <a
                className="bloquinho"
                href="https://github.com/Rafael-Yokoyama/Projetos-Trilha-Abinbev-React/tree/main/emporio"
                target="_blank"
              >
                <span>
                  <img className="imagemProjetos" src={img3} alt="imagem" />
                </span>
                <figcaption>
                  {" "}
                  Projeto clone Empório da Cerveja <p>
                    clique para visitar
                  </p>{" "}
                </figcaption>
              </a>
            </div>
        
 
            <div className="divimg">
              <a className="bloquinho" href="#" target="_blank">
                <span>
                  <img className="imagemProjetos" />
                </span>
                <figcaption>
                  {" "}
                  Novidades em breve aguarde <p> carregando ...</p>{" "}
                </figcaption>
              </a>
            </div>
       
          </div>
       
        </div>
  
        
      </div>
    </section>
  );
};

export default Projetos;
