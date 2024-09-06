
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import EstudanteView from './component/estudante/EstudanteView';
import NavBar from "./component/common/NavBar";
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EstudanteIncluir from "./component/estudante/EstudanteIncluir";
import EstudanteEditar from "./component/estudante/EstudanteEditar";
import EstudantePerfil from "./component/estudante/EstudantePerfil";


function App() {
  return (
    <main className="container mb-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/visualizar-estudantes" element={<EstudanteView />} />
          <Route exact path="/adicionar-estudante" element={<EstudanteIncluir />} />
          <Route exact path="/visualizar-estudante/:id" element={<EstudantePerfil />} />
          <Route exact path="/editar-estudante/:id" element={<EstudanteEditar/>}/>
        </Routes>
      </Router>

    </main>
  );
}

export default App;
