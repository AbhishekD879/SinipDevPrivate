import { Divider, IconButton } from '@mui/material'
import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { makeStyles } from '@mui/styles';
const useStyle=makeStyles({
    footerSocialbtn:{
        fill:'white',
        '& .css-i4bv87-MuiSvgIcon-root':{
            fill:'white'
        }
    },
    Divider:{
        borderColor:"white !important",
        height:"5px"
    }
})
const Footer = () => {
    const classes=useStyle()
    return (
        <div className='footerContainer'>
        <Divider className={classes.Divider}/>
        <div className="footer">
            <h2>Copyright © 2021 SnipDev.</h2>    
            <div className="footer__socialContainer">
                    <div className="footer__SocialIcons"><IconButton className={classes.footerSocialbtn}><GitHubIcon /></IconButton></div>
                    <div className="footer__SocialIcons"><IconButton className={classes.footerSocialbtn}><TwitterIcon /></IconButton></div>
                    <div className="footer__SocialIcons"><IconButton className={classes.footerSocialbtn}><InstagramIcon /></IconButton></div>
            </div>
        </div>
        </div>
    )

}

export default Footer
