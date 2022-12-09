import React from 'react'
import Logo from '../components/Goba/Logo'
import { Link } from "react-router-dom";

function Clear() {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}

export default function SignUp() {
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
            <div className='flex justify-start px-12 border-box w-[70%] h-[87%]'> 
              <div className='createaccount'>
                <h3>LET'S SEE WHAT'S NEW</h3>
                <h1>Welcome back</h1>
                <h2>Not a member yet ? <Link to="/SignIn"><span className='text-[#009640]'>Sign In for free</span></Link></h2>
                <div className='longer'>
                  <input type="email" placeholder="Email" />
                  <input type="password" id="pass" name="password" placeholder="Password" minlength="8" required />
                </div>
                <div className='Btn'>
                  <input onClick={Clear} className='bg-[#3b3a3a]' type="reset" value="Clean"/>
                  <button className='bg-[#009640]'>Create account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
