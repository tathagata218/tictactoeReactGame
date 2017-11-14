import React from "react";
import "./Box.css";



const Box = (props) => {
    
    return (<div onClick={props.func} className="test"></div>)

}

export default Box;