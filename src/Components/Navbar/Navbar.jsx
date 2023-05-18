import {
  Box,
  Flex,
  useColorMode,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "./Navbar.css";
import UttamKumarShawResume from "../Resume/UttamKumarShawResume.pdf";
import { FaSun, FaMoon, FaAlignJustify } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { HiMenu } from "react-icons/hi";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div id="nav-menu">
      {/* --------------------------Desktop--------------------------------------- */}
      <Desktop>
        <Box>
          <div
            style={{
              backgroundColor: colorMode == "light" ? "#25274D" : "#25274D",
            }}
            className="navbar"
            id="NavbarId"
          >
            <div>
              <div className="navbar_container">
                <ul className="navbar_left">
                  <div className="navbar_left_logo">
                    <h2>
                      <a href="#">
                        {" "}
                        UTTAM
                        {/* <span>NIA</span> */}
                      </a>
                    </h2>
                  </div>
                </ul>

                <ul className="navbar_right">
                  <li>
                    <a className="nav-link home" href="#">
                      HOME
                    </a>
                  </li>
                  <li>
                    <a className="nav-link about" href="#about">
                      {" "}
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a class="nav-link projects" href="#projects">
                      PROJECT
                    </a>
                  </li>
                  <li>
                    <a className="nav-link skills" href="#skills">
                      SKILLS
                    </a>
                  </li>
                  <li>
                    <a className="nav-link contact" href="#contact">
                      CONTACT
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/u/0/uc?id=1R0Gq3cFuy0t_2LlxlGQESS9mOV6Iehwn&export=download"
                      target="_blank"
                      download="UttamKumarShawResume"
                      rel="noreferrer"
                      id="resume-button-1"
                      class="nav-link resume"
                    >
                      RESUME
                    </a>
                  </li>
                  {/* <li>
                    <IconButton
                      icon={colorMode == "light" ? <FaMoon /> : <FaSun />}
                      isRound="true"
                      onClick={toggleColorMode}
                    ></IconButton>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </Box>
      </Desktop>
      {/* ---------------------------Tablet-------------------------------------- */}
      <Tablet>
        <Box>
          <div
            style={{
              backgroundColor: colorMode == "light" ? "#25274D" : "#25274D",
            }}
            className="navbar"
            id="NavbarId"
          >
            <div>
              <div className="navbar_container">
                <ul className="navbar_left">
                  <div className="navbar_left_logo">
                    <h2>
                      UTTAM
                      {/* <span>NIA</span> */}
                    </h2>
                  </div>
                </ul>

                <Flex
                  justifyContent="right"
                  alignItems="center"
                  className="tabletnav"
                  gap="20px"
                  paddingRight="20px"
                >
                  <div className="menubar">
                    <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
                      <HiMenu size="40px" />
                    </Box>
                    <Drawer
                      size="xl"
                      isOpen={isOpen}
                      placement="right"
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <DrawerContent
                        style={{
                          backgroundColor:
                            colorMode == "light" ? "#AAABB8" : "#AAABB8",
                        }}
                      >
                        <DrawerCloseButton fontSize="30px" />

                        <DrawerBody textAlign="center">
                          <ul className="Ultablet">
                            <li onClick={onClose}>
                              <a className="nav-link home" href="#">
                                HOME
                              </a>
                            </li>
                            <li onClick={onClose}>
                              <a className="nav-link about" href="#about">
                                {" "}
                                ABOUT
                              </a>
                            </li>
                            <li onClick={onClose}>
                              <a class="nav-link projects" href="#projects">
                                PROJECT
                              </a>
                            </li>
                            <li onClick={onClose}>
                              <a className="nav-link skills" href="#skills">
                                SKILLS
                              </a>
                            </li>
                            <li onClick={onClose}>
                              <a className="nav-link contact" href="#contact">
                                CONTACT
                              </a>
                            </li>
                            <li onClick={onClose}>
                              <a
                                href="https://drive.google.com/u/0/uc?id=1R0Gq3cFuy0t_2LlxlGQESS9mOV6Iehwn&export=download"
                                target="_blank"
                                download="UttamKumarShawResume"
                                rel="noreferrer"
                                id="resume-button-1"
                                class="nav-link resume"
                                className="nav-link resume"
                                id="resume-link-1"
                                download
                                href={UttamKumarShawResume}
                              >
                                RESUME
                              </a>
                            </li>
                          </ul>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </div>

                  {/* <div className="colormode">
                    <IconButton
                      icon={
                        colorMode == "light" ? (
                          <FaMoon size="35px" />
                        ) : (
                          <FaSun size="35px" />
                        )
                      }
                      isRound="true"
                      onClick={toggleColorMode}
                    ></IconButton>
                  </div> */}
                </Flex>
              </div>
            </div>
          </div>
        </Box>
      </Tablet>
      {/* ----------------------------Mobile------------------------------------- */}
      <Mobile>
        <Box>
          <div
            style={{
              backgroundColor: colorMode == "light" ? "#25274D" : "#25274D",
            }}
            className="navbar"
            id="NavbarId"
          >
            <div>
              <div className="navbar_container">
                <ul className="navbar_left">
                  <div className="navbar_left_logo">
                    <h2>
                      UTTAM
                      {/* <span>NIA</span> */}
                    </h2>
                  </div>
                </ul>

                <Flex
                  justifyContent="right"
                  alignItems="center"
                  className="tabletnav"
                  gap="20px"
                  paddingRight="20px"
                >
                  <div className="menubar">
                    <Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
                      <HiMenu size="40px" />
                    </Box>
                    <Drawer
                      size="xl"
                      isOpen={isOpen}
                      placement="right"
                      onClose={onClose}
                      finalFocusRef={btnRef}
                    >
                      <DrawerOverlay />
                      <DrawerContent
                        style={{
                          backgroundColor:
                            colorMode == "light" ? "#464866" : "#464866",
                        }}
                      >
                        <DrawerCloseButton fontSize="30px" />

                        <DrawerBody textAlign="center">
                          <ul className="Ultablet">
                            <li onClick={onClose}>
                              <a className="nav-link home" href="#">
                                HOME
                              </a>
                            </li>
                            <li onClick={onClose}>
                              <a className="nav-link about" href="#about">
                                {" "}
                                ABOUT
                              </a>
                            </li>
                            <li onClick={onClose}>
                              <a class="nav-link projects" href="#projects">
                                PROJECT
                              </a>
                            </li>
                            <li onClick={onClose}>
                              <a className="nav-link skills" href="#skills">
                                SKILLS
                              </a>
                            </li>
                            <li onClick={onClose}>
                              <a className="nav-link contact" href="#contact">
                                CONTACT
                              </a>
                            </li>
                            <li onClick={onClose}>
                              <a
                                id="resume-link-1"
                                href="https://drive.google.com/u/0/uc?id=1R0Gq3cFuy0t_2LlxlGQESS9mOV6Iehwn&export=download"
                                download="UttamKumarShawResume"
                                target="_blank"
                              >
                              RESUME
                              </a>
                            </li>
                          </ul>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </div>

                  {/* <div className="colormode">
                    <IconButton
                      icon={
                        colorMode == "light" ? (
                          <FaMoon size="30px" />
                        ) : (
                          <FaSun size="30px" />
                        )
                      }
                      isRound="true"
                      onClick={toggleColorMode}
                    ></IconButton>
                  </div> */}
                </Flex>
              </div>
            </div>
          </div>
        </Box>
      </Mobile>
    </div>
  );
};
