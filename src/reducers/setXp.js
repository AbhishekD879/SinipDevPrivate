let initialState=0

const setXp=(state=initialState,action)=>{

            switch(action.type){
                case 'XP': return state=action.payload;
                default:return state
            }

}

export default setXp