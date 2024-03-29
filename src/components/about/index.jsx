import React from "react";
import img from "../../img/Rafael.svg";
import ScrollAnimation from "react-animate-on-scroll";
import "./style.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row h-100 ">
          <div className="about-text">
            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutRight"
            >
              <h1>
                Desenvolvedor <span>Front-end</span>{" "}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <a href="#projetos" className=" btn btn-1">
                ver projetos
              </a>
            </ScrollAnimation>
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
              <img src={img} alt="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
