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

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-down">
        <h2 className="section__title different">Skills</h2>
        <div  className="techsection">
          <div class="skills-card">
            <SiHtml5 class="skills-card-img" />
            <h5 class="skills-card-name">HTML</h5>
          </div>
          <div class="skills-card">
            <DiCss3 class="skills-card-img" />
            <h5 class="skills-card-name">CSS</h5>
          </div>
          <div class="skills-card">
            <SiJavascript class="skills-card-img" />
            <h5 class="skills-card-name">Javascript</h5>
          </div>
          <div class="skills-card">
            <FaReact  class="skills-card-img"/>
            <h5 class="skills-card-name">React</h5>
          </div>
          <div class="skills-card">
            <SiTypescript class="skills-card-img" />
            <h5 class="skills-card-name">Typescript</h5>
          </div>
          <div class="skills-card">
            <SiRedux class="skills-card-img" />
            <h5 class="skills-card-name">Redux</h5>
          </div>
          <div class="skills-card">
            <SiChakraui class="skills-card-img" />
            <h5 class="skills-card-name">Chakra UI</h5>
          </div>
          <div class="skills-card">
            <SiMaterialui  class="skills-card-img"/>
            <h5 class="skills-card-name">MUI</h5>
          </div>
          <div class="skills-card">
            <SiTailwindcss class="skills-card-img" />
            <h5 class="skills-card-name">Tailwind CSS</h5>
          </div>
          <div class="skills-card">
            <FaNodeJs class="skills-card-img"/>
            <h5 class="skills-card-name">Nodejs</h5>
          </div>
          <div class="skills-card">
            <DiMongodb  class="skills-card-img"/>
            <h5 class="skills-card-name">MongoDb</h5>
          </div>

          <div class="skills-card">
            <SiExpress class="skills-card-img" />
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
