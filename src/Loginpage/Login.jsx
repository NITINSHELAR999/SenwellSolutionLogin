import React from 'react'
import {useEffect, useState } from 'react'

function Login() {
  const [password, setPassword] = useState("")
  const [color, setColor] = useState("black")
  //regular expression
  var regex = new Array();
  regex.push("[A-Z]"); //Uppercase Alphabet.
  regex.push("[a-z]"); //Lowercase Alphabet.
  regex.push("[0-9]"); //Digit.
  regex.push("[$@$!%*#?&]");//spestial character
var pass=0
//validation for eachregular expression
regex.forEach((ele) => {

  if (new RegExp(ele).test(password)) {

    pass++
  }

});
  //validation for length of the password
  if (pass > 2 && password.length > 8) {
    pass++
}
// displayed status condtion check kartoy 
const Validation=()=>{
    if(pass==0 || pass==1|| pass==2){
       
        setColor("red");
    }
    if(pass==4 || pass==3 ){
        
        setColor("orange");
    }
    if(pass==5 || pass==6){
       
        setColor("green");
    }
  }
  useEffect(()=>{
    Validation()
},[password])
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
          <input type="text" style={{color:color}} onChange={(e) => setPassword(e.target.value)} onKeyUp={(e)=>{setPassword(e.target.value)}} id="lname" name="lastname" placeholder="Enter your password"/>
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




