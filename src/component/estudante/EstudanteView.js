import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import Pesquisa from "../common/Pesquisa";

const EstudanteView = () => {
  const [estudantes, setEstudantes] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(() => {
    loadEstudantes();
  }, []);

  const loadEstudantes = async () => {
    const result = await axios.get("http://localhost:9192/estudantes", {
      validateStatus: () => {
        return true;
      },
    });
    if (result.status === 302) {
      setEstudantes(result.data);
    }
  };

  const handleDelete = async(id) => {
    await axios.delete(`http://localhost:9192/estudantes/excluir/${id}`);
    loadEstudantes();
  }

  return (
    <section>
    <Pesquisa
      pesquisa={pesquisa}
      setPesquisa={setPesquisa}
    />
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Id</th>
            <th>Primeiro Nome</th>
            <th>Ultimo Nome</th>
            <th>Email</th>
            <th>Departamento</th>
            <th colSpan={3}>Ações</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {estudantes
          .filter((estudante) => 
            estudante.primeiroNome.toLowerCase().includes(pesquisa))
          .map((estudante, index) => (
            <tr key={estudante.estudanteId}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{estudante.primeiroNome}</td>
              <td>{estudante.ultimoNome}</td>
              <td>{estudante.email}</td>
              <td>{estudante.departamento}</td>
              <td className="mx-2">
                <Link to={`/visualizar-estudante/${estudante.estudanteId}`} className="btn btn-info">
                  <FaEye/>
                </Link>
              </td>
              <td className="mx-2">
                <Link to={`/editar-estudante/${estudante.estudanteId}`} className="btn btn-warning">
                  <FaEdit/>
                </Link>
              </td>
              <td className="mx-2">
                <button className="btn btn-danger" onClick={() => handleDelete(estudante.estudanteId)}>
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EstudanteView;
