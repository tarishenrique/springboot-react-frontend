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
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Primeiro Nome</th>
            <th>Ultimo Nome</th>
            <th>Email</th>
            <th>Departamento</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {estudantes.map((estudante, index) => (
            <tr key={estudante.estudanteId}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{estudante.primeiroNome}</td>
              <td>{estudante.ultimoNome}</td>
              <td>{estudante.email}</td>
              <td>{estudante.departamento}</td>
              <td>Visualizar</td>
              <td>Editar</td>
              <td>Excluir</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EstudanteView;
