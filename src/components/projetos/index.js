import React  from "react";
import './style.css'
import img  from "../../img/courses/home.png";

const Projetos = () => {
    return (
        <section className="fun-facts-section" id="projetos">
            <div className="container">
                <div className="row">
                    <div className="  section-title"> 
                    <h2>meus <span>projetos</span></h2>
                  </div>
                </div>

                <div className="row">
                    <div className="fun-facts-img">
                        <img src={img}/>
                    </div>
                    <div className="fun-facts-items">
                        <div className="row justify-content">
                        <div className="fun-facts-item"> 
                            <h3>Fariah Braids</h3>
                            <p><a href = "https://fariah-braids.netlify.app/" target="_blank">ver site</a></p>
                            </div>
                        <div className="fun-facts-item"> 
                            <h3>5k</h3>
                            <p><a className="a-1" href = "https://github.com/Rafael-Yokoyama/Projetos-Trilha-Abinbev-React" target="_blank">ver site</a></p>
                            </div>
                            <div className="fun-facts-item"> 
                            <h3>APP animais</h3>
                            <p><a className="a-2" href = "https://github.com/Rafael-Yokoyama/animais-peconhentos-" target="_blank">ver site</a></p>
                            </div>
                
                           
                            <div className="fun-facts-item"> 
                            <h3> em contrução</h3>
                            <p><a className="a-3" href = "#" target="_blank">...</a></p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </section>

    )
}

export default Projetos