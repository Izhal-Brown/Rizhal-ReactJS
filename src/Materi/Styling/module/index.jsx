import React from "react";
import Style from "./index.module.css";


export default class module extends React.Component{
  render(){
    return(
      <div>
        <button className={`${Style.btn} ${Style.info}`}>Go Eduwork</button>
      </div>
    )
  }
}