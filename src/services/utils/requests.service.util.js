import axios from 'axios';
import Cookies from 'js-cookie'
import config from "../../constante/config";
const authUser=Cookies.get(config.TOKEN_KEY)
const URL_ROOT=config.URL_ROOT;

export const RequestService = {
    GetRequest,
    PostRequest,
    PatchRequest,
    DeleteRequest,
    PutRequest
};

function GetRequest(url, protect) {
    return axios.get(`${URL_ROOT}${url}`, {
        headers:protect? {"Authorization":"Bearer "+authUser} :{}
    })
}

function PostRequest(url,data,protect) {
    return axios.post(`${URL_ROOT}${url}`, data, {
        headers:protect? {"Authorization":"Bearer "+authUser} :{}
    })
}
function PatchRequest(url,data,protect) {
    return axios.patch(`${URL_ROOT}${url}`, data, {
        headers:protect? {"Authorization":"Bearer "+authUser} :{}
    })
}
function DeleteRequest(url,protect) {
    return axios.delete(`${URL_ROOT}${url}`, {
        headers:protect? {"Authorization":"Bearer "+authUser} :{}
    })
}
function PutRequest(url,data,protect) {
    return axios.put(`${URL_ROOT}${url}`, data,{
        headers:protect? {"Authorization":"Bearer "+authUser} :{}
    })
}
