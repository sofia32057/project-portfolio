import profileImg from "../../assets/sofia.jpeg";
import "./profileImage.css"

export const ProfileImage = () => {
  return (
    <img
    className="profile-img"
    src={profileImg}
    alt="Sofia"
  />
  )
}
