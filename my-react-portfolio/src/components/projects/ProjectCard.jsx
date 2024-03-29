import "./projectCard.css";
import { Button } from "../buttons/Button.jsx";
import { ProjectImage } from "./ProjectImage.jsx";
import { Tag } from "./Tag.jsx";
import { Heading } from "../heading/Heading.jsx";

export const ProjectCard = ({ name, desc, homepage, github, topics }) => {
  const heading = name.replaceAll("-", " ");

  return (
    <article className="project-card">
      <ProjectImage repo={name} url={homepage} alt={heading} />
      <div className="project-details">
        <div className="project-info">
          <Heading level="3" content={heading}/>
          <p>{desc}</p>
          <ul className="tags">
            {topics.map(
              topic =>
                topic !== "portfolio" && (
                  <Tag
                    key={topic}
                    topic={topic}
                  />
                )
            )}
          </ul>
        </div>
        <div className="project-btns">
          <Button
            className="live-demo"
            url={homepage}
          />
          <Button
            className="view-code"
            url={github}
          />
        </div>
      </div>
    </article>
  );
};
