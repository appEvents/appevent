import React from 'react'
import Logo from '../components/Goba/Logo'
import { Link } from "react-router-dom";

function Clear() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

export default function SignIn() {
  return (
    <div>
        <div className='flex items-center justify-center w-full h-[100vh]  '>
          <div  className='pop-up'>
            <div className='px-7 flex items-center w-full h-[70px]  bg-transparent '>
            <Link to="/*"><Logo /></Link>
              <div className='flex justify-evenly items-center w-[250px] h-[100%] bg-transparent '>
              <Link to="/*"><h1 >Home</h1></Link>
              </div>
            </div>
            <div className='flex justify-start px-12 border-box w-[100%] h-[87%]'> 
              <div className='createaccount'>
                <h3>START FOR FREE</h3>
                <h1>Create new account</h1>
                <h2>Already member ? <Link to="/signUp"><span className='text-[#009640]'>Log In</span></Link></h2>
                <div className='input'>
                  <input placeholder="First name" type="text" />
                  <input placeholder="Last name" type="text" />
                </div>
                <div className='longer'>
                  <input type="email" placeholder="Email" />
                  <input type="password" id="pass" name="password" placeholder="Password" minlength="8" required />
                </div>
                <div className='Btn'>
                  <button onClick={Clear} className='bg-[#3b3a3a]'>Clean</button>
                  <button className='bg-[#009640]'>Create account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
