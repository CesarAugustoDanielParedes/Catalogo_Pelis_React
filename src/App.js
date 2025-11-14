import NavbarPelis from './components/NavbarPelis';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  const [filtro, setFiltro] = useState("");
  // Manejar el estado del filtro de búsqueda

  return (
    <div className="App">
      <NavbarPelis onBuscar={setFiltro} /> 
      <Home filtro={filtro} />
      <Footer /> 
    </div>
  );
}


export default App;