import React from 'react'
import Logo from '../Goba/Logo'
import MenuBurger from './MenuBurger'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <div className='flex w-full h-[75px] justify-center  bg-blue-900'>
          <div className='flex justify-between w-[95%] h-[100%] bg-red-900'>
              <div className='wrapperLogoMenuBurger' >
                    <MenuBurger/>
                    <Logo/>
              </div>
              <SearchBar/>
              <div className='wrapperSearchBarCardProfile' >

              </div>
          </div>
    </div>
  )
}
