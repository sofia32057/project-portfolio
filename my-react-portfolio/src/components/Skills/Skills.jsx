import "./skills.css";
import skillsJson from "../../skills.json";
import { SkillList } from "./SkillList";

export const Skills = () => {
  return (
    <>
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsJson.map(obj => {
          return (
            <SkillList
              key={obj.skillType}
              skillType={obj.skillType}
              skills={obj.skills}
            />
          );
        })}
      </div>
    </>
  );
};
