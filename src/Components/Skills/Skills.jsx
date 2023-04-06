import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { useState } from "react";

import "./Skills.css";
import html from "../Images/html.png"
import css from "../Images/css.png"
import javascript from "../Images/javascript.png"
import react from "../Images/react.png";
import redux from "../Images/redux.png";
import chakra from "../Images/chakra.png"
import node from "../Images/node.png";
import express from "../Images/express.webp";
import mongo from "../Images/mongo.png";
import github from "../Images/github.png"
import postman from "../Images/postman.webp"
import typescript from "../Images/typescript.png"


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
      url: javascript,
      name: "JavaScript",
      category1: "frontend",
    },

    {
      url: react,
      name: "React",
      category1: "frontend",
    },
    {
      url: typescript,
      name: "TypeScript",
      category2: "frontend",
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
      url: express,
      name: "Express",
      category2: "backend",
    },

    {
      url: mongo,
      name: "MongoDB",
      category2: "backend",
    }
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

  // console.log(skills);

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
      </div>

      <div className="skills_grid">
        <SimpleGrid columns={[2, 3, 4, 5]} spacing="20px">
          {skills?.map((elem) => (
            <Box  className="skills-card"  key={elem.name}>
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
