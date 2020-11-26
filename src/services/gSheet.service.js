import {RequestService} from "./utils/requests.service.util";

const googleAuth = async ()=>{
    return RequestService.GetRequest("account/",false)
}


export {
    googleAuth
}