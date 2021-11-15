import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./MySnipp.css"
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyle=makeStyles({
    Divider:{
        borderColor:"white !important",
        height:"5px"
    },
    mySnipp__btn:{
        fill:'white !important',
      '& .css-i4bv87-MuiSvgIcon-root':{
        fill:'white !important'
      }
    }
})

const MySnipp = () => {
    const classes=useStyle()
    const [userData,setUserData]=useState([{}])
    // let sinpp=`line-height: normal;

    // /* Unitless values: use this number multiplied
    // by the element's font size */
    // line-height: 3.5;
    
    // /* <length> values */
    // line-height: 3em;
    
    // /* <percentage> values */
    // line-height: 34%;
    
    // /* Global values */
    // line-height: inherit;
    // line-height: initial;
    // line-height: revert;
    // line-height: unset;`
    
    const datafetcher= async()=>{
        const {data}= await axios.get("http://localhost:5000/users/617424161595d185fad939ae/snippets").catch((err)=>console.log(err))
        setUserData(data)
    }
    useEffect(()=>{
      datafetcher()
    },[])
    console.log(userData)
    return (
      
        
  <div className="mySnip__container">
 {userData.map((snipp)=>(
  <div key={snipp._id} className="mySnip">
  <div className="mySnip__title__action"> <h3>{snipp.title}</h3>
  <div><IconButton className={classes.mySnipp__btn}><ModelTrainingIcon /></IconButton>   <IconButton className={classes.mySnipp__btn}><DeleteIcon /></IconButton></div>
  </div>
  <Divider className={classes.Divider} />
   <pre>{(snipp.snippet).slice(0,100)}<span> ....</span></pre>
  </div>
 ))}
  </div>
        
    )
}

export default MySnipp
