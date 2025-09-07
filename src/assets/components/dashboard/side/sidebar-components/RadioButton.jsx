import React from 'react'

const RadioButton = ({activeContentState,group,value,children}) => {
  let activeContent = activeContentState[0];
  let setActiveContent = activeContentState[1];
  const actualId = group+value;
  return (
    <div className ="w-full">
        <input type="radio" checked={value === activeContent} onChange={e => setActiveContent(e.target.value)} name={group} value={value} id={actualId} className="hidden peer"/>
        <label htmlFor={actualId} className="
                flex 
              bg-etherspace-blank
              text-black
                w-full
                h-full
                rounded-[0.3rem]
                p-1
                
              hover:bg-[#c96440]/10
              hover:text-black
              hover:fill-[#1D154A]
              hover:stroke-[#1D154A]

                transition-colors duration-200
                
              peer-checked:bg-[#C96440]
              peer-checked:text-etherspace-blank
              peer-checked:hover:bg-[#C96440]
                peer-checked:hover:opacity-100
              peer-checked:hover:text-etherspace-blank
              peer-checked:hover:fill-etherspace-blank
              peer-checked:hover:stroke-etherspace-blank


              peer-checked:fill-etherspace-blank
              peer-checked:stroke-etherspace-blank
              fill-[#1D154A]
              stroke-[#1D154A]
                ">
            {children ? <div  className="place-content-center ml-3 mr-2">{children}</div> : null}
            {children ? <span className="text-[0.8rem]">{value}</span> : <span className="text-[0.7rem] ml-2">{value}</span>}

        </label>

    </div>
  )
}

export default RadioButton