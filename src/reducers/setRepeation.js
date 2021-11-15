let initialState=false;

let setRepeatation=(state=initialState,action)=>{
     switch(action.type){
         case 'REPEATION': return state=action.payload;
         default : return state
     }
}
export default setRepeatation;