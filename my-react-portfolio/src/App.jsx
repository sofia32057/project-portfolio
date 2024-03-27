import "./App.css";
import { Top } from "./components/top/Top.jsx";
import { Talk } from "./components/talk/Talk.jsx";
import { Section } from "./components/section/Section.jsx";

export const App = () => {
  return (
    <>
      <Top />
      <Section
        className={"tech color"}
        id={"tech"}
      />
      <Section
        className={"projects"}
        id={"projects"}
      />
      <Section
        className={"skills color"}
        id={"skills"}
      />
      <Talk />
    </>
  );
};
