import React from "react";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Components/About/About";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Techstacks } from "./Components/About/Techstacks";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Skills } from "./Components/Skills/Skills";
export default function App() {
  const [{themename}] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top"
      className={`${themename} app`}>
      <Header />
      <main>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
//<section id="#projects"> </section>
// <section id="#contact"></section>