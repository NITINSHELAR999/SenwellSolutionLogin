import React from 'react'
import { useState } from 'react'

function Login() {
    
  return (
   
    <div className="bg">
    <div className="example">
      <div className="logo">
        <img src="https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg" alt="" width="200px"/>
      </div>
      <div className="form">
        <form action="">
          <label for="fname">Your email</label>
          <input type="text" id="fname" name="firstname" placeholder="Enter Your email"/>
      
          <label for="lname">Password</label>
          <input type="text" id="lname" name="lastname" placeholder="Enter your password"/>
          <div className="page">
          

          <p className="forget" ><span><input type="checkbox" name="" id=""/></span> <span class="remember">Remember me</span> <span className="recover"> Recover password</span></p>
        </div>

          
        
          <input type="submit" value="SIGN IN"/>
        </form>
      </div>

    </div>
   </div>
  )
}

export default Login


