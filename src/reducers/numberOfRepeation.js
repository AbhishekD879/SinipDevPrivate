let initialState=5

const setNumberOfRepeation=(state=initialState,{type,payload})=>{
         switch(type){
             case 'NUMBEROFREAPEATION': return state=payload;
             default: return state
         }
}
export default setNumberOfRepeation;