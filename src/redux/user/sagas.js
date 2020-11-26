import actions from "./actions";
import {all, takeEvery,call} from "redux-saga/effects"
import {googleAuth} from "../../services/gSheet.service";

export function* GOOGLE_AUTH() {
    const response = yield call(googleAuth)
    console.log(response)
    if(response.status === 200){
        window.open(response.data.message.urlGenerated,"_self")
    }else{

    }
}


export default function* rootSaga() {
   yield all([
       takeEvery(actions.GOOGLE_AUTH, GOOGLE_AUTH),
   ])
}