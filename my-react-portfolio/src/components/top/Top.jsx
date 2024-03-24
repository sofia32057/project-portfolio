import "./top.css";
import Arrow from "../../assets/Arrow.svg";
import { ProfileImg } from "../ProfileImg";

export const Top = () => {
  return (
    <header>
      <ProfileImg />
      <div className="heading-container">
      <p className="pre-heading">Hi, I&apos;m Sofia.</p>
      <h1>Junior Web Developer</h1>
      </div>

      <p className="desc">
        Sofia is a senior e-commerce specialist who recently started her
        adventure into Web Development with the Technigo Web Development
        Bootcamp. Her 10+ years of experience within digital marketing combined
        with a passion for clever and elegant solutions makes for an exciting
        journey.
      </p>
      <img
        src={Arrow}
        alt=""
        aria-hidden
        id="arrow"
      />
    </header>
  );
};
