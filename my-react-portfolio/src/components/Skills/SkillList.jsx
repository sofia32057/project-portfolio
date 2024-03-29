import { Heading } from "../heading/Heading";
import "./skillList.css"

export const SkillList = ({ skillset, skills }) => {
  return (
    <div className="skillset">
      <Heading level="3" content={skillset}/>
      <ul className="skill-list">
        {skills.map(skill => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};
