import React from "react";
import Class from "./Component/Class";
import Functional from "./Component/Functional";

export default class Component extends React.Component{
  render(){
    return(
      <div>
        <Class judul="Belajar ReactJS"/>
        {/* <ClassComponent></ClassComponent> */}
        <Functional nama="Rizhal"/>
      </div>
    )
  }
}