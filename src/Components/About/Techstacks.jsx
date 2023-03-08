import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiAmazonaws } from 'react-icons/si';
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiFirebase,
  SiTypescript,
  SiChakraui
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript, SiHeroku } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";
import tailwind from "../../assets/tailwind.png";
import mongo from "../../assets/mongo.png";
import chakra from "../../assets/chakra.png";
import redux from "../../assets/redux.png";
import typescript from "../../assets/typescript.png";
import mui from "../../assets/mui.png";
import express from "../../assets/express.png";






export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-down">
        <h2 className="section__title different">Skills</h2>
        <div  className="techsection">
          <div class="skills-card">
            {/* <SiHtml5 class="skills-card-img" /> */}
            <img  class="skills-card-img" src={html} alt="" srcset="" />

            <h5  class="skills-card-name">HTML</h5>
          </div>
          <div class="skills-card">
            <img  class="skills-card-img" src={css} alt="" srcset="" />
            {/* <DiCss3 class="skills-card-img" /> */}
            <h5 class="skills-card-name">CSS</h5>
          </div>
          <div class="skills-card">
          <img  class="skills-card-img" src={javascript} alt="" srcset="" />

            {/* <SiJavascript class="skills-card-img" /> */}
            <h5 class="skills-card-name">Javascript</h5>
          </div>
          <div class="skills-card">
          <img  class="skills-card-img" src={react} alt="" srcset="" />
            {/* <FaReact  class="skills-card-img"/> */}
            <h5 class="skills-card-name">React</h5>
          </div>
          <div class="skills-card">
            {/* <SiTypescript class="skills-card-img" /> */}
            <img  class="skills-card-img" src={typescript} alt="" srcset="" />

            <h5 class="skills-card-name">Typescript</h5>
          </div>
          <div class="skills-card">
            {/* <SiRedux class="skills-card-img" /> */}
            <img  class="skills-card-img" src={redux} alt="" srcset="" />

            <h5 class="skills-card-name">Redux</h5>
          </div>
          <div class="skills-card">
          <img  class="skills-card-img" src={chakra} alt="" srcset="" />

            {/* <SiChakraui class="skills-card-img" /> */}
            <h5 class="skills-card-name">Chakra UI</h5>
          </div>
          <div class="skills-card">
            {/* <SiMaterialui  class="skills-card-img"/> */}
            <img class="skills-card-img" src={mui} alt="" />
            <h5 class="skills-card-name">MUI</h5>
          </div>
          <div class="skills-card">
          <img  class="skills-card-img" src={tailwind} alt="" srcset="" />
            {/* <SiTailwindcss class="skills-card-img" /> */}
            <h5 class="skills-card-name">Tailwind CSS</h5>
          </div>
          <div class="skills-card">
          <img  class="skills-card-img" src={node} alt="" srcset="" />
            {/* <FaNodeJs class="skills-card-img"/> */}
            <h5 class="skills-card-name">Nodejs</h5>
          </div>
          <div class="skills-card">
          <img  class="skills-card-img" src={mongo} alt="" srcset="" />
            {/* <DiMongodb  class="skills-card-img"/> */}
            <h5 class="skills-card-name">MongoDb</h5>
          </div>

          <div class="skills-card">
            {/* <SiExpress class="skills-card-img" /> */}
            <img  class="skills-card-img" src={express} alt="" srcset="" />

            <h5 class="skills-card-name">Express</h5>
          </div>
          {/* <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <SiFirebase />
            <h5>Firebase</h5>
          </div> */}
        </div>
      </div>
    </>
  );
};
