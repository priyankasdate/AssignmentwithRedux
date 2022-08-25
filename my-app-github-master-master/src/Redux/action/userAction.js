import * as actionTypes from "../type/userType"

export const getUser = () => {
    const action = {
        type: actionTypes.GET_USER
    }
    return action;
}
