import React from 'react'
import SearchBox from "../../content-component/generic-components/SearchBox";

const HistoryTableHeader = ({id,headerLabel,queryState}) => {
    return (
        <>
            <h2 className="text-lg font-semibold text-gray-800 font-sans">
                {headerLabel}
            </h2>
            <div className="md:ml-20">
                <SearchBox id={id} query={queryState[0]} setQuery={queryState[1]}/>
            </div>
        </>
    )
}

export default HistoryTableHeader