import { useState } from "react";

// const FunctionalComponent = () => {
//   return ( 
//     <>
//       <h1>Membuat component dengan functional component</h1>
//       <h2>Selamat Belajar</h2>
//     </>
//   ) 
// }



// menggunakan tipe data props :
// const FunctionalComponent = (props) => {
//   return ( 
//     <>
//       <h1>Membuat component dengan functional component</h1>
//       <h2>Hello {props.nama}</h2>
//     </>
//   ) 
// }


//menggunakan destructoring assigment
  // const FunctionalComponent = ({nama}) => {
  //   return ( 
  //     <>
  //       <h1>Membuat component dengan functional component</h1>
  //       <h2>Hello {nama}, Selamat Belajar</h2>
  //     </>
  //   ) 
  // }


// menggunakan State alias hooks
const FunctionalComponent = ({nama}) => {
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);// untuk mengubah nilai value
  }

  const handleMinus = () => {
    if (value > 0){
      setValue(value - 1);
    }
    
  }

  return ( 
    <>
      <h1>Membuat component dengan functional component</h1>
      <h2>Hello {nama}, Selamat Belajar</h2>
      <button onClick={handleMinus}> - </button>
      <span>{' '} {value} {' '}</span>
      <button onClick={handlePlus}> + </button>
    </>
  ) 
}

export default FunctionalComponent;

// functional komponen tidak punya tipe data state tapi punya props