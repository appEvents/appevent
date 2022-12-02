import React from 'react'
import Logo from '../components/Goba/Logo'
import Header from '../components/Header/Header'

export default function SignIn() {
  return (
    <div>
        <div className='flex items-center justify-center w-full h-[100vh] bg-black  '>
          <div  className='pop-up'>
            <div className='px-7 flex items-center w-full h-[90px] '>
              <Logo />
              <div className='flex justify-evenly items-center w-[250px] opacity-90 h-[100%]'>
              <h1>Home</h1>
              <h1>Join</h1>
              </div>
            </div>
            <div className='flex justify-start px-12 border-box w-[70%] h-[87%]'> 
              <div className='createaccount'>
                <h3>START FOR FREE</h3>
                <h1>Create new account</h1>
                <h2>Already member ? <span className='text-[#009640]'>Log In</span></h2>
                <div className='input'>
                  <input placeholder="First name" type="text" />
                  <input placeholder="Last name" type="text" />
                </div>
                <div className='longer'>
                  <input type="email" placeholder="Email" />
                  <input type="password" id="pass" name="password" placeholder="Password" minlength="8" required />
                </div>
                <div className='Btn'>
                  <button className='bg-[#3b3a3a]'>Clean</button>
                  <button className='bg-[#009640]'>Create account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
