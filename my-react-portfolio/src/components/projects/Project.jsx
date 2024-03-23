import {LiveDemo} from "../buttons/LiveDemo.jsx";
import {ViewCode} from "../buttons/ViewCode.jsx";

export const Project = ({name, desc, homepage, github}) => {
  const heading = name.replaceAll("-", " ")

  return (
    <div>
      <img src="" alt="" />
      <h3>{heading}</h3>
      <p>{desc}</p>
      <ul className="tags">
      </ul>
      <LiveDemo url={homepage} />
      <ViewCode url={github}/>
    </div>
  )
}
