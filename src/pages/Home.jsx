import HomeSection from "../sections/Home";
import About from "../sections/About";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import CV from "../sections/CV";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <>
      <HomeSection />
      <About />
      <Education />
      <Projects />
      <Skills />
      <CV />
      <Contact />
    </>
  );
};

export default Home;