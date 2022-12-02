import React from 'react'
import { MdSearch } from "react-icons/md";

export default function SearchBar({searchInputClicked, setSearchInputClicked}) {
  return (
    <div className='wrapperSearchBar' >
        <div className='flex w-full h-full justify-center items-center'>
          <div className='searchBar' onClick={() =>{ setSearchInputClicked(!searchInputClicked)}}>
          <MdSearch size={30} color="gray" className='bg-transparent'/>
          <p className='bg-transparent text-[grey]'>Search</p>
          </div>
        </div>
    </div>
  )
}
