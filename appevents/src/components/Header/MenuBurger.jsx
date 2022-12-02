import React,  {useState} from 'react'
import { MenuBurgerContainer } from '../../containers/MenuBurgerContainer'

export default function MenuBurger() {
  const [menuBurgerClicked, setMenuBurgerClicked] = useState(false)
  return (
    <div className='wrapperMenuBurger' >
    <div className="wrapperButtonMenuBurger " onClick={() =>{ setMenuBurgerClicked(!menuBurgerClicked)}}>
    
        {menuBurgerClicked? <div className="buttonMenuBurger">
            <div className='burgerBarClicked'></div>
            <div className='burgerBarClicked'></div>
            <div className='burgerBarClicked'></div>
        </div> : <div className="buttonMenuBurger">
            <div className='burgerBar'></div>
            <div className='burgerBar'></div>
            <div className='burgerBar'></div>
        </div>}
        
        {menuBurgerClicked?<MenuBurgerContainer STYLE={"wrapperManuBurgerContainer1"}/>:<MenuBurgerContainer STYLE={"wrapperManuBurgerContainer"}/>}
    </div>
</div>
  )
}
