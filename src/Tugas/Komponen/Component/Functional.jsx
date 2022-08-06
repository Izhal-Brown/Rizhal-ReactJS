const TugasFunctional = ({nama}) =>{
  
  return ( 
    <div>
      <h1 align="center">Tugas component {nama}</h1>    
       <p align="center">Komponen adalah bit kode yang bebas dan dapat digunakan kembali. Komponen menjadikan tujuan yang sama dengan fungsi JavaScript, tetapi bekerja secara terpisah dan mengembalikan HTML melalui fungsi render. Komponen terdapat dalam dua jenis, komponen Class dan komponen Fungsi, dalam artikel ini kita akan berkonsentrasi pada komponen Class. Komponen pada React secara konsep sama seperti function pada JavaScript, perbedaannya adalah jika function menerima sebarang input yang disebut parameter atau argumen dan me-return sebuah nilai, komponen menerima input yang disebut props dan me-return React Element yang menggambarkan apa yang akan ditampilkan di layar. Komponen memungkinkan kita untuk membuat UI yang independent, isolated, dan reusable sehingga mengurangi repetisi kode.</p>
    </div>
  ) 
}
export default TugasFunctional;