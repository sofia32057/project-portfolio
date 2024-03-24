import { Button } from "../buttons/Button.jsx";
import { ProjectImage } from "./ProjectImage.jsx";
import { Tag } from "./Tag.jsx";

export const Project = ({ name, desc, homepage, github, topics }) => {
  const heading = name.replaceAll("-", " ");

  return (
    <article className="project">
      <ProjectImage repo={name} />
      <div className="project-info">
        <h3>{heading}</h3>
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
        <Button className="live-demo" url={homepage} />
        <Button className="view-code" url={github} />
      </div>
    </article>
  );
};