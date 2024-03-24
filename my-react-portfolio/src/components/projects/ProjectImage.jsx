import "./projectImage.css"
import projectImages from "../../project-images.json"

export const ProjectImage = ({repo}) => {
  const repoImage = projectImages.find(img => img.repoName === repo);
  return (
    repoImage &&
    <img className="project-image" src={repoImage?.imageUrl} alt={repo} />
  )
}