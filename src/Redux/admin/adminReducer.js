const adminReducer = (state = false, action) => {
    switch(action.type){
        case "IS_ADMIN":
            return{
                
                admin:action.payload
            }
        default: return state
    }
}
export default adminReducer