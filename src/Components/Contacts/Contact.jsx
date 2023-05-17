import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { Box, SimpleGrid, useColorMode } from "@chakra-ui/react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_you629c",
        "template_y3cb6mx",
        form.current,
        "j6Lw0W-SbY7mRaaJV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      style={{
        backgroundColor: colorMode == "light" ? "#edf2f8" : "#1a202c",
        
      }}
      className="contact_container"
      id="contact"
    >
      <div className="contact_content" >
        <div className="contact_heading">
          <h2>
           <span>CONTACT ME </span> LETS GET IN TOUCH
          </h2>
        </div>

        <div className="bothbox">
          <SimpleGrid columns={[1, 1, 1, 2]} spacing="50px">
            <Box>
              <div className="input_box">
                <div className="contact_icon">
                  <SimpleGrid columns={[2]} >
                    <Box className="icon_box">
                      <a id="contact-linkedin"
                        href="https://www.linkedin.com/in/uttam-kumar-aa183b126/"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <div className="icon" id="icon1">
                          <FaLinkedin />
                          <h3>LinkedIn</h3>
                        </div>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a
                       id="contact-github"
                        href="https://github.com/uttamkrshaw"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <div className="icon" id="icon2">
                          <FaGithub />
                          <h3>GitHub</h3>
                        </div>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a id="contact-email"
                        href="mailto:uttamkr5599@gmail.com"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <div className="icon" id="icon3">
                          <FiMail />
                          <h3>Gmail</h3>
                        </div>
                      </a>
                    </Box>
                    <Box className="icon_box">
                      <a
                        href="https://wa.me/message/ZM24NUF5DKYVK1"
                        // href="ZM24NUF5DKYVK1"
                        rel="noopener norefferer"
                        target="_blank"
                      >
                        <div className="icon" id="icon4">
                          <BiPhoneCall />
                          <h3 id="contact-phone">+91-9091390251</h3>
                        </div>
                      </a>
                    </Box>
                  </SimpleGrid>
                </div>

                <div className="contact_information">
                  <form ref={form} onSubmit={sendEmail}>
                    <div>
                      <input
                        required={true}
                        name="from_name"
                        className="input_tag"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    <div>
                      <input
                        required={true}
                        name="user_email"
                        className="input_tag"
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                      name = "user_number"
                        required={true}
                        className="input_tag"
                        type="number"
                        placeholder="Number"
                      />
                    </div>
                    <div className="input_message">
                      <textarea
                        required={true}
                        name="message"
                        className="input_tag_text_message"
                        type="text"
                        placeholder="Your Message"
                      />
                    </div>
                    <div>
                      <button type="submit" className="input_btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Box>
          </SimpleGrid>
        </div>
      </div>


    </div>
  );
};
