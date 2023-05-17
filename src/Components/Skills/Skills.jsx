import React from "react";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";

import "./Skills.css";
import html from "../Images/frontend/html.png";
import css from "../Images/frontend/css.png";
import js from "../Images/frontend/js.jpg";
import react from "../Images/frontend/react.png";
import redux from "../Images/frontend/redux.png";
import chakra from "../Images/frontend/chakra.png";
import github from "../Images/tools/github.png";
import mongodb from "../Images/backend/mongodb.png";
import node from "../Images/backend/node.png";
import expressjs from "../Images/backend/expressjs.webp";
import aftereffect from "../Images/tools/aftereffect.webp"
import npm from "../Images/tools/npm.png"
import photoshop from "../Images/tools/photoshop.webp"
import postman from "../Images/tools/postman.png"
import premierpro from "../Images/tools/premierpro.webp"
import slack from "../Images/tools/slack.webp"
import studio from "../Images/tools/studio.webp"


import { useState } from "react";

export const Skills = () => {
  const [btn, setBtn] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  let skills_data = [
    {
      url: html,
      name: "HTML",
      category1: "frontend",
    },
    {
      url: css,
      name: "CSS",
      category1: "frontend",
    },
    {
      url: js,
      name: "JavaScript",
      category1: "frontend",
    },
    {
      url: react,
      name: "React",
      category1: "frontend",
    },
    {
      url: redux,
      name: "Redux",
      category1: "frontend",
    },
    {
      url: chakra,
      name: "Chakra UI",
      category1: "frontend",
    },
    {
      url: node,
      name: "Node JS",
      category2: "backend",
    },
    {
      url: expressjs,
      name: "Express",
      category2: "backend",
    },
    {
      url: mongodb,
      name: "MongoDB",
      category2: "backend",
    },
    {
      url: studio,
      name: "VS Code",
      category2: "tools",
    },
    {
      url: github,
      name: "Github",
      category2: "tools",
    },
    {
      url: postman,
      name: "Postman",
      category2: "tools",
    },
    {
      url: npm,
      name: "Node Modules",
      category2: "tools",
    },
    {
      url: aftereffect,
      name: "After Effects",
      category2: "tools",
    },
    {
      url: premierpro,
      name: "Premier Pro",
      category2: "tools",
    },
    {
      url: photoshop,
      name: "Photoshop",
      category2: "tools",
    },
    {
      url: slack,
      name: "Slack",
      category2: "tools",
    },
    
  ];

  const [skills, setSkills] = useState(skills_data);

  const handleAll = () => {
    setSkills(skills_data);
    setBtn(true);
  };

  const handleFrontend = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category1 == "frontend";
    });
    setSkills(data);
    setBtn(false);
  };

  const handleBackend = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category2 == "backend";
    });
    setSkills(data);
    setBtn(false);
  };
  const handleTool = () => {
    let data = skills_data.filter((elem, index) => {
      return elem.category2 == "tools";
    });
    setSkills(data);
    setBtn(false);
  };
 

  return (
    <div className="skills_container" id="skills">
      <div className="skills_heading">
        <h2>
          Tech <span>Stack</span>
        </h2>
      </div>

      <div className="skills_btn">
        <button onClick={handleAll}>All</button>
        <button onClick={handleFrontend}>Frontend</button>
        <button onClick={handleBackend}>Backend</button>
        <button onClick={handleTool}>Tools</button>

      </div>

      <div className="skills_grid">
        <SimpleGrid columns={[2, 3, 4, 7]} spacing="30px">
          {skills?.map((elem) => (
            <Box className="skills-card" key={elem.name}>
              <div
                className={
                  colorMode == "light"
                    ? "skills_grid_box"
                    : "skills_grid_box_dark"
                }
              >
                <div className="skills_grid_box_img">
                  <img className="skills-card-img" src={elem.url} alt="skills_logo" />
                </div>

                <div className="skills_grid_box_h3">
                  <h3 className="skills-card-name">{elem.name}</h3>
                </div>
              </div>
            </Box>
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};
