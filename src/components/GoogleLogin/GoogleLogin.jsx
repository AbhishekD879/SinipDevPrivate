
import React,{useState} from 'react'
import GoogleLogin from 'react-google-login'
import { GoogleLogout } from 'react-google-login';
import GoogleButton from 'react-google-button'

const GoogleLoginBtn = () => {
    const [loginStatus,setLoginStatus]=useState(false)
    let onSucussfullLogin=(res)=>{
        console.log(res);
        setLoginStatus(true)
    }
    let onLoginFailure=(res)=>{
        console.log(res);
        setLoginStatus(false)
    }

    let style={
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        width:'100vw'
    }

    return (
        <div style={style}>
                                {loginStatus?
                                
                                <GoogleLogout
                               clientId="310960033140-6r2mov71sm6i69kqki4oljrelbpg1bf7.apps.googleusercontent.com"
                              buttonText="Log Out"
                               render={renderProps => (
                               <GoogleButton label="Log Out" onClick={renderProps.onClick} >Log Out</GoogleButton>
                             )}
                             //   onLogoutSuccess={logout}
                             >
                             </GoogleLogout>
                             
                             : 
                             
                             <GoogleLogin
                             clientId="310960033140-6r2mov71sm6i69kqki4oljrelbpg1bf7.apps.googleusercontent.com"
                             render={renderProps => (
                               <GoogleButton onClick={renderProps.onClick} >Sign in with Google</GoogleButton>
                             )}
                            //  buttonText="Login"
                             onSuccess={onSucussfullLogin}
                             onFailure={onLoginFailure}
                             cookiePolicy={'single_host_origin'}
                           />}


                             

        
            {/* <div>
              <div 
              id="g_id_onload" 
              data-client_id="YOUR_GOOGLE_CLIENT_ID" 
              data-login_uri="https://your.domain/your_login_endpoint" 
              data-auto_prompt="true">
              </div>
              <div 
              className="g_id_signin" 
              data-type="standard" 
              data-size="large" 
              data-theme="outline" 
              data-text="sign_in_with" 
              data-shape="rectangular" 
              data-logo_alignment="left">
              </div>
            </div> */}


                         
        </div>
    )
}

export default GoogleLoginBtn
