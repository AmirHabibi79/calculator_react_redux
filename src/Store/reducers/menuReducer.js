const menuReducer=(state=false,action)=>{

    switch(action.type){
        case "toggleCard":
            return !state
            default:
            return state
    }


}

export default menuReducer