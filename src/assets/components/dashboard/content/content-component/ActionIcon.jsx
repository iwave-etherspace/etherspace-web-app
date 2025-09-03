import React from 'react'

const ActionIcon = ({alt,src}) => {
  return (
    <img
        src={src}
        alt={alt}
        className="action-icon"
    />
  )
}

export default ActionIcon