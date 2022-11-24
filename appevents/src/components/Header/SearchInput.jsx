import React,  {useState} from 'react'
import { MdSearch } from "react-icons/md";
import { SearchContainer } from '../../containers/SearchContainer';

export const SearchInput = ({searchInputClicked, setSearchInputClicked}) => {

    // const [searchInputClicked, setSearchInputClicked] = useState(false)

    return (
        <div className='wrapperSearchInput' >
            <div  className='flex justify-end items-center w-full h-full cursor-pointer ' onClick={() =>{ setSearchInputClicked(!searchInputClicked)}}>
            <MdSearch size={30} color="white"/>
            </div>
            {/* {searchInputClicked ? <SearchContainer searchInputClicked={searchInputClicked} setSearchInputClicked={setSearchInputClicked}/>:null} */}
        </div>
    );
};
