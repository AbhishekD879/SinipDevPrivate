let initialState=false

const setLoginStatus=(state=initialState,action)=>{

    switch(action.type){
        case 'LOGINSTATUS': return state=action.payload;
        default: return state;
    }

}
export default setLoginStatus;