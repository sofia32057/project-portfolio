import "./projects.css";
import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard.jsx";
import { Heading } from "../heading/Heading.jsx";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const result = await fetch(
          "https://api.github.com/users/sofia32057/repos"
        );
        if (!result.ok) {
          throw new Error("Error fetching projects");
        }
        const data = await result.json();
        const projects = await data.filter(project =>
          project.topics.includes("portfolio")
        );
        console.log("Projects in fetch", projects);
        setProjects(projects);
      } catch (error) {
        throw new Error("Error:", error);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <dir className="projects-container">
      <Heading level="2" content="Featured Projects"/>
      {projects &&
        projects.map(project => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              desc={project.description}
              homepage={project.homepage}
              github={project.html_url}
              topics={project.topics}
            />
          );
        })}
    </dir>
  );
};
