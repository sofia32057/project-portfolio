import "./SocialButton.css"
import linkedin from "../../assets/linkedin.svg";
import stackoverflow from "../../assets/stackoverflow.svg";
import github from "../../assets/github.svg";
import { useEffect, useState } from "react";

export const SocialButton = ({ site, url }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    switch (site) {
      case "LinkedIn":
        setIcon(linkedin);
        break;

      case "GitHub":
        setIcon(github);
        break;

      case "StackOverflow":
        setIcon(stackoverflow);
        break;

      default:
        break;
    }
  }, [site]);

  return (
    <a
      className="btn-social"
      href={url}>
      <img
        src={icon}
        alt={site}
      />
    </a>
  );
};
