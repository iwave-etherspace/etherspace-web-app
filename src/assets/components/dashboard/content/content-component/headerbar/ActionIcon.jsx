import React from 'react'

const ActionIcon = ({alt,src}) => {
  return (
    <img
        src={src}
        alt={alt}
        className="w-[33px] h-[33px] cursor-pointer"
    />
  )
}

export default ActionIcon