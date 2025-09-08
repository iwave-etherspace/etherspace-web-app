import React from 'react'

const Modal = ({isActive,onClose,children}) => {
  return (
    <>
        {isActive && 
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 transition-all duration-300"
            >
                <div className="bg-white rounded-2xl shadow-2xl p-6 relative 
                    w-9/16 md:w-3/3 max-w-lg 
                    transform scale-100 
                    transition-all duration-300 ease-in-out
                    grid justify-center">
                    {children}
                </div>
            </div>
        }
    </>
  )
}

export default Modal