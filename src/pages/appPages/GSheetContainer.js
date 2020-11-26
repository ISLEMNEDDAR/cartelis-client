import React from "react";
import {Button} from "antd";
import ListSheet from "./sheets/ListSheet";
import {Route, Switch} from "react-router-dom";
import color from "../../constante/color";

function GSheetContainer(){


    return(
        <div style={{
            display : "flex",
            flexDirection : "column"
        }}>
            <div style={{
                minHeight : 80,
                flex : 0.2,
                top : 0,
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                width : "100%"
            }}>
                <Button  type="primary" shape="round"  size={"round"} onClick={() => {}}> Deduplicate</Button>
            </div>
            <div style={{
                flex : 0.8,
                minHeight : window.innerHeight-80,
            }}>
                <div style={{
                    overflowY : "hidden",
                    overflowX : "hidden",
                    overflow : "scroll",
                    maxHeight : 400,
                    marginTop : 30,
                    marginBottom : 30,
                    marginRight : 120,
                    marginLeft : 120,
                    borderRadius : 15,
                    borderStyle : "solid",
                    padding : 20
                }}>
                    <ListSheet/>
                </div>
            </div>
        </div>
    )
}

export default GSheetContainer
