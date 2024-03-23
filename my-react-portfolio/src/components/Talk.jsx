import { ProfileImg } from "./ProfileImg"
const email = "sofia32057@gmail.com";

export const Talk = () => {
  return (
    <section>
      <h2>Let&apos;s talk</h2>
      <ProfileImg/>
      <address className="contact-info">
        <ul><li>sofia</li>
        <li><a href={`mailto:${email}`}>{email}</a></li></ul>
      </address>
    </section>
  )
}
