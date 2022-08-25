import { getUser } from "./serviceCall";
import { call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "../type/userType"

function* getUserSaga(action) {
    try {
        const response = yield call(getUser);
        const { data } = response;
         console.log(data)
    }
    catch (err) {
        console.log(err);
    }
}
export function* watchergetUsersaga() {
    yield takeLatest(actionTypes.GET_USER,getUserSaga);
}
