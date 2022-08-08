import React from "react";

export default class Variabel extends React.Component{
  state = {
   a: null, // nilai null
   b: true,// boolean
   c: '', // epmty value / string kosong
   d: 0 // number
  }
  render(){
    return(
      <div>
        <div>a: {this.state.a}</div>
        <div>b: {this.state.b}</div>
        <div>c: {this.state.c}</div>
        <div>d: {this.state.d}</div>
        <div>e: {this.state.e}</div>
      </div>
    )
  }
}