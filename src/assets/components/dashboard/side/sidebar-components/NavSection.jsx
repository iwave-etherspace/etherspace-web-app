import React from 'react'
import NavButton from './NavButton'
import SectionDivider from './SectionDivider'
const NavSection = ({label,children}) => {
  return (
    <nav className="grid grid-cols-1 place-items-start">

        <SectionDivider/>

        <div className="text-[rgba(0,0,0,0.4)] text-xs font-normal">{label}</div>

        <input type="radio" name="menu" value="Overview" id="overview" class="hidden peer"/>
        <div className="grid grid-cols-[auto_1fr]
                nav-radio-button-label 
              bg-white
              text-black
                w-full
                h-full
                rounded-[0.3rem]
                
              hover:bg-green-400 
              peer-checked:bg-blue-700
              peer-checked:text-white 
              hover:peer-checked:bg-amber-700
                ">
          <div  className="col-start-1 place-content-center justify-center ml-5">
            <svg
                className="overview-icon"
                width="10"
                height="10"
                viewBox="0 0 20 21"
                fill="red"
            >
                <path
                d="M7.81261 9.59609C7.90765 9.54123 7.98656 9.46231 8.04142 9.36727C8.09627 9.27223 8.12514 9.16442 8.12511 9.05469V3.42969C8.12456 3.33004 8.10018 3.23198 8.05402 3.14367C8.00786 3.05536 7.94126 2.97936 7.85976 2.92202C7.77826 2.86469 7.68424 2.82766 7.58553 2.81405C7.48681 2.80043 7.38628 2.81062 7.2923 2.84375C5.46807 3.48939 3.93396 4.76457 2.96575 6.44005C1.99755 8.11554 1.65875 10.0815 2.01027 11.9844C2.02849 12.0828 2.07008 12.1754 2.13153 12.2544C2.19298 12.3333 2.27249 12.3964 2.3634 12.4383C2.44531 12.4766 2.53468 12.4963 2.62511 12.4961C2.73481 12.4961 2.84259 12.4673 2.93761 12.4125L7.81261 9.59609ZM6.87511 4.37656V8.69375L3.13449 10.8523C3.12511 10.7344 3.12511 10.6156 3.12511 10.5C3.12622 9.23309 3.4769 7.99106 4.13855 6.91066C4.80019 5.83025 5.74713 4.95337 6.87511 4.37656ZM18.1251 10.5C18.1257 12.2837 17.5394 14.018 16.4565 15.4354C15.3737 16.8528 13.8545 17.8745 12.1334 18.3428C10.4122 18.8111 8.58484 18.7 6.9331 18.0267C5.28137 17.3534 3.8971 16.1553 2.99386 14.6172C2.95176 14.5461 2.92415 14.4675 2.91263 14.3857C2.90112 14.3039 2.90592 14.2207 2.92677 14.1407C2.94762 14.0608 2.9841 13.9859 3.0341 13.9201C3.0841 13.8544 3.14664 13.7992 3.21808 13.7578L9.37511 10.1742V3C9.37511 2.83424 9.44096 2.67527 9.55817 2.55806C9.67538 2.44085 9.83435 2.375 10.0001 2.375C11.418 2.37572 12.811 2.74729 14.0409 3.45282C15.2707 4.15834 16.2947 5.17328 17.0111 6.39688C17.0196 6.40938 17.0275 6.42188 17.0353 6.43516C17.0431 6.44844 17.0509 6.46406 17.0579 6.47812C17.759 7.70247 18.1269 9.08916 18.1251 10.5Z"
                />
            </svg>
          </div>
          <label htmlFor='overview' className='text-[1em] col-start-2'>Overview</label>
        </div>
        

        <input type="radio" name="menu" value="History" id="history" class=""/>
        <label htmlFor='history' class="">
          HISTORY
        </label>

        <input type="radio" name="menu" value="Account" id="account" class=""/>
        <label htmlFor='account'>
          ACCOUNT
        </label>

    </nav>
  )
}

export default NavSection