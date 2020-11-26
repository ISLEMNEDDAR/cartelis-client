import React from "react";
import {Button} from "antd";
import {Route, Redirect,Switch} from "react-router-dom";
import GSheetContainer from "./GSheetContainer";

function AppIndex(){
    return(
        <Switch>
            <Route path={"/app"} >
                <GSheetContainer></GSheetContainer>
            </Route>
            <Redirect from={"*"} to={"/app"}/>
        </Switch>
    )
}

export default AppIndex