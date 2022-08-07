import React from "react";
import './index.scss';
import Title from "./tittle";

export default class Plain extends React.Component{
  render(){
    return(
      <div>
        <Title />
        <h3 className="title">Belajar Mern</h3>
        <button className="btn btn-danger">Go Eduwork</button>
      </div>
    )
  }
}