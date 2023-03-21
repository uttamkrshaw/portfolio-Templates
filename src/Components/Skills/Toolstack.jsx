import React from "react";
import "./Toolstack.css";
import aftereffect from "../../assets/aftereffect.webp";
import npm from "../../assets/npm.png";
import photoshop from "../../assets/photoshop.webp";
import postman from "../../assets/postman.webp";
import premierpro from "../../assets/premierpro.webp";
import slack from "../../assets/slack.webp";
import studio from "../../assets/studio.webp";

export const Toolstack = () => {
  return (
    <>
      <div className="section main" data-aos="fade-down">
        <h2 className="section__title different">Tools</h2>
        <div  className="toolsection">
          <div class="skills-card">
            <img  class="skills-card-img" src={aftereffect} alt="" srcset="" />
            <h5  class="skills-card-name">Adobe After Effects</h5>
          </div>
          <div class="skills-card">
            <img  class="skills-card-img" src={photoshop} alt="" srcset="" />
            <h5  class="skills-card-name">Adobe Photoshop</h5>
          </div>
          <div class="skills-card">
            <img  class="skills-card-img" src={premierpro} alt="" srcset="" />
            <h5  class="skills-card-name">Adobe Premiere Pro</h5>
          </div>
          <div class="skills-card">
            <img  class="skills-card-img" src={npm} alt="" srcset="" />
            <h5  class="skills-card-name">npm</h5>
          </div>
          <div class="skills-card">
            <img  class="skills-card-img" src={postman} alt="" srcset="" />
            <h5  class="skills-card-name">Postman</h5>
          </div>
          <div class="skills-card">
            <img  class="skills-card-img" src={slack} alt="" srcset="" />
            <h5  class="skills-card-name">slack</h5>
          </div>
          <div class="skills-card">
            <img  class="skills-card-img" src={studio} alt="" srcset="" />
            <h5  class="skills-card-name">Visual Studio Code</h5>
          </div>
        </div>
      </div>
    </>
  );
};
