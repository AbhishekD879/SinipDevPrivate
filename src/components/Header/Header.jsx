import { Avatar, Drawer, IconButton, ListItem } from '@mui/material'
import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import { ListItemText } from '@mui/material';
import { List } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';

const useStyles=makeStyles({

    avatar:{
        color:'#C4C4C4',
        marginLeft:'50px',
        cursor: 'pointer',
        ['@media screen and (max-width:500px)']:{
            margin:'auto',
            diplay:'none'
            
        },
    },
    hamburgerbtn:{
        fillRule:"inherit",
        fill:"white !important"
    },
    drawer:{
        // width:'min-content',
        // backgroundColor:'#bdbdbd'
        '& .MuiDrawer-paper': {
            width: '240px',
            boxSizing: 'border-box',
            backgroundColor:'#bdbdbd !important',
            height:'100%',
            backgroundColor:'#001e3c',
            '& .MuiList-root':{
                height:'100%'
            }
          },
    },
    draweritem:{
       color:'white',
       zIndex:'1'
    }

})

const Header = () => {
    const history=useHistory()
    const loginstatus=useSelector((state)=>state.setLoginStatus)
    const currentuser=useSelector((state)=>state.setCurrentUser)
    const classes=useStyles()
    const logo ="{SnippDev}"
    const [open,setOpen]=useState(false)
    let nameInitial=""
    const avaterClick=()=>{
        if(loginstatus){
            return null
        }else{
            history.push("/register")
            
            console.log(currentuser);
        }
    }
    return (
        <>
        <header className="header">
            <div onClick={()=>{history.push("/")}} className="header__logo">
                {logo}
            </div>
            <div className="header__navbar">
                <Router>
                <Link  to="/" className="header__navItems">Home</Link>
                <Link to="/mySnip" className="header__navItems">My Snips</Link>
                <Link to="/" className="header__navItems">About Us</Link>
                </Router>
            </div>
            <div className="header__xpAvatar">
                <h3><span>80</span> XP</h3>
                <Avatar onClick={avaterClick}  className={classes.avatar}></Avatar>
            </div>

            <div className="hamburger">
                <IconButton onClick={()=>{setOpen(true)}} ><MenuIcon fontSize="large" className={classes.hamburgerbtn} /></IconButton>
            </div>
        </header>
        <Drawer
            variant='temporary'
            anchor="left"
            open={open}
            elevation={24}
            onClose={()=>setOpen(false)}
            className={classes.drawer}

        >
        <List>
        <ListItem>
               <ListItemButton>
               <Avatar onClick={avaterClick}  className={classes.avatar}></Avatar>
                </ListItemButton>
            </ListItem>
            <ListItem>
               <ListItemButton>
                   <ListItemText className={classes.draweritem} primary={"Home"} />
                </ListItemButton>
            </ListItem>
            <ListItem>
               <ListItemButton>
                   <ListItemText className={classes.draweritem} primary={"MySnips"}  />
                </ListItemButton>
            </ListItem>
            <ListItem>
               <ListItemButton>
                   <ListItemText className={classes.draweritem} primary={"About Us"} />
                </ListItemButton>
            </ListItem>
        </List>

        </Drawer>
        </>
    )
}

export default Header
