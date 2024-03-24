import "./skills.css"
import skillsJson from "../../skills.json";
import { SkillList } from "./SkillList";

export const Skills = () => {

  return (
    <section className="skills">
      <h2>Skills</h2>
      {skillsJson.map(obj => {
        return (
          <SkillList
            key={obj.skillType}
            skillType={obj.skillType}
            skills={obj.skills}
          />
        );
      })}
    </section>
  );
};
