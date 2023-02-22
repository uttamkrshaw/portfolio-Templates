import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TwitterIcon from '@mui/icons-material/Twitter';
import DescriptionIcon from '@mui/icons-material/Description';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1  id="user-detail-name" data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Uttam Kumar Shaw</span>
        </h1>
        <Type />
        <p id="user-detail-intro" className="about__desc" data-aos="fade-right">
          An Inquisitive solution-driven Full Stack Web Developer.
          Having 1200+ hours of hands-on experience in coding
          and developing real-world web applications with
          TechStack like HTML, CSS, JavaScript, React, TypeScript,
          Redux, NodeJS, MongoDB & Mongoose. Passionate
          about learning new technologies and methodologies.
          {/* Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one. Worked on wordpress since last 3 years and delivered
          15+ projects till now. */}
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/uttamkrshaw"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
            id="contact-github"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:uttamkr5599@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
            id="contact-email"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919091390251"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
            id="contact-phone"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/uttam-kumar-aa183b126/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
            id="contact-linkedin"
          >
            <LinkedInIcon />
          </a>
          {/* <a
            href="https://twitter.com/KhakalShreyas"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a> */}
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1R0Gq3cFuy0t_2LlxlGQESS9mOV6Iehwn/view?usp=share_link"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      {/* <Timeline /> */}
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
