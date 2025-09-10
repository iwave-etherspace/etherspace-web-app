import React from 'react'

const SectionDivider = ({additionalClasses}) => {
  return (
    <div className={"w-full m-[1rem_0_1rem] "+additionalClasses}>
      <img src="src/assets/imgs/nav/divider.svg" alt="Section Divider" />
    </div>
  )
}

export default SectionDivider