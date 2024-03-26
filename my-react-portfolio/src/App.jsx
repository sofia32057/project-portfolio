import "./App.css";
import { Tech } from "./components/tech/Tech.jsx";
import { Top } from "./components/top/Top.jsx";
import { ProjectSection } from "./components/projects/ProjectsSection.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { Talk } from "./components/talk/Talk.jsx";

export const App = () => {
  return (
    <>
      <Top />
      <Tech />
      <ProjectSection />
      <Skills />
      <Talk />
    </>
  );
};
