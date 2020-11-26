import React, {useEffect} from "react";
import {Route,Redirect,Switch} from "react-router-dom";
import LoginPage from "./loginPages/LoginPage";
import Cookies from "js-cookie";
import config from "../../constante/config";
import {dispatchAction, succes} from "../../services/utils/function.service";
import userActions from "../../redux/user/actions";
import {useDispatch, useSelector} from "react-redux";

function IndexAuth(){
    const {token} = useSelector(state => state.userReducers)
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(window.location.hash.startsWith("#"))
        if(window.location.hash.startsWith("#")){
            console.log("createToken")
            const tokenCreated = window.location.hash
                .substring(1)
                .split('&')
                .reduce((initial, item)=>{
                    if(item !== ""){
                        let parts = item.split('=')
                        initial[parts[0]] = decodeURIComponent(parts[1])
                    }
                    return initial
                },{})
            Cookies.set(config.TOKEN_KEY,JSON.stringify(tokenCreated))
            dispatch(succes({token : tokenCreated},userActions.SET_STATE))
        }
    },[token])
    return (
        <div style={{
            height : "100%",
            width : "100%",
            display : "flex",
            alignItems : "center",
            justifyContent : "center"
        }}>
            <Switch>
                <Route path="/login">
                    <LoginPage/>
                </Route>
            </Switch>
        </div>
    )
}

export default IndexAuth