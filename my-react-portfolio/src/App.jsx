import "./App.css";
import { Tech } from "./components/Tech.jsx";
import { Top } from "./components/top/Top.jsx";
import { ProjectSection } from "./components/projects/ProjectsSection.jsx";
import { Skills } from "./components/skills/Skills.jsx";
import { Talk } from "./components/Talk.jsx";

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
