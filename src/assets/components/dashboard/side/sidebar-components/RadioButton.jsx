import React from 'react'

const RadioButton = ({group,value,id,children}) => {
    const actualId = group+id
  return (
    <div className ="w-full">
        <input type="radio" name={group} value={value} id={actualId} class="hidden peer"/>
        <label htmlFor={actualId} className="
                flex 
              bg-white
              text-black
                w-full
                h-full
                rounded-[0.3rem]
                p-1
                
              hover:bg-[#c96440]/10
              hover:text-black
              hover:fill-[#1D154A]

                transition-colors duration-200
                
              peer-checked:bg-[#C96440]
              peer-checked:text-white
              peer-checked:hover:bg-[#C96440]
                peer-checked:hover:opacity-100
              peer-checked:hover:text-white
              peer-checked:hover:fill-white

              peer-checked:fill-white
              fill-[#1D154A]
                ">
          <div  className="place-content-center ml-5 mr-2">
                {children}
          </div>
          <span>{value}</span>

        </label>

    </div>
  )
}

export default RadioButton