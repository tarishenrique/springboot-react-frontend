
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import EstudanteView from './component/estudante/EstudanteView';
import NavBar from "./component/common/NavBar";
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/visualizar-estudantes" element={<EstudanteView />} />
          <Route path="/adicionar-estudantes" element={<EstudanteView />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
