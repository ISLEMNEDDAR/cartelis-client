import React from "react";
import "./css/App.css"
import {BrowserRouter as Router} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import IndexAuth from "../pages/authPages/IndexAuth";
import IndexApp from "../pages/appPages/IndexApp";
import {history} from "../utils/history.utils";
function App(){
    return(
        <Router history={history}>
            <PrivateRoute
                private={IndexApp}
                public={IndexAuth}
            />
        </Router>

    )
}
export default App