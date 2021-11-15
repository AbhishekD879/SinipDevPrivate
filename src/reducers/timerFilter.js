let initialState=false
let setTimerFilter=(state=initialState,action)=>{
    switch(action.type){
        case 'TIMERFILTER': return state=action.payload;
        default: return state
    }
}
export default setTimerFilter;