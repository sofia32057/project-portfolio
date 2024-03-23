import projectImages from "../../assets/project-images/project-images.json"

export const ProjectImage = ({repo}) => {
  const repoImage = projectImages.find(img => img.repoName === repo);
  return (
    <img className="project-image" src={repoImage?.imageUrl} alt={repo} />
  )
}
