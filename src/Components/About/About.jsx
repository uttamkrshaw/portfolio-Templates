import React from "react";
import "./About.css";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/profile.JPG";

export const About = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 class="about section" className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img class="home-img" src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Uttam Kumar Shaw </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Dhanbad, Jharkhand (India)
                </span>
                . I have completed my graduation in B.A (Economics Hons)
                from{" "}
                <span className="different">
                  B.S.K College, Maithon
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> which is a military style
                coding school. In Masai School we get to learn both <span  className="different"> Frontend & Backend Technologies</span> like  <span  className="different user-detail-intro"> HTML,CSS, JavaScript,
                MongoDB, NodeJS & Express.</span>
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Gamer{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                AMV Editor{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reader{" "}
              </h4>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
