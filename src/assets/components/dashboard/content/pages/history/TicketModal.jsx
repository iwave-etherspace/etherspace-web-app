import React, { useRef,useState,useEffect,memo } from "react";
import Modal from "../../content-component/generic-components/Modal";


const ticketAPI = {
    "1244235":{
        img:"src/assets/imgs/TEMP/test_ticket.jpg",
        win:true,
        amount:"₱ 4,000",
        claimed:true,
    },
    "1244236":{
        img:"src/assets/imgs/TEMP/test_ticket.jpg",
        win:false,
        amount:"",
        claimed:false,
    },
    "1244237":{
        img:"src/assets/imgs/TEMP/test_ticket.jpg",
        win:true,
        amount:"₱ 2,000",
        claimed:false,
    }
}

const setButton = (ticket)=> {
    let buttonState = {colorClass:" bg-[#606060]",text:"Loading Ticket..."};
    if(!ticket){
        return buttonState;
    }
    
    if(ticket.win){
        if(ticket.claimed){
            buttonState.colorClass = " bg-[#606060]";
            buttonState.text = "Prize Claimed";
        }else{
            buttonState.colorClass = " bg-[#10118B]";
            buttonState.text = "Claim";
        }
    }else{
        buttonState.colorClass= " bg-[#606060]";
        buttonState.text= "Better Luck Next Draw!";
    }
    return buttonState;
}


const TicketModal = (({showTicket,onClose}) => {
    const ticket = ticketAPI[showTicket.id];
    const buttonState = setButton(ticket);
    

    return (
        <>
            <Modal isActive={showTicket.enabled} onClose={onClose}>
                <div className="flex flex-col gap-5 content-center w-max">
                    
                    <span className="text-black font-bold text-[0.8rem] text-center w-full">Your Lotto Ticket</span>

                    <div className="w-40 justify-center">
                    <img
                        src={ticket?.img}
                        
                        className="h-full w-full object-contain rounded-2xl"/>
                    </div>
                    
                    <span className="text-black font-bold text-[0.8rem] text-center w-full">
                        {ticket?.win 
                        ? "Congratulations!"
                        : "Thank you for playing"}
                    </span>
                        
                    {(ticket?.win)
                    ?
                    <div className="bg-etherspace-gradient rounded-2xl py-3 transition-all duration-300 grid justify-center">
                        <span className="text-white font-bold text-[0.7rem]">You've Won {ticket?.amount}!</span>
                    </div>
                    :null}

                    <button className={`${buttonState.colorClass} hover:opacity-50 rounded-2xl py-3 transition-all duration-300`}>
                        <span className="text-white font-bold text-[0.7rem]">
                            {buttonState.text}
                        </span>
                    </button>
                    
                    
                </div>
                
            </Modal>
        </>
    )
})

export default TicketModal;