import React from "react";
import "./style.css";
import {
  FaBootstrap,
  FaHtml5,
  FaReact,
  FaSass,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Habilidades = () => {
  return (
    <section className="why-us-section g" id="why-us">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>
              {" "}
              minhas <span>habilidades</span>
            </h2>
          </div>

          <div className="why-us-item">
            <div className="icon"> <FaHtml5 size={40} color={"#0caa68"}/></div>
            <h3>html</h3>
            <p>1 ano de experiência</p>
          </div>

          <div className="why-us-item">
          <div>   <FaReact size={40} color={"#0caa68"} /></div>
            <h3>React</h3>
            <p>2  meses de experiência</p>
          </div>

          <div className="why-us-item">
            <FaSass size={40} color={"#0caa68"} />
            <h3>Sass</h3>
            <p>2  meses de experiência</p>
          </div>

          <div className="why-us-item">
            <FaCss3Alt size={40} color={"#0caa68"} />
            <h3>Css</h3>
            <p>1 ano de experiência</p>
          </div>

          <div className="why-us-item">
            <SiTypescript size={40} color={"#0caa68"} />
            <h3>TypeScript</h3>
            <p>2  meses de experiência</p>
          </div>

          <div className="why-us-item">
            <SiTypescript size={40} color={"#0caa68"} />
            <h3>html</h3>
            <p></p>
          </div>

          <div className="why-us-item">
            <FaBootstrap size={40} color={"#0caa68"} />
            <h3>Bootstrap</h3>
            <p>3  meses de experiência</p>
          </div>

          <div className="why-us-item">
            <FaJs size={40} color={"#0caa68"} />
            <h3>JavaScript</h3>
            <p>2  meses de experiência</p>
          </div>

          <div className="why-us-item">
            <SiTypescript size={40} color={"#0caa68"} />
            <h3>html</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
