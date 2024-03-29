import "./heading.css"

export const Heading = ({level, content}) => {
  const Tag = `h${level}`;
  return (
    <Tag>{content}</Tag>
  )
}
