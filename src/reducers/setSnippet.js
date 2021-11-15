let initialState=``
let setSnippetString=(state=initialState,action)=>{
    
            switch(action.type){
                case 'SETSNIPPET' : state=action.payload;
                default:return state
            }
}
export default setSnippetString;