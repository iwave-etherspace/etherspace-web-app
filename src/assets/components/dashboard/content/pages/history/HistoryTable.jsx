import React, { useState, useMemo } from "react";
import HistoryTableHeader from "./HistoryTableHeader";

const HistoryTable = ({data,queryState,filtered,
    id,headerLabel,
    tableHeadContent,tableBodyContent,tableBodyContentMobile}) => {

    return (
        <>
        <div className="grid grid-rows-[1fr_auto] gap-2">
            
            <div className="row-start-1 grid md:grid-cols-2 max-md:grid-rows-2">
                <HistoryTableHeader headerLabel={headerLabel} id={id} queryState={queryState}/>
            </div>

            <div className="row-start-2 max-md:hidden">
                <div className="bg-white rounded-lg shadow-sm font-sans text-center text-gray-400 text-xs">
                    <table className="min-w-full w-full table-auto">
                        <thead>
                            {tableHeadContent}
                        </thead>

                        <tbody>
                            {filtered.length === 0 ? (
                                <tr>
                                <td
                                    colSpan={5}
                                    className="px-4 py-6 text-center text-sm text-gray-500"
                                >
                                    No results found.
                                </td>
                                </tr>
                            ) : (
                                <>
                                    {tableBodyContent}
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row-start-2 md:hidden space-y-4 font-sans">
                {filtered.length === 0 ? (
                    <p className="text-center text-sm text-gray-500">No results found.</p>
                ) : (
                    <>
                        {tableBodyContentMobile}
                    </>
                )}
            </div>

        </div>
        </>
    )
}

export default HistoryTable