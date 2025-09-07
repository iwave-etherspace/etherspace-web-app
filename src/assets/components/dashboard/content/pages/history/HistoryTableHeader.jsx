import React from 'react'

const HistoryTableHeader = ({headerLabel1,headerLabel2}) => {
    return (
        <>
            <div className="grid items-center">
                {headerLabel1}
            </div>

            <div className="md:ml-20">
                {headerLabel2}
            </div>
        </>
    )
}

export default HistoryTableHeader