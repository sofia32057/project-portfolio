import "./socials.css"
import { SocialButton } from "../buttons/SocialButton"

export const Socials = () => {
  return (
    <div className="socials">
      <SocialButton site="LinkedIn" url="https://www.linkedin.com/in/sofia-johansson-16a952b0/" />
      <SocialButton site="GitHub" url="https://github.com/sofia32057" />
      <SocialButton site="StackOverflow" url="https://stackoverflowteams.com/c/technigo/users/617/" />
    </div>
  )
}
