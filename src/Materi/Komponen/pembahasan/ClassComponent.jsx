import React from "react";
// import PropTypes from 'prop-types';

// class ClassComponent extends React.Component{
//   render(){// method ynag wajib mengembalikan data/element
//     return(
//       <div>
//         <h1>Komponen ini dibuat dengan class component</h1>
//         <h2>Hello Dunia</h2>
//       </div>// element wajib dibungkus / wajib ditampung dalam satu element parent
//     )
//   }
// }

// class harus menggunakan method render() lalu di return
// class komponen punya tipe data komponen : state dan props
  // props -> properti/variabel yang dikirim dari luar untuk digunakan di komponen, bersifat readonly, sehingga kit ahanya bisa menggunakan tanpa bisa memodifikasi, umunya digunakan untuk komunikasi dari parent component to child component
    // tipe data props : string, number, object, func, any, node, bool, arrat, oneOf(['pria', 'wanita']), eleement, isRequired
  // state --> private property yang menempel pada komponen, bisa kita modifikasi tapi hanya pada lingkup komponen


// menggunakan Props
  // class ClassComponent2 extends React.Component{
  //   render(){// method ynag wajib mengembalikan data/element
  //     return(
  //       <div>
  //         <h1>Komponen ini dibuat dengan class component</h1>
  //         <h2>Hello {this.props.nama}</h2>
  //       </div>
  //     )
  //   }
  // }


// menggunakan state dan bind
  // class ClassComponent extends React.Component{
  //   constructor(props){
  //     super(props)

  //     this.state = {
  //       value : 0
  //     }

  //     this.handlePlus = this.handlePlus.bind(this);// binding diikat handlePlus-nya biar ikut ke method class yang dibuat 
  //     this.handleMinus = this.handleMinus.bind(this);// binding diikat handleMinus-nya biar ikut ke method class yang dibuat 
  //   }

  //   handlePlus(){// ketika kita mmebuat method seperti ini membutuh kan binding
  //     this.setState({value : this.state.value + 1});
  //   }

  //   // setState -> untuk merubah niliai value pada state

  //   handleMinus(){
  //     if(this.state.value > 0){
  //       this.setState({value : this.state.value - 1});
  //     }
  //   }

  //   render(){
  //     return(
  //       <div>
  //         <h1>Komponen ini dibuat dengan Class Component</h1>
  //         <h2>Hello {this.props.nama}</h2>
  //         <button onClick={this.handleMinus}> - </button>
  //         <span>{' '} {this.state.value} {' '}</span>
  //         <button onClick={this.handlePlus}> + </button>
  //       </div>
  //     )
  //   }
  // }



  // cara tidak perlu di binding --> arrow function
  class ClassComponent extends React.Component{
    state = {
        value : 0
    }

    handlePlus= () => {
      this.setState({value : this.state.value + 1});
    }

    // setState -> untuk merubah niliai value pada state

    handleMinus = () => {
      if(this.state.value > 0){
        this.setState({value : this.state.value - 1});
      }
    }

    render(){
      return(
        <div>
          <h1>Komponen ini dibuat dengan Class Component</h1>
          <h2>Hello {this.props.nama}</h2>
          <button onClick={this.handleMinus}> - </button>
          <span>{' '} {this.state.value} {' '}</span>
          <button onClick={this.handlePlus}> + </button>
        </div>
      )
    }
  }

// ClassComponent.PropTypes = {
//   nama  : PropTypes.string.isRequired // ketika props index.js ngga diisi maka error
// }

export default ClassComponent; 