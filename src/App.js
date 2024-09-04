
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import EstudanteView from './component/estudante/EstudanteView';
import NavBar from "./component/common/NavBar";
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <main className="container mb-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/visualizar-estudantes" element={<EstudanteView />} />
          <Route exact path="/adicionar-estudantes" element={<EstudanteView />} />
        </Routes>
      </Router>

    </main>
  );
}

export default App;
