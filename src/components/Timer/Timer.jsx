import React,{useState} from 'react'
import "./Timer.css"

const Timer = ({timerSwitch}) => {
    const [timer,setTimer]=useState(0)
    
    console.log(timerSwitch);
React.useEffect(() => {
    // setStartTimer(timerSwitch)
    let interval = null;

    if (timerSwitch) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerSwitch) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerSwitch]);
    return (
        <div className="timer">
            <div>
            <span>{("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((timer / 10) % 100)).slice(-2)}</span>
            </div>

        </div>
    )
}

export default Timer
