import {combineReducers} from "redux";
import setLanagugeSelection from "./setLanaguge";
import setSnippetString from "./setSnippet";
import setRepeatation from "./setRepeation";
import setTimerFilter from "./timerFilter";
import setCodeTitle from "./setCodeTitle";
import setNumberOfRepeation from "./numberOfRepeation";
import setIncommingData from "./setIncommingData";
import setLoginStatus from "./setLoginStatus";
import setCurrentUser from "./setCurrentUser";

const rootReducer=combineReducers({
   setLanagugeSelection,
   setSnippetString,
   setRepeatation,
   setTimerFilter,
   setCodeTitle,
   setNumberOfRepeation,
   setIncommingData,
   setLoginStatus,
   setCurrentUser
  
   
});
export default rootReducer;