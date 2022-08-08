import React from "react";

export default class Conditional extends React.Component{
  state = {
    isLoading : true
  }

  render(){
    setTimeout(() =>{
      this.setState({
        isLoading : true
      })
    },3000) //setelah 3 detik kita aubah statenya jadi false

    // if else :
    const isLogin = false;
    let message = '';
    if(isLogin){
      message = 'anda sudah login'
    } else {
      message = 'Silahkan login terlebih dahulu'
    }

    // Short ciscuit evaluation (&& / ||) :
      const isLogin2 = false;

    return(
      <div>
        <h1>{message}</h1>

        {/* ciscuit evaluation */}
        {isLogin2 && <h1>Anda Sudah Login</h1>}

        {/* Ternary Operator */}
        {isLogin2 ? <h1>Anda Sudah Login</h1> : <h1>Silahkan login terlebih dahulu</h1>}


        { this.state.isLoading 
          ? <h1>Loading ... </h1> 
          : <h1>Selamat Datang di Kelas MERN</h1>
        }
      </div>
    )
  }
}