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
          <h2 className="section__title">
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
                coding school.
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
              <div>
                <button className="btnResume">
                  <a href="https://drive.google.com/u/0/uc?id=1R0Gq3cFuy0t_2LlxlGQESS9mOV6Iehwn&export=download"
                    target="_blank"
                    download="Uttam_Kumar_Shaw_Resume.pdf"
                    id="resume-button-2"
                  >
                     Resume
                  </a>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
