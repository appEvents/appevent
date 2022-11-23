import React from 'react'
import Logo from '../Goba/Logo'
import  {CardInput}  from './CardInput'
import MenuBurger from './MenuBurger'
import { ProfileInput } from './ProfileInput'
import SearchBar from './SearchBar'
import { SearchInput } from './SearchInput'

export default function Header() {
  return (
    <div className='flex items-end justify-between w-full h-[75px] bg-yellow-900'>
      <div className='wrapperLogoMenuBurger' >
        <MenuBurger/>
        <Logo/>
      </div>
      <SearchBar/>
      <div className='wrapperCardProfile' >
        <SearchInput/>
        <CardInput/>
        <ProfileInput/>
      </div>
    </div>
  )
}
