import globe from "../../assets/globe.svg"

export const LiveDemo = ({url}) => {
  return (
    <a className="btn live-demo" href={url}><img src={globe} alt="" aria-hidden />Live demo</a>
  )
}
