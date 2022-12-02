import React from 'react'
import { Link } from "react-router-dom";
import Copyright from '../Goba/Copyright';
import Logo from '../Goba/Logo';

export default function Footer() {

    const t = ">  ";
  return (
    <div className='flex items-center flex-col w-full bg-red-900'>
    <div className='w-[95%] mt-[50px]'>
        <Logo/>
        
    <div className='flex justify-center w-full'> 
        <div className='ressourcesFooterContainer'>
            <div className='blockNavigation block-1'>
                <h3>
                    <p>A propos de nous</p>
                </h3>
                <Link className="navLinkFooter" to="/advice">
                    <p>{t}Qui sommes nous ?</p>
                </Link>
                <Link className="navLinkFooter" to="/coaching">
                <p>{t}FAQ - Service client</p>
                </Link>
                {/* <NavLink className="navLinkFooter" to="/training">
                    <p>Fondateurs</p>
                </NavLink> */}
            </div>
            <div className='blockNavigation block-2'>
                <h3>
                    <p>Aide</p>
                </h3>
                <Link className="navLinkFooter" to="/advice">
                <p>{t}Mentions légales</p>
                </Link>
                <Link className="navLinkFooter" to="/coaching">
                <p>{t}Plitique de confidentialité</p>
                </Link>
                <Link className="navLinkFooter" to="/coaching">
                <p>{t}Conditions générales de vente</p>
                </Link>
            </div>
            <div className='blockNavigation block-3'>
                <h3>
                    <p>Nous contacter</p>
                </h3>
                <Link className="navLinkFooter" to="/advice">
                    <p>{t}3 rue Jea-Moulin, 75014 Paris</p>
                </Link>
                <Link className="navLinkFooter" to="/coaching">
                    <p>{t}balg.contact@gmail.com</p>
                </Link>
                <Link className="navLinkFooter" to="/training">
                    <p>{t}+33(0)1 83 26 98 02</p>
                </Link>
                <Link className="navLinkFooter socilasMedias" to="/training">
                    <div>
                        {/* <img src={instagram} alt="" />
                        <img src={linkedin} alt="" /> */}
                    </div>
                </Link>
            </div>
        </div>
    </div>
    <Copyright/>
    </div>
</div>
  )
}
