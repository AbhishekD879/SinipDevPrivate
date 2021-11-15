import React,{useState} from 'react'
import "./StartCodeing.css"
import { useSelector} from 'react-redux';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/rubyblue.css';

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
import Timer from '../Timer/Timer';
import { useHistory } from 'react-router';
const StartCodeing = () => {
    const [startCode,setStartCode]=useState('')
    const [startCodeingTimer,setCodeingTimer]=useState(false)
    const snippet=useSelector((state)=>state.setSnippetString)
    const lanaguge=useSelector((state)=>state.setLanagugeSelection)
    const repeatation=useSelector((state)=>state.setRepeatation)
    const timerFilterstate=useSelector((state)=>state.setTimerFilter)
    const numberofrepetation=useSelector((state)=>state.setNumberOfRepeation)
    const [remainingrep,setRemainingep]=useState(numberofrepetation)
    let history=useHistory();
    
    
    // Actions Performed when Leave Training Btn is Clicked
    const leaveTrainingBtn=()=>{
        setCodeingTimer(false);/* Pausing  The Timer*/
        history.push("/")
    }
    // End Of Action Performed By the Leave Training Btn

    // Action Performed By the Sumbit Btn when Clicked
    const sumbitBtn=()=>{
        if(remainingrep >0){
            if(startCode.replace(/ /g, "")===snippet.replace(/ /g, "")){
                alert("Congrats You Have TYped The Correct Code")
                setCodeingTimer(false);
                setRemainingep(preRep=>preRep-1)
                setStartCode('')
            }else{
                alert("Opps You Your Code Didnt Match Please Try Again")
                setCodeingTimer(false);
            }
        }else{
            history.push("/")
        }
        // setCodeingTimer(false);
        // setRemainingep(preRep=>preRep-1)
    }

    return (
        <div className="StartCodeing">
            <div className="StartCodeing__container">
                <div className='StartCodeing__codeingBlock'>
                <CodeMirror
                className="codeEditor"
                value={startCode}
                options={{
                  lint:true,
                        lineWrapping:true,
                        mode: `${lanaguge}` ,
                        theme:"rubyblue",
                        lineNumbers:true,
                        autocorrect:true,
                        
                        
                    }}
                    
                    
                onBeforeChange={(editor, data, value) => {setStartCode(value)
                setCodeingTimer(true)
                }}
              />
                </div>
                <div className='StartCodeing__btn'>
                     <div className="codeEntry__btnWrapper">
                            <button onClick={()=>sumbitBtn()} className="codeEntry__btn">Sumbit</button>
                            <button onClick={()=>leaveTrainingBtn()} className="codeEntry__btn">Leave Training</button>
                     </div>
                </div>
            </div>
            <div className="StartingCodeing__appliedFilter">
                <div className="StartCodeing__Timer">
                   {timerFilterstate? <Timer timerSwitch={startCodeingTimer}/>:null}
                </div>
                {repeatation?<div className="StartCodeing__Repetation">
                    <h4>Repetation Remaining</h4>
                        <br/>
                        <span>{remainingrep}</span>
                 </div>:null}
            </div>
            
        </div>
    )
}

export default StartCodeing
