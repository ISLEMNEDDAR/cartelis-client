import React, {useEffect} from 'react';
import {
    Route
} from "react-router-dom";
import Cookies from 'js-cookie'
import config from "../constante/config";
import {useSelector} from "react-redux";
const cookie_token = Cookies.get(config.TOKEN_KEY)
const PrivateRoute = ({ private: Private,public:Public, ...rest }) => {
    const {token} = useSelector(sstate => state.userReducers)
    useEffect(()=>{
        console.log(token)
    },[token])
    return(
        <Route { ...rest } render={props => (
            token || cookie_token ?
                <Private { ...props } />
                :<Public/>
        )} />
    );
}

export default PrivateRoute;