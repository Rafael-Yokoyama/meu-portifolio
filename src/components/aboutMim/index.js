import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import img from "../../img/Rafael2.svg";
import "./style.css";

const AboutMim = () => {
  return (
    <section className="section" id="aboutmim">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="row">
            <div className="  section-title">
              <h2>
                Sobre <span>Mim</span>
              </h2>
            </div>
          </div>
        </ScrollAnimation>
        <div className="row">
          <div className="fun-facts-img">
            <img src={img} />
          </div>
          <div className="fun-facts-items">
            <div className="row justify-content">
              <div className="">
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <p>
                    Meu nome é Rafael, tenho 21 anos, moro no Brasil,
                    especificamente em Itatiba-SP. Atualmente estou cursando
                    Engenharia da Computação na Universidade São Francisco .
                    Também tenho estudado bastante sozinho para aprender novas
                    tecnologias.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="bounceInRight"
                  animateOut="bounceOutLeft"
                >
                  <p>
                    Iniciei como Desenvolvedor Front End em 2020. Desde então
                    venho me dedicando cada vez mais . Vejo que estou no caminho
                    certo pois, vejo os resultados que as horas dedicadas
                    trazem.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMim;
