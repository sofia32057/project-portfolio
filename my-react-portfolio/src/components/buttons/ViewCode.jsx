import github from "../../assets/github.svg"

export const ViewCode = ({url}) => {
  return (
    <a className="btn view-vode" href={url}><img src={github} alt="" aria-hidden />View Code</a>
  )
}
