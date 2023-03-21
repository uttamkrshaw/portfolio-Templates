import React from "react";
import "./Toolstack.css";
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
import aftereffect from "../../assets/aftereffect.webp";
import npm from "../../assets/npm.webp";
import photoshop from "../../assets/photoshop.webp";
import postman from "../../assets/postman.webp";
import node from "../../assets/node.png";
import premierpro from "../../assets/premierpro.webp";
import slack from "../../assets/slack.webp";
import studio from "../../assets/studio.webp";

export const Toolstack = () => {
  return (
    <>
      <div className="section main" data-aos="fade-down">
        <h2 className="section__title different">Tools</h2>
        <div  className="techsection">
          <div class="skills-card">
            {/* <SiHtml5 class="skills-card-img" /> */}
            <img  class="skills-card-img" src={aftereffect} alt="" srcset="" />
            <h5  class="skills-card-name">After Effect</h5>
          </div>
          <div class="skills-card">
            <img  class="skills-card-img"  alt="" srcset="" />
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
