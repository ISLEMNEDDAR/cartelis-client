import {Button} from "antd";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {dispatchAction} from "../../../services/utils/function.service";
import userActions from "../../../redux/user/actions";
import Cookies from "js-cookie";
import config from "../../../constante/config";

function LoginPage(){
    const dispatch = useDispatch()
    const login = ()=>{
        dispatch(dispatchAction(userActions.GOOGLE_AUTH))
    }
    return(
        <Button type="primary" shape="round"  size={"round"} onClick={login}>Connect to Google</Button>
    )
}

export default LoginPage