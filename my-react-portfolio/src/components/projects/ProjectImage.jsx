import "./projectImage.css";
import projectImages from "../../project-images.json";

export const ProjectImage = ({ repo, url, heading }) => {
  const repoImage = projectImages.find(img => img.repoName === repo);
  return (
    repoImage && (
      <a href={url} className="image-wrapper">
        <img
          className="project-image"
          src={repoImage?.imageUrl}
          alt={heading}
        />
      </a>
    )
  );
};
