import { userActionTypes } from "./UserTypes";


const setCurrentUser = user =>({
    type:userActionTypes.SET_CURRENT_USER,
    payload:user
})

export default setCurrentUser;