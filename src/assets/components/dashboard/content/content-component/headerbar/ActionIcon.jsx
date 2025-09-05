import React from 'react'

const ActionIcon = ({alt,src}) => {
  return (
    <img
        src={src}
        alt={alt}
        className="w-[2rem] h-[2rem] cursor-pointer"
    />
  )
}

export default ActionIcon