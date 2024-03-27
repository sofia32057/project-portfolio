import "./section.css"
import { useEffect, useState } from "react";
import { Projects } from "../projects/Projects.jsx";
import { Tech } from "../tech/Tech.jsx";
import { Skills } from "../Skills/Skills.jsx";

export const Section = ({ className, id }) => {
  const [comp, setComp] = useState();

  useEffect(() => {
    switch (id) {
      case "tech":
        setComp(<Tech />);
        break;
      case "projects":
        setComp(<Projects />);
        break;
      case "skills":
        setComp(<Skills />);
        break;
      default:
        break;
    }
  }, []);

  return (
    <section
      className={className}
      id={id}>
      {comp}
    </section>
  );
};
