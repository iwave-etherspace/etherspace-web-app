import React from 'react'

const ActionIcon = ({alt,src}) => {
  return (
    <img
        src={src}
        alt={alt}
        className="md:h-[2rem] h-[1.5rem] cursor-pointer"
    />
  )
}

export default ActionIcon