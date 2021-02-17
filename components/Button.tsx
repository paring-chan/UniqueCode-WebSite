import React from 'react'

const Button: React.FC<React.LinkHTMLAttributes<HTMLAnchorElement>> = (
  props,
) => {
  return (
    <a
      {...props}
      className="py-1 px-4 border border-black cursor-pointer transition-colors hover:bg-black hover:text-white"
    />
  )
}

export default Button
