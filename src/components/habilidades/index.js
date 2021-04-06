import React from "react";
import "./style.css";
import {
  FaBootstrap,
  FaHtml5,
  FaReact,
  FaSass,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaRegLightbulb,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { ImMobile } from "react-icons/im";
import ScrollAnimation from "react-animate-on-scroll";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Habilidades = () => {
  return (
    <section className="why-us-section g" id="habilidades">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="row">
            <div className="section-title">
              <h2>
                {" "}
                minhas <span>habilidades</span>
              </h2>
            </div>

            <div className="item-habilidades">
              <div className="icon">
                {" "}
                <FaHtml5 size={40} color={"#0caa68"} />
              </div>
              <h3>html</h3>
              <p>1 ano de experiência</p>
            </div>

            <div className="item-habilidades">
              <div>
                {" "}
                <FaReact size={40} color={"#0caa68"} />
              </div>
              <h3>React</h3>
              <p>2 meses de experiência</p>
            </div>

            <div className="item-habilidades">
              <FaSass size={40} color={"#0caa68"} />
              <h3>Sass</h3>
              <p>2 meses de experiência</p>
            </div>

            <div className="item-habilidades">
              <FaCss3Alt size={40} color={"#0caa68"} />
              <h3>Css</h3>
              <p>1 ano de experiência</p>
            </div>

            <div className="item-habilidades">
              <SiTypescript size={40} color={"#0caa68"} />
              <h3>TypeScript</h3>
              <p>2 meses de experiência</p>
            </div>

            <div className="item-habilidades">
              <FaFigma size={40} color={"#0caa68"} />
              <h3>Figma </h3>
              <p>2 meses de experiência</p>
            </div>

            <div className="item-habilidades">
              <FaBootstrap size={40} color={"#0caa68"} />
              <h3>Bootstrap</h3>
              <p>3 meses de experiência</p>
            </div>

            <div className="item-habilidades">
              <FaJs size={40} color={"#0caa68"} />
              <h3>JavaScript</h3>
              <p>2 meses de experiência</p>
            </div>

            <div className="item-bloq">
              <AiOutlineLoading3Quarters size={40} color={"#fff"} />
              <h3> carregando</h3>
              <p> ...</p>
            </div>
          </div>
        </ScrollAnimation>
        <div className="servicos">
          <AliceCarousel
            animationDuration="1000"
            infinite
            autoPlay
            autoPlayInterval="3000"
            disableButtonsControls="false"
          >
            <div>
              <MdComputer size={40} color={"#0caa68"} />
              <h2> Criação de Sites</h2>
              <p>
                Desenvolvimento de sites profissionais, sistemas web, blogs etc.
              </p>
            </div>
            <div>
              <ImMobile size={40} color={"#0caa68"} />
              <h2> Sites Responsivos</h2>
              <p>
                Criação de sites responsivos para a melhor visualização em todas
                as resoluções.
              </p>
            </div>
            <div>
              <FaRegLightbulb size={40} color={"#0caa68"} />
              <h2> UI/UX Design</h2>
              <p>
                Desenho de layouts que se adequam ao seu negócio de forma
                profissional e fiel no desenvolvimento.
              </p>
            </div>
          </AliceCarousel>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
