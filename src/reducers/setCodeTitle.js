let initialState="";

const setCodeTitle=(state=initialState,action)=>{
    switch(action.type){
        case 'CODETITLE': return state=action.payload;
        default:return state;
    }
}
export default setCodeTitle;