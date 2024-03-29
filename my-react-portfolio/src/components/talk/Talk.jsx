import "./talk.css";
import { ProfileImage } from "../profileImage/ProfileImage";
import { Socials } from "../socials/Socials";
import { TickerTape } from "../tickertape/TickerTape";
import { Heading } from "../heading/Heading";
const email = "sofia32057@gmail.com";

export const Talk = () => {
  return (
    <footer>
      <div className="talk-container">
        <Heading level="2" content="Let's talk"/>
        <ProfileImage />
        <address className="contact-info">
          <ul>
            <li>sofia</li>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          </ul>
        </address>
        <Socials />
      </div>
      <TickerTape />
    </footer>
  );
};
