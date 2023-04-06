import React from "react";
import "./SoftSkills.css";
import { SimpleGrid, Box, useColorMode } from "@chakra-ui/react";
import aftereffect from "../Images/aftereffect.webp"
import github from "../Images/github.png"
import npm from "../Images/npm.png"
import photoshop from "../Images/photoshop.webp"
import postman from "../Images/postman.webp"
import premierpro from "../Images/premierpro.webp"
import slack from "../Images/slack.webp"
import studio from "../Images/studio.webp"


export const SoftSkills = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div
      className="main_container"
      style={{
        backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
      }}
    >
      <div className="softskills_container">
        <div className="softskills_header">
          <h2>
             <span>Tools</span>
          </h2>
        </div>
        {/* --------------------------SoftSkills------------------------------------------- */}
        <div className="softskills">
          {/* <div className="softskills_text">
            <h2>Tools</h2>
          </div> */}

          <SimpleGrid columns={[1, 2, 2, 4]} spacing="60px">
            <Box className="softskills_box">
              <div className="skills_img">
                <img src={aftereffect} alt="aftereffect" />
              </div>
              <p>After Effect</p>
            </Box>

            <Box className="softskills_box">
              <div className="skills_img">
                <img src={premierpro} alt="premierpro" />
              </div>
              <p>Premier Pro</p>
            </Box>

            <Box className="softskills_box">
              <div className="skills_img">
                <img src={photoshop} alt="photoshop" />
              </div>
              <p>Photoshop</p>
            </Box>

            <Box className="softskills_box">
              <div className="skills_img">
                <img src={npm} alt="npm" />
              </div>
              <p>Node Package Manager</p>
            </Box>
            <Box className="softskills_box">
              <div className="skills_img">
                <img src={github} alt="github" />
              </div>
              <p>Github</p>
            </Box>
            <Box className="softskills_box">
              <div className="skills_img">
                <img src={postman} alt="postman" />
              </div>
              <p>Postman</p>
            </Box>
            <Box className="softskills_box">
              <div className="skills_img">
                <img src={studio} alt="studio" />
              </div>
              <p>Visual Studio Code</p>
            </Box>
            <Box className="softskills_box">
              <div className="skills_img">
                <img src={slack} alt="slack" />
              </div>
              <p>Slack</p>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
};
