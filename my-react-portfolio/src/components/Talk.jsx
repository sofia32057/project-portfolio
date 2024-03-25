import { ProfileImage } from "./profileImage/ProfileImage"
import { Socials } from "./Socials";
import { TickerTape } from "./TickerTape";
const email = "sofia32057@gmail.com";

export const Talk = () => {
  return (
    <footer>
      <h2>Let&apos;s talk</h2>
      <ProfileImage/>
      <address className="contact-info">
        <ul><li>sofia</li>
        <li><a href={`mailto:${email}`}>{email}</a></li></ul>
      </address>
      <Socials />
      <TickerTape/>
    </footer>
  )
}
