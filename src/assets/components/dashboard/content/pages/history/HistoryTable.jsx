import React, { useState, useMemo } from "react";
import HistoryTableHeader from "./HistoryTableHeader";
import SearchBox from "../../content-component/generic-components/SearchBox";

const HistoryTable = ({data,queryState,filtered,
    id,
    overviewMode,
    headerLabel1,
    headerLabel2,
    tableHeadContent,tableBodyContent,tableBodyContentMobile}) => {

    return (
        <>
        <div className={`grid grid-rows-[1fr_auto] gap-2 bg-white rounded-lg ${
            overviewMode
            ? "p-2"
            : "p-5"
        }`}>
            
            <div className="row-start-1 grid md:grid-cols-2 max-md:grid-rows-2">
                <div className="grid items-center">
                    {headerLabel1}
                </div>
                
                {overviewMode
                ?<>{headerLabel2}</>
                :
                <div className="md:ml-20">
                    <SearchBox id={id} query={queryState[0]} setQuery={queryState[1]}/>
                </div>
                }
            </div>

            <div className="row-start-2 max-md:hidden">
                <div className="bg-white rounded-lg shadow-sm font-sans text-center text-gray-400 text-xs">
                    <table className="min-w-full w-full table-fixed">
                        <thead>
                            <>{tableHeadContent}</>
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
                                <>{tableBodyContent}</>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="row-start-2 md:hidden space-y-4 font-sans">
                {filtered.length === 0 ? (
                    <p className="text-center text-sm text-gray-500">No results found.</p>
                ) : (
                    <>{tableBodyContentMobile}</>
                )}
            </div>

        </div>
        </>
    )
}

export default HistoryTable