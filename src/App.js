import logo from './logo.svg';
import './App.css';
import Komponen from './Materi/Komponen';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Komponen>
        Ini Percobaan APLIKASI PERTAMA
      </Komponen>
    </div>
  );
}

export default App;
