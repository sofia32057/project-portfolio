import skillsJson from "../../assets/skills.json";
import { SkillList } from "./SkillList";

export const Skills = () => {

  return (
    <section>
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
