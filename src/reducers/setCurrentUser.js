let initialState={}

const setCurrentUser=(state=initialState,action)=>{
    switch(action.type){
        case 'CURRENTUSER':return state=action.payload;
        default: return state;
    }
}
export default setCurrentUser;