import React, { useState } from "react";
import "./Login.css"
import { useSelector,useDispatch } from "react-redux";
import { loginStatus,currentUser } from "../../action";
import { useHistory } from "react-router";

const Login = () => {
    const history=useHistory()
    const fetchedData=useSelector((state)=>state.setIncommingData)
    const loginstatus=useSelector((state)=>state.setLoginStatus)
        
    const dispatch=useDispatch()

    const [user,setUser]=useState({
        email:"",
        password:""
    })
    let changeHandler=(e)=>{
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const login=()=>{
        
        fetchedData.map((fetchedUser,index)=>{
            
          

            if(fetchedUser.emailAddress==user.email && fetchedUser.password==user.password ){
                alert("sucussufully loged in");
                dispatch(loginStatus(true))
                dispatch(currentUser(fetchedUser))
                
                history.push("/")
            }else if(fetchedData.length-1===index){
                if(loginstatus===false){
                    alert("Email not Found Please Register");
                }
            }
        })
      
    }
    return (
        <div className="login__container">
            <div className="login">
            <h1>Login</h1>
            <input onChange={changeHandler} name="email" placeholder="Enter your Email" type="email" value={user.email} />
            <input onChange={changeHandler} name="password" placeholder="Enter Your Password" type="password" value={user.password} />
            <div onClick={login} className="button">Login</div>
            <div>OR</div>
            <div onClick={()=>{history.push("/register")}} className="button">Register</div>
        </div>
        </div>
    )
}

export default Login
