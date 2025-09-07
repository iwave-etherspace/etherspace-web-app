import React, { useRef,useEffect } from "react";

const TicketModal = ({modalIsOpen,setModalIsOpen}) => {
    
    //focus on modal when rendered
    const modalRef = useRef();
    useEffect(() => {
        if (modalIsOpen) {
            setTimeout(() => {
                if (modalRef.current) {
                modalRef.current.focus();
                }
            }, 0);
        }
    }, [modalIsOpen]);

    const handleOuterClick = (e) => {
    if (e.target === e.currentTarget) {
        setModalIsOpen(false);
    }
    };

    return (
        <>
        {console.log("modalIsOpen: ",modalIsOpen)}
        {modalIsOpen && 
        <>
            <div
                onClick={handleOuterClick}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-all duration-300"
            >
                <div 
                ref={modalRef}
                className="bg-white rounded-2xl shadow-2xl p-6 relative 
                w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 max-w-lg 
                transform scale-100 
                transition-all duration-300 ease-in-out"
                >
                    
                </div>
            </div>
        </>
        }
        </>
    )
}

export default TicketModal;