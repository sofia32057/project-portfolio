import "./skillList.css"

export const SkillList = ({ skillType, skills }) => {
  return (
    <div className="skillset">
      <h3>{skillType}</h3>
      <ul>
        {skills.map(skill => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};
