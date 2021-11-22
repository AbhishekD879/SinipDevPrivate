import React from 'react'
import './CodeConfirm.css'
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { setSnippet } from '../../action'
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/rubyblue.css';
import { makeStyles } from '@mui/styles'
import "codemirror/addon/display/rulers"
import "codemirror/addon/display/placeholder"
// 
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/dart/dart";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/php/php";
import "codemirror/mode/powershell/powershell";
import "codemirror/mode/clike/clike";
import "codemirror/mode/r/r";
import { Divider, IconButton } from '@mui/material';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import Checkbox from '@mui/material/Checkbox';
import { Repeation,timerFilter,numberOfReapeation } from '../../action';
import { useHistory } from 'react-router';

const useStyles=makeStyles({
    saveBtn:{
      fill:'white !important',
      '& .css-i4bv87-MuiSvgIcon-root':{
        fill:'white !important'
      }
    },
    checkbox:{
      color:'white !important'
    },
    Divider:{
      color:'white',
      borderColor:'white !important',
      height:'1rem'
    }
    
})
// 
const CodeConfirm = () => {
    const classes=useStyles()
    const dispatch=useDispatch()
  const lanaguge=useSelector((state)=>state.setLanagugeSelection)
  const snippet=useSelector((state)=>state.setSnippetString)
  const repeatation=useSelector((state)=>state.setRepeatation)
  const timerFilterstate=useSelector((state)=>state.setTimerFilter)
  const codeTitle=useSelector((state)=>state.setCodeTitle)
  const numberofrepetation=useSelector((state)=>state.setNumberOfRepeation)
  const currentuser=useSelector((state)=>state.setCurrentUser)
  let history=useHistory()
  // Action Performed when Confirm Btn is clicked 
  let confirmBtn=()=>{
    history.push("/startCodeing")
  }
  // end of Confirm btn

  // Action Performed when GoBack is clicked 
  let goBack=()=>{
    history.push("/")
  } 
  let savebtn= async()=>{
    
    if(Object.keys(currentuser).length !== 0){
      let snipsave=snippet.replace(/\n/gmi," \n ")
    console.log(snipsave);
    let savedsnipp={
      title:codeTitle,
      snippet:snipsave,
      lanaguge:lanaguge
    }
    
    await axios.post(`http://localhost:5000/users/${currentuser._id}/snippets `,savedsnipp).then((res)=>{alert("Saved");}).catch((err)=>console.log(err))
    }

  }
    return (
        <div className="CodeConfirm">
            <div className="CodeConfirm__mainConatiner">
                <div className="CodeConfirm__codeTitle__codeblock">
                <input className="codeEntry__codeTitle" contentEditable="false" type="text" name='codeTitle'  placeholder="Code Title"   value={codeTitle}/>
                <div className="codeBlock">
              <CodeMirror
                className="codeEditor"
                value={snippet}
                options={{
                  lint:true,
                        lineWrapping:true,
                        mode: `${lanaguge}` ,
                        theme:"rubyblue",
                        lineNumbers:true,
                        autocorrect:true,
                        readOnly:true,
                        
                    }}
                    
                    
                onBeforeChange={(editor, data, value) => {dispatch(setSnippet(value))
                }}
              />  
                        
            </div>
                </div>
                <div className="traning__Drills">
                    <div>
                    <h1>Training Drills</h1>
                    <Divider className={classes.Divider} />
                    </div>
                    <div className="traning__drills__filters"><IconButton onClick={savebtn} className={classes.saveBtn}><DescriptionRoundedIcon/></IconButton> <h3>Save Snippet</h3></div>
                    <div className="traning__drills__filters"> <Checkbox onClick={(e)=>{dispatch(Repeation(e.target.checked))}} className={classes.checkbox} lable="Repetation" /> <h3>Repetation</h3>{repeatation?<input onChange={(e)=>dispatch(numberOfReapeation(e.target.valueAsNumber))} className="repetationInput" type='number'  min='5' max='50' value={numberofrepetation}

                    />:null}</div>
                    <div className="traning__drills__filters"><Checkbox onClick={(e)=>{dispatch(timerFilter(e.target.checked))}} className={classes.checkbox} lable="Timer" /> <h3>Timer</h3></div>
                  {console.log(timerFilterstate,numberofrepetation)}
                </div>
            </div>
            <div className="codeEntry__btnWrapper">
              <button onClick={()=>confirmBtn()} className="codeEntry__btn">Confirm</button>
              <button onClick={()=>goBack()} className="codeEntry__btn">Go back</button>
            </div>
        </div>
    )
}

export default CodeConfirm
