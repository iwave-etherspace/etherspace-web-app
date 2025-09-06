import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
const SearchBox = ({query,setQuery}) => {
  return (
    <div className="grid justify-end">
          <div className="relative flex place-items-center">
            <div className="absolute pl-5">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className="
              w-[15rem]
              font-sans
              pl-15 py-2
              rounded-xl bg-white border border-gray-200
              focus:outline-none focus:ring-2 focus:ring-blue-200
              "
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search something"
              aria-label="Search table"
            />
          </div>
        </div>
  )
}

export default SearchBox