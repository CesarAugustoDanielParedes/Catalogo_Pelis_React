import NavbarPelis from './components/NavbarPelis';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarPelis />
      <Home />
      <Footer /> {/* 👈 Esto elimina el warning */}
    </div>
  );
}

export default App;

