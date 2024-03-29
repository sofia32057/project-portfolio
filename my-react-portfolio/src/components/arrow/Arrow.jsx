import "./arrow.css"
import arrow from "../../assets/Arrow.svg";

export const Arrow = () => {
  return (
    <div className="arrow-wrapper">
    <img
      src={arrow}
      alt=""
      aria-hidden
      id="arrow"
    />
  </div>
  )
}
