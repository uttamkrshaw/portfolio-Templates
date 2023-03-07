import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="zoom-out-up">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="flip-down"
          >
            <a
              href="https://www.linkedin.com/in/uttam-kumar-aa183b126/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/uttamkrshaw/"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="mailto:uttamkr5599@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <a href="tel:+919091390251" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
          </div>
          <div id="contact-email" className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>uttamkr5599@gmail.com</p>
              </span>
            </div>
            <div id="contact-phone" className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+919091390251</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
