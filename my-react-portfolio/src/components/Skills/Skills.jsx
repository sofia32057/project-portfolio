import "./skills.css";
import skillsJson from "../../skills.json";
import { SkillList } from "./SkillList";
import { Heading } from "../heading/Heading";

export const Skills = () => {
  const groupSize = 2;
  const group = skillsJson
    .map(obj => {
      // map json to create array of components
      return (
        <SkillList
          key={obj.skillType}
          skillset={obj.skillType}
          skills={obj.skills}
        />
      );
    })
    .reduce((g, el, i) => {
      // to control rows on tablet -->
      // divide array in groups by groupSize, result looks like:
      // [[SkillList1, SkillList2], [SkillList3, SkillList4], ...]
      i % groupSize === 0 && g.push([]);
      g[g.length - 1].push(el); //This, I don't get
      return g;
    }, [])
    .map((groupContent, i) => {
      // surround every group with div 'skill-group'
      return (
        <div
          key={i}
          className="skills-group">
          {groupContent}
        </div>
      );
    });
  return (
    // render
    <>
      <Heading
        level="2"
        content="Skills"
      />
      <div className="skills-container">{group}</div>
    </>
  );
};

