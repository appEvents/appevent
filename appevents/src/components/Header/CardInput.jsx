import React,  {useState} from 'react'
import { MdShoppingCart } from "react-icons/md";
import { CardContainer } from '../../containers/CardContainer'

export const CardInput = () => {
  const [cardInputClicked, setCardInputClicked] = useState(false)

   
  return (<>
      <div className="wrapperCardInput" onClick={() =>{ setCardInputClicked(!cardInputClicked)}}>
          <MdShoppingCart size={20} color="white"/>
      </div>
      {cardInputClicked?<CardContainer STYLE={"wrapperCardContainer1"}/> : <CardContainer STYLE={"wrapperCardContainer"}/>}
    </>
    );
};
