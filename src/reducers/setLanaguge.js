let initialState="Select lanaguge"
let setLanagugeSelection=(state=initialState,action)=>{
    
            switch(action.type){
                case 'SETLANAGUGE' : state=action.payload;
                default:return state
            }
}
export default setLanagugeSelection;