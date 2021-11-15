let initialState=[{}]
const setIncommingData=(state=initialState,action)=>{
        switch(action.type){
            case 'INCOMMINGDATA':return state=action.payload;
            default:return state;
        }
}
export default setIncommingData;