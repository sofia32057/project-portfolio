import "./projectSection.css"
import { useEffect, useState } from "react";
import { ProjectCard } from "./ProjectCard.jsx";

export const ProjectSection = () => {
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
    <section className="projects">
      <h2>Featured Projects</h2>
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
    </section>
  );
};