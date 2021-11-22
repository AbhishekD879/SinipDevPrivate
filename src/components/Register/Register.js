import React,{useState} from 'react'
import "./Register.css"

import axios from 'axios';
import { useHistory } from 'react-router';
const Register = () => {
   const history=useHistory()
    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        emailAddress:"",
        password:"",
        reenterpassword:"",
    
    });
    
    let changeHandler=(e)=>{
        
        const { name, value } = e.target
       
        setUser({
            ...user,
            [name]: value
        })
        
        
        
    }
    const register=()=>{
        // console.log(user)
       
       
          
           
                
                   
                    const {firstName,lastName,emailAddress,password,reenterpassword}=user;
                    if(firstName&&lastName&&emailAddress&&password&&reenterpassword){
                        if(password===reenterpassword){
                            let newUser={
                                firstName,
                                lastName,
                                emailAddress,
                                password,
                                Xp:0
                            }
                            axios.post("http://localhost:5000/users",newUser)
                            .then((res)=>console.log(res))
                            .catch((err)=>console.log(err))
                            alert("Registered Sucussfully Please Login")
                            history.push("/login")
                            
                        }else{
                            alert("password did not match")
                        }
                    }else{
                        alert("invalid input")
                    }
                
           
       
        
    }

    return (
        <div className="register">
            <h1>Create Free Account</h1>
            <div className="register__input">
            <input onChange={changeHandler} required={true} name="firstName" placeholder="Enter your First Name" type="text" value={user.name} />
            <input onChange={changeHandler} required={true} name="lastName" placeholder="Enter your Last Name" type="text" value={user.name} />
            <input onChange={changeHandler} required={true} name="emailAddress" placeholder="Enter Your Email" type="email" value={user.email} />
            <input onChange={changeHandler} required={true} name="password" placeholder="Enter your password" type="password" value={user.password} />
            <input onChange={changeHandler} required={true} name="reenterpassword" placeholder="RE-Enter Your Password" type="password" value={user.reenterpassword} />
            <div className="register__btn">
            <div onClick={register} className="button">Register</div>
            <div>OR</div>
  
            <div onClick={()=>{history.push("/login")}} className="button">Login</div>
            </div>
            </div>
        </div>
    )
}

export default Register
