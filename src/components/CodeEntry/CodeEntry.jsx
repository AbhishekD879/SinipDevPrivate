import React,{useState} from 'react'
import "./CodeEntry.css"
import { Select } from '@mui/material'
import { MenuItem } from '@mui/material'
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

// 
import { useSelector,useDispatch } from 'react-redux';
import { setLanaguge,setSnippet,codeTitleaction } from '../../action'
import { useHistory } from 'react-router'

const useStyles=makeStyles({

        dropdown:{
          color:'#001e3c !important',
          width:'10rem',
          height:'2.5rem',
          fontWeight:'700',
          fontSize:'1rem',
          backgroundColor:'white',
          '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon':{
            color:'#001e3c',
            
          }

        }

})
const CodeEntry = () => {
  // const [snippet,setSnippet]=useState('')
  // const [lanaguge,setLanaguge]=useState('Select Lanaguge')
  const dispatch=useDispatch()
  const lanaguge=useSelector((state)=>state.setLanagugeSelection)
  const snippet=useSelector((state)=>state.setSnippetString)
  const codeTitle=useSelector((state)=>state.setCodeTitle)
  const classes=useStyles()
  let history=useHistory()
  let trainMe=()=>{
    if(snippet===""){
      alert('Code Cannot be Empty')
    }else{
      history.push("/codeConfirmation")
    }
  }
    return (
        <div className="codeEntry">
        
            <div className="codeEntry__menuSelection">
                <input onChange={(e)=>{dispatch(codeTitleaction(e.target.value))}} className="codeEntry__codeTitle" type="text" name='codeTitle' placeholder="Code Title"  required={true} value={codeTitle}/>
               <div className="codeEntry__lanagugeSelection">
               <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={lanaguge}
                      label="Age"
                      onChange={(e)=>{dispatch(setLanaguge(e.target.value))}}
                    className={classes.dropdown}
                    defaultValue={"Select lanaguge"}
                    >
                      <MenuItem value={"htmlmixed"}>Html</MenuItem>
                      <MenuItem value={"css"}>Css</MenuItem>
                      <MenuItem value={"javascript"}>JavaScript</MenuItem>
                      <MenuItem value={"python"}>Python</MenuItem>
                      <MenuItem value={"dart"}>Dart</MenuItem>
                      <MenuItem value={"php"}>Php</MenuItem>
                      <MenuItem value={"powershell"}>PowerShell</MenuItem>
                      <MenuItem value={"clike"}>C,C++,C#,Java</MenuItem>
                      <MenuItem value={"R"}>R</MenuItem>
                      <MenuItem value={"jsx"}>Jsx</MenuItem>
                </Select>
               </div>
            </div>
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
                        
                        
                    }}
                    
                    
                onBeforeChange={(editor, data, value) => {dispatch(setSnippet(value))
                }}
              />  
                        
            </div>
            <div className="codeEntry__btnWrapper">
              <button onClick={trainMe} className="codeEntry__btn">Train Me</button>
              <button onClick={()=>{dispatch(setSnippet(""))}} className="codeEntry__btn">Clear</button>
            </div>
        </div>
    )
}

export default CodeEntry
