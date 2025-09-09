import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const SearchBox = ({id,query,setQuery}) => {
    const actualId = id+"searchbox";
  return (
    
        <div className="flex place-items-center gap-2
            w-auto
            font-sans
            py-2 px-3
            rounded-xl bg-white border border-gray-200
            focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-200">
            <label htmlFor={actualId}>
                <div className="">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
            </label>

            <input
                className="w-full outline-0"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search something"
                aria-label="Search table"
                id={actualId}
            />
        </div>

  )
}

export default SearchBox