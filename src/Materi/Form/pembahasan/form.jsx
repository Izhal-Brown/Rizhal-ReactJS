import React, { Component } from 'react';

class FormElement extends Component {
  state = {
    nama : "",
    jurusan :"",
    gender : "",
    member : false,
    alamat : ""
  }

  handleSubmit = (e) => {
    e.preventDefault();// biar ngga refresh ketika di OK
    alert(`
    Nama : ${this.state.nama}
    Jurusan : ${this.state.jurusan}
    Gender : ${this.state.gender}
    Member : ${this.state.member ? 'YES' : 'NO'}
    Alamat : ${this.state.alamat} 
    `);

    this.setState({
      nama : "",
      jurusan :"",
      gender : "",
      member : false,
      alamat : ""
    })
  }

  render() {
    return (
      <div style={{margin: "100px 20px", border: "1px solid gray", padding:"20px"}}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Nama :</label>
          <input 
          type="text" 
          onChange={e => this.setState({nama: e.target.value})}
          defaultValue={this.state.nama}
          />
          <br/>
          <label htmlFor="jurusan"> Jurusan : </label>
          <select name="jurusan" id="" onChange={e => this.setState({jurusan: e.target.value})} >
              <option value="">Pilih Jurusan</option>
              <option value="Teknik Infomratika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
          </select>
          <br/>
          <label htmlFor="gender">Jenis Kelamin : </label>
          <input type="radio" name ="gender" value="Pria"onChange={e => this.setState({gender: e.target.value})}/>Laki-laki
          <input type="radio" name ="gender" value="Wanita"onChange={e => this.setState({gender: e.target.value})}/>Perempuan
          <br/>
          <label htmlFor="member">Member :  </label>
          <input name="member"type="checkbox" checked={this.state.member}onChange={e => this.setState({member: e.target.checked})}/>
          <br/>
          <label htmlFor="alamat"> Alamat : </label>
          <textarea name="" id="" cols="30" rows="5" onChange={e => this.setState({alamat: e.target.value})} defaultValue={this.state.alamat}></textarea>
          <br/><br/>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default FormElement;

// defaultValue -> jika menggunakan props maka bisa di edit
// value -> jika memakai props tidak dapat diedit