import React, { useEffect, useState } from "react";
import axios from "axios";

const EstudanteView = () => {
  const [estudantes, setEstudantes] = useState([]);

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

  return (
    <section>
      <table className="table table-bordered table-hover">
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
          {estudantes.map((estudante, index) => (
            <tr key={estudante.estudanteId}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{estudante.primeiroNome}</td>
              <td>{estudante.ultimoNome}</td>
              <td>{estudante.email}</td>
              <td>{estudante.departamento}</td>
              <td className="mx-2">
                <button className="btn btn-info">Visualizar</button>
              </td>
              <td className="mx-2">
                <button className="btn btn-warning">Editar</button>
              </td>
              <td className="mx-2">
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EstudanteView;
