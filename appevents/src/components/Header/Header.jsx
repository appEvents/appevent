import React,  {useState} from 'react'
import Logo from '../Goba/Logo'
import  {CardInput}  from './CardInput'
import MenuBurger from './MenuBurger'
import { ProfileInput } from './ProfileInput'
import SearchBar from './SearchBar'
import { SearchInput } from './SearchInput'
import { SearchContainer } from '../../containers/SearchContainer'


export default function Header() {

  const [searchInputClicked, setSearchInputClicked] = useState(false)
  return (
    <div className='flex  items-end justify-between min-w-[300px] w-[100%] h-[75px] bg-[black]'>
      <div className='wrapperLogoMenuBurger' >
        <MenuBurger/>
        <Logo/>
      </div>
      <SearchBar searchInputClicked={searchInputClicked} setSearchInputClicked={setSearchInputClicked}/>
      <div className='wrapperCardProfile' >
        <SearchInput searchInputClicked={searchInputClicked} setSearchInputClicked={setSearchInputClicked}/>
        {searchInputClicked ? <SearchContainer searchInputClicked={searchInputClicked} setSearchInputClicked={setSearchInputClicked}/>:null}
        <CardInput/>
      
        <ProfileInput/>
      </div>
    </div>
  )
}
