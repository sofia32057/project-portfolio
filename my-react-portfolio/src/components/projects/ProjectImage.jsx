import "./projectImage.css"
import projectImages from "../../assets/project-images/project-images.json"
import "../../assets/project-images/project-chatbot.jpeg"

export const ProjectImage = ({repo}) => {
  const repoImage = projectImages.find(img => img.repoName === repo);
  return (
    <img className="project-image" src={repoImage?.imageUrl} alt={repo} />
  )
}