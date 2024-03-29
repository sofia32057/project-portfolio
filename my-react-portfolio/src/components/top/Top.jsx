import "./top.css";
import { ProfileImage } from "../profileImage/ProfileImage";
import { Heading } from "../heading/Heading";
import { Arrow } from "../arrow/Arrow";

export const Top = () => {
  return (
    <header>
      <div className="about-container">
        <ProfileImage />
        <div className="heading-container">
          <p className="pre-heading">Hi, I&apos;m Sofia.</p>
          <Heading level="1" content="Junior Web Developer"/>
        </div>
        <div className="desc-wrapper">
          <p className="desc">
            Sofia is a senior e-commerce specialist who recently started her
            adventure into Web Development with the Technigo Web Development
            Bootcamp. Her 10+ years of experience within digital marketing
            combined with a passion for clever and elegant solutions makes for
            an exciting journey.
          </p>
        </div>
      </div>
    <Arrow />
    </header>
  );
};
