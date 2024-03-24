import globe from "../../assets/globe.svg";
import github from "../../assets/github-dark.svg";
import { useEffect, useState } from "react";

export const Button = ({ className, url }) => {
  const [details, setDetails] = useState({
    "icon": globe,
    "text": "",
  });

  useEffect(() => {
    switch (className) {
      case "live-demo":
        setDetails({ "icon": globe, "text": "Live Demo" });
        break;

      case "view-code":
        setDetails({ "icon": github, "text": "View the code" });
        break;

      default:
        break;
    }
  }, [className]);

  return (
    <a
      className={`btn ${className}`}
      href={url}>
      <img
        src={details.icon}
        alt=""
        aria-hidden
      />
      {details.text}
    </a>
  );
};
