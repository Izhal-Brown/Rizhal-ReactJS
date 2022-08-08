import React from "react";
import List from "./pembahasan/list";
// import Conditional from "./pembahasan/conditional";
// import Variabel from "./pembahasan/variabel";

export default class RenderVariabel extends React.Component{
  render(){
    return(
      <div>
        {/* <Variabel/> */}
        {/* <Conditional/> */}
        <List />
      </div>     
    )
  }
}

// Rendering Variabel :
  // secara umum, untuk merender variabell cukup menempatkan nama variabel diikuti kurung kurawal {} pada nilai balik fungsi komponen
  // perlakuannya sama, baik itu props maunpun variabel lainnya

// Varaibel yang tidak di render React JS
  // Nilaianya belum didefenisikan / undifined
  //  nilai NUll
  // nilai Booolean
  // empty value / string kosong

// kapan dibutuhkan
  // Looping Component
  // komunikasi data antar komponen
  // render dengan kondisi tertentu

// Conditional Rendering
  // merender komponen berdasarkan kondisi tertentu
  // bisa menggunakan if - else
  // atauu sesuatu yang disebut shirt ciscuit evaluation (&& /||)

// list Rendering
  // merender komponen berdasarkan data array
  // menggunakan map