import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiChakraui,
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
    <section  id='#projects'>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div class="project-card" className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/MGkNwRs/zara.jpg"
                    alt="Zara Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2 class="project-title">Zara Clone</h2>
                <p class="project-description">
                Zara is a popular global fashion brand that offers a wide range of clothing,
                 footwear, and accessories for men, women, and children. The website, Zara.com,
                  serves as an online store that allows customers to browse and shop the latest
                   fashion trends from the comfort of their own homes. 
                </p>
                <div class="project-tech-stack">
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://helpful-buttercream-b62142.netlify.app/index.html"
                    target="_blank"
                    rel="noreferrer"
                    class="project-deployed-link"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/uttamkrshaw/sore-sugar-4125"
                    target="_blank"
                    rel="noreferrer"
                    class="project-github-link"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div class="project-card" className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/LhJ7f8X/purplle.png"
                    alt="purplle"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2 class="project-title">Purplle Clone</h2>
                <p class="project-description">
                Purplle is an online beauty and personal care store that offers a wide 
                range of products from well-known brands, including skincare, haircare,
                 makeup, and fragrance. The website aims to provide a hassle-free shopping 
                 experience with a user-friendly interface and features such as detailed product
                 descriptions, reviews, and ratings.
                </p>
                <div class="project-tech-stack">
                  <FaReact />
                  <SiChakraui />
                </div>
                <div>
                  <a
                    href="https://bright-biscuit-2a261c.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    class="project-deployed-link"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/uttamkrshaw/dirty-parcel-1754"
                    target="_blank"
                    rel="noreferrer"
                    class="project-github-link"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div class="project-card" className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://i.ibb.co/k2890Bj/cult-fit.png" alt="cultfit" />
                </div>
              </div>
              <div className="project_information">
                <h2 class="project-title">Cult Fit Clone</h2>
                <p class="project-description">
                Cult.fit is a comprehensive health and fitness platform that offers a range of fitness
                 and wellness services, including online workouts, personal training, nutrition guidance, 
                 and mental wellness support. The website aims to provide a convenient and accessible way 
                 for people to achieve their fitness goals, regardless of their location or experience level. 
                </p>
                <div class="project-tech-stack">
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://dynamic-chaja-e201fa.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    class="project-deployed-link"
                  >
                    <span type="button" className="btns onbt onbt">
                    See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/uttamkrshaw/racial-rule-4263"
                    target="_blank"
                    rel="noreferrer"
                    class="project-github-link"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div  class="project-card" className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/9tdNm2g/music.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2 class="project-title">Music Player</h2>
                <p class="project-description">
                It is a web-based music player that allows users to play their 
                favorite music directly from their web browser. The player has a clean
                 and minimalist interface, making it easy to use for both beginners and advanced users.
                  The website provides a default playlist of popular tracks that users can enjoy.
                </p>
                <div class="project-tech-stack">
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uttamkrshaw.github.io/MUSIC-PLAYER-V2-/"
                    target="_blank"
                    rel="noreferrer"
                    class="project-deployed-link"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/uttamkrshaw/MUSIC-PLAYER-V2-"
                    target="_blank"
                    rel="noreferrer"
                    class="project-github-link"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* website 5
           <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Uniqlo Clone</h2>
                <p>
                  UNIQLO is a clothing apparel company, from Japan. They also
                  sell their products in online mode through their website. We
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>  */}
        {/* website 6
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>

              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div> 
            </div>
          </div>
          */}
        </div>
      </div>
      </section>
    </>
  );
};
