
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Home from './Home';
import EstudanteView from './component/estudante/EstudanteView';

function App() {
  return (
    <div className="App">
      <h2>Bem Vindo ao nosso FrontEnd</h2>
      <Home />
      <EstudanteView />
    </div>
  );
}

export default App;
