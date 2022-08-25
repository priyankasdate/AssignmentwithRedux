
import React from "react";

import * as actionTypes from "../type/userType";


const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER:
         
            return {
                ...state,
                users:action.GET_USER
                
            }
            default:return state;
    }
}
export default userReducer;