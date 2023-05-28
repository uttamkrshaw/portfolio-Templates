import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import "./Projects.css";
import music from "../Images/projects/music.png"
import cultfit from "../Images/projects/cultfit.png"
import purplle from "../Images/projects/purplle.png"
import zara from "../Images/projects/zara.jpg"
import indiamart from "../Images/projects/indiamart.png"
import { FaGithub, FaEye } from "react-icons/fa";

export const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      id="projects"
      className="project_main_container"
      style={{
        backgroundColor: colorMode === "light" ? "#25274D" : "#25274D",
      }}
    >
      <div className="project_container">
        <div className="project_heading">
          <h2>
            <span>My</span> Creative <span>Projects </span>
          </h2>
        </div>

        <div className="project_grid">
          <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px" className="project_grid">
            <Box >
              <div
                className="project-card"
                style={{
                  backgroundColor: colorMode === "light" ? "#464866" : "#464866",
                }}
              >
                <div className="project_image">
                  <img src={indiamart} alt="" />
                </div>

                <div className="project-title">
                  <h2>India Mart Clone</h2>
                </div>
                <div className="project-description">
                  <p>
                    IndiaMART is one of India's leading online marketplaces, connecting buyers and sellers from diverse industries. Established in 1996, IndiaMART has grown to become a prominent platform for businesses to discover new opportunities and expand their reach.

                    With millions of products and services listed on its platform.  
                     </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span  >Tech Stack :</span> React, Chakra UI,
                    API, Icons

                  </h5>
                </div>
                <div className="project_icon">
                  <div className="project-github-link">
                    <a
                      className="project-github-link"
                      href="https://github.com/uttamkrshaw/wandering-cactus-2429-India_Mart-"
                      target="_blank" rel="noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div class="project-deployed-link">
                    <a
                      href="https://clone-india-mart.netlify.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box >
              <div
                // className="project_box"
                className="project-card"
                style={{
                  backgroundColor: colorMode === "light" ? "#464866" : "#464866",
                }}
              >
                <div className="project_image">
                  <img src={zara} alt="tata1mg" />
                </div>

                <div className="project-title">
                  <h2 >Zara Clone</h2>
                </div>
                <div className="project-description" >
                  <p >
                    Zara is a popular global fashion brand that offers a wide range of clothing, footwear, and accessories for men, women, and children. The website, Zara.com, serves as an online store that allows customers to browse and shop the latest fashion trends from the comfort of their own homes.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span  >Tech Stack :</span> HTML, CSS, JavaScript,
                    API

                  </h5>
                </div>
                <div className="project_icon">
                  <div className="github_link">
                    <a
                      className="project-github-link"
                      href="https://github.com/uttamkrshaw/sore-sugar-4125"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="deploy_link">
                    <a
                      className="project-deployed-link"
                      href="https://comfy-bonbon-a3c563.netlify.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box >
              <div
                // className="project_box"
                className="project-card"
                style={{
                  backgroundColor: colorMode === "light" ? "#464866" : "#464866",
                }}
              >
                <div className="project_image">
                  <img src={cultfit} alt="shopall" />
                </div>

                <div className="project-title">
                  <h2>Cult Fit Clone</h2>
                </div>
                <div className="project-description">
                  <p>
                    Cult.fit is a comprehensive health and fitness platform that offers a range of fitness and wellness services, including online workouts, personal training, nutrition guidance, and mental wellness support. The website aims to provide a convenient and accessible way for people to achieve their fitness goals, regardless of their location or experience level.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, JavaScript, Chakra UI, CSS,
                    React Icons
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="project-github-link">
                    <a
                      href="https://github.com/uttamkrshaw/racial-rule-4263"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="project-deployed-link">
                    <a
                      href="https://dynamic-chaja-e201fa.netlify.app/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

            <Box >
              <div
                // className="project_box"
                className="project-card"
                style={{
                  backgroundColor: colorMode === "light" ? "#464866" : "#464866",
                }}
              >
                <div className="project_image">
                  <img src={music} alt="shopall" />
                </div>

                <div className="project-title">
                  <h2 >Music Player</h2>
                </div>
                <div className="project-description">
                  <p>
                    It is a web-based music player that allows users to play their favorite music directly from their web browser. The player has a clean and minimalist interface, making it easy to use for both beginners and advanced users. The website provides a default playlist of popular tracks that users can enjoy.
                  </p>
                </div>
                <div className="project_tech_stack">
                  <h5>
                    <span>Tech Stack :</span> React, JavaScript, Chakra UI, CSS,
                    React Icons
                  </h5>
                </div>
                <div className="project_icon">
                  <div className="project-github-link">
                    <a
                      href="https://github.com/uttamkrshaw/MUSIC-PLAYER-V2-"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="project-deployed-link">
                    <a
                      href="https://uttamkrshaw.github.io/MUSIC-PLAYER-V2-/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <FaEye />
                    </a>
                  </div>
                </div>
              </div>
            </Box>

          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};
