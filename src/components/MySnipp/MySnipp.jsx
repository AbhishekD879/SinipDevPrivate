import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./MySnipp.css"
import { useSelector,useDispatch } from 'react-redux';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import DeleteIcon from '@mui/icons-material/Delete';
import { Divider, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router';
import { setLanaguge,setSnippet,codeTitleaction } from '../../action'
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
    const history=useHistory()
    const dispatch=useDispatch()
    const classes=useStyle()
    const [userData,setUserData]=useState({})
    const [reRender,setReRenderer]=useState(false)
    const currentuser=useSelector((state)=>state.setCurrentUser)
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
      if(isEmpty(currentuser)===false){
        const {data}= await axios.get(`http://localhost:5000/users/${currentuser._id}/snippets`).catch((err)=>console.log(err))
        
        setUserData(data)
      }
       
    }
    useEffect(()=>{
      datafetcher()
    },[reRender])
    let isEmpty=(obj)=>{
     return Object.keys(obj).length === 0
    }

    const deletingSavedCode= async(snipid)=>{
      console.log(snipid);
     await axios.delete(`http://localhost:5000/users/${currentuser._id}/snippets/${snipid}`).then((res)=>{alert("Deleted Sucussfully")}).catch((err)=>{console.log(err);})
     setReRenderer(!reRender)
    }

    const trainingSavedCode=(title,snipp,lan)=>{
      dispatch(setSnippet(snipp));
      dispatch(setLanaguge(lan));
      dispatch(codeTitleaction(title));
      history.push("/codeConfirmation")
    }

    return (
      
        
  <div className="mySnip__container">
 {isEmpty(userData)===false?userData.map((snipp)=>(
  <div key={snipp._id} className="mySnip">
  <div className="mySnip__title__action"> <h3>{snipp.title}</h3>
  <div><IconButton onClick={()=>{trainingSavedCode(snipp.title,snipp.snippet,snipp.lanaguge)}} className={classes.mySnipp__btn}><ModelTrainingIcon /></IconButton>   <IconButton onClick={()=>{deletingSavedCode(snipp._id)}} className={classes.mySnipp__btn}><DeleteIcon /></IconButton></div>
  </div>
  <Divider className={classes.Divider} />
   <pre>{(snipp.snippet).slice(0,200)}<span> ....</span></pre>
  </div>
 )):null}
  </div>
        
    )
}

export default MySnipp
