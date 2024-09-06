import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const EstudanteEditar = () => {
  let navigate = useNavigate();

  //const { id } = new URLSearchParams(window.location.search);
  const {id} = useParams();

  const [estudante, setEstudante] = useState({
    primeiroNome: "",
    ultimoNome: "",
    email: "",
    departamento: "",
  });

  const { primeiroNome, ultimoNome, email, departamento } = estudante;

  useEffect(() => {
    loadEstudante();
  }, []);

  const loadEstudante = async () => {
    const result = await axios.get(`http://localhost:9192/estudantes/estudante/${id}`);
    setEstudante(result.data);
  };

  const handleInputChange = (e) => {
    setEstudante({ ...estudante, [e.target.name]: e.target.value });
  };

  const editarEstudante = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9192/estudantes/editar/${id}`, estudante);
    navigate("/visualizar-estudantes");
  };

  return (
    <div className="col-sm-8 py-2 px-5">
      <h2>Editar Estudante</h2>
      <form onSubmit={(e) => editarEstudante(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="primeiroNome">
            Primeiro Nome
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="primeiroNome"
            id="primeiroNome"
            value={primeiroNome}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="ultimoNome">
            Ultimo Nome
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="ultimoNome"
            id="ultimoNome"
            value={ultimoNome}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="departamento">
            Departamento
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="departamento"
            id="departamento"
            value={departamento}
            required
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Adicionar
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/visualizar-estudantes"}
              type="submit"
              className="btn btn-outline-warning btn-lg">
              Cancelar
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EstudanteEditar
