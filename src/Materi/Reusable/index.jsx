import React from "react";
import Hello from "./hello";
import Product from "./Product";
// import Counter from "./Counter";
import Bar from "./Bar";

export default class Reusable extends React.Component{

  state = {
    value : 0
  }

  handleValue = (data) => {
   this.setState({
      value: data
   });
  }

  render(){
    return(
      <div>
        <Hello name="Rizhal"/>{/* ini ngambil di Hello.jsx dan menambahakan name="edi" kedalamnya (reusable) */}
        {/* <Counter /> */}
        <Bar value={this.state.value}/>
        <Product receiveValue={this.handleValue} />
      </div>
    )
  }
}

// Reusable Component:
  // - Setiap render wajib ditampung dalam 1 countainer : misal element div
  // - komponen dapat digunakan berkali-kali
  // - setiap komponen terisolasi satu sama lain

// Parent Child Component
//  - Komponen dapat bertindak sebagai parent / child
//  - Kita bisa memecah komponen menjadi lebih sederhana untuk memudahkan dalam maintenancenya
//  - Best practice : komponen baiknya hanya mempunyai 1 tugas