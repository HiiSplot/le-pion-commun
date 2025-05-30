import type React from "react";

type LinkProps = {
  src: string
  text: string
  className: string
}

export const Link: React.FC<LinkProps> = ({ src, text, className }) => {
  return (
    <a className={className} href={src}>{text}</a>
  )
}