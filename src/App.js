import React,{Suspense,useEffect} from 'react';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { incommingData } from './action';
// import CodeConfirm from './components/CodeConfirmation/CodeConfirm';
import CodeEntry from './components/CodeEntry/CodeEntry';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import StartCodeing from './components/StartCodeing/StartCodeing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import MySnipp from './components/MySnipp/MySnipp';
import Register from './components/Register/Register';
import Login from './components/Login/Login';


const CodeConfirm=React.lazy(()=>import("./components/CodeConfirmation/CodeConfirm"))
const StartCodeing=React.lazy(()=>import("./components/StartCodeing/StartCodeing"))
// console.log(CodeConfirm);

function App() {
  const dispatch=useDispatch()
  const fetchedData=useSelector((state)=>state.setIncommingData)
  let fetchUserData= async()=>{
    const {data}= await axios.get("http://localhost:5000/users/").catch((err)=>console.log(err))
    console.log(data);
    dispatch(incommingData(data))
  }
  useEffect(()=>{
    fetchUserData()
  },[])
  return (
    <div className="App">
      
     <Suspense fallback="Loading...">
     <Router>
     <Header />
     <Switch>

          <Route exact path="/">
            <CodeEntry />
          </Route>
          <Route path="/codeConfirmation">
            <CodeConfirm />
          </Route>
          <Route path="/startCodeing">
            <StartCodeing />
          </Route>
          <Route path="/mySnip">
            <MySnipp />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
     </Router>
     </Suspense>
     {/* <Register /> */}
     
     {/* <Login/> */}
   
    </div>
  );
}

export default App;
//  {/* <CodeEntry /> */}
      // {/* <CodeConfirm/> */}
      // <StartCodeing/>