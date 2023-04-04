import React, { useEffect, useState } from "react";
import "./Home.css";
import profile from "../Images/profile.jpg";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TiArrowUp } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import UttamKumarShawResume from "../Resume/UttamKumarShawResume.pdf"
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const resumeOpen = () => {
    window.open(UttamKumarShawResume);
  };
  return (
    <div id="home">
      <Desktop>
        <div
          style={{
            backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
          }}
          className="home_Container"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box">
                <div className="home_box_content">
                  <h6>Hey, I am </h6>
                  <h4 id="user-detail-name">Uttam Kumar Shaw</h4>
                  <div className="full">
                    <p></p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            "I like to play with Web Applications.",
                            "I'm a Full Stack Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                  <button
                    id="resume-button-2"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1zeacaiNntvIbp22U9xJy4mFEdrIsWRhT/view?usp=share_link",
                        "_blank"
                      );
                    }}
                    className="nav-link resume"
                  >
                    {/* 
                        "https://drive.google.com/uc?export=download&id=1zeacaiNntvIbp22U9xJy4mFEdrIsWRhT" */}
                    <a
                      href={UttamKumarShawResume}
                      target="_blank"
                      rel="norefferer"
                      download={UttamKumarShawResume}
                      id="resume-link-2"
                    >
                      RESUME
                    </a>
                  </button>
                </div>
              </div>
            </Box>

            {/* -------------------------------------------------------------------------------- */}

            <Box height="auto">
              <div className="home_Container_box">
                <div className="home_box_img">
                  <img
                    className="home-img"
                    style={{ borderRadius: "20px" }}
                    //src="https://avatars.githubusercontent.com/u/112754761?s=400&u=34585d279e84f196235a079ea6e84bfa9e2cfe19&v=4"
                    src={profile}
                    alt="Profile_image"
                  />
                </div>
              </div>
            </Box>
          </SimpleGrid>

          <div className="home_box_ul">
            <ul className="header_ul">
              <li>
                <a
                  href="https://github.com/uttamkrshaw"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/uttam-kumar-aa183b126/"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </li>

              <li>
                <a
                  href="mailto:uttamkr5599@gmail.com"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <FiMail />
                </a>
              </li>
            </ul>
          </div>

          <div className="home_up_arrow">
            <a href="#home">
              <TiArrowUp />
            </a>
          </div>
        </div>
      </Desktop>

      <Tablet>
        <div
          style={{
            backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
          }}
          className="home_Container_tablet"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box">
                <div className="home_box_img_tablet">
                  {/* <img src={profile} alt="Profile_image" /> */}
                  <img
                    src={profile}
                    alt="Profile_image"
                  />
                </div>
              </div>
            </Box>
            <Box height="auto">
              <div className="home_Container_box_tablet">
                <div className="home_box_content_tablet">
                  <h6>Hey, I am </h6>
                  <h4>Uttam Kumar Shaw</h4>
                  <div className="full_tablet">
                    <p></p>
                    <span id="changing-str">
                      <Typewriter
                        options={{
                          strings: [
                            "I like to play with Web Applications.",
                            "I'm a Full Stack Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>

                  <button
                    id="resume-button-2"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1R0Gq3cFuy0t_2LlxlGQESS9mOV6Iehwn/view",
                        "_blank"
                      );
                    }}
                    className="nav-link resume"
                  >
                    {/* 
                        "https://drive.google.com/uc?export=download&id=1zeacaiNntvIbp22U9xJy4mFEdrIsWRhT" */}
                    <a
                      href={UttamKumarShawResume}
                      target="_blank"
                      rel="norefferer"
                      download={UttamKumarShawResume}
                      id="resume-link-2"
                    >
                      RESUME
                    </a>
                  </button>
                </div>
              </div>
            </Box>

            {/* -------------------------------------------------------------------------------- */}
          </SimpleGrid>

          <div className="home_box_ul">
            <ul className="header_ul">
              <li>
                <a
                  href="https://github.com/uttamkrshaw"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/uttam-kumar-aa183b126/"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <RiLinkedinFill />
                </a>
              </li>

              <li>
                <a
                  href="mailto:uttamkr5599@gmail.com"
                  rel="noopener norefferer"
                  target="_blank"
                >
                  <FiMail />
                </a>
              </li>
            </ul>
          </div>

          <div className="home_up_arrow">
            <a href="#home">
              <TiArrowUp />
            </a>
          </div>
        </div>
      </Tablet>

      <Mobile>
        <div
          style={{
            backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
            // backgroundColor: colorMode == "dark" ? "#edf2f8" : "#1a202c",
          }}
          className="home_Container_mobile"
          id="home"
        >
          <SimpleGrid columns={[1, 1, 1, 2]}>
            <Box height="auto">
              <div className="home_Container_box_mobile">
                <div className="home_box_img_mobile">
                  {/* <img src={profile} alt="Profile_image" /> */}
                  <img
                    src={profile}
                    alt="Profile_image"
                  />
                </div>
              </div>
            </Box>
            <Box height="auto">
              <div className="home_Container_box_mobile">
                <div className="home_box_content_mobile">
                  <h6>Hey, I am </h6>
                  <h4>Uttam Kumar Shaw</h4>
                  <div className="full_phone">
                    <p></p>
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                           
                            "I like to play with Web Applications.",
                            "I'm a Full Stack Developer.",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                  <button
                    id="resume-button-2"
                    onClick={() => {
                      window.open(
                        "https://drive.google.com/file/d/1R0Gq3cFuy0t_2LlxlGQESS9mOV6Iehwn/view",
                        "_blank"
                      );
                    }}
                    className="nav-link resume"
                  >
                    {/* 
                        "https://drive.google.com/uc?export=download&id=1zeacaiNntvIbp22U9xJy4mFEdrIsWRhT" */}
                    <a
                      href={UttamKumarShawResume}
                      target="_blank"
                      rel="norefferer"
                      download={UttamKumarShawResume}
                      id="resume-link-2"
                    >
                      RESUME
                    </a>
                  </button>
                </div>
              </div>
            </Box>

            {/* -------------------------------------------------------------------------------- */}
          </SimpleGrid>
        </div>
      </Mobile>
    </div>
  );
};
