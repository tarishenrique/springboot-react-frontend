import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EstudantePerfil = () => {

    const {id} = useParams();

    const [estudante, setEstudante] = useState({
        primeiroNome: "",
        ultimoNome: "",
        email: "",
        departamento: "",
    });

    useEffect(() => {
        loadEstudante();
    }, []);

    const loadEstudante = async () => {
        const result = await axios.get(`http://localhost:9192/estudantes/estudante/${id}`);
        setEstudante(result.data);
    };


  return (
    <section className="shadow" style={{ backgroundColor: "whitesmoke" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">
                  {`${estudante.primeiroNome} ${estudante.ultimoNome}`}
                </h5>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-outline-primary">
                    Chamar
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-warning ms-1">
                    Mensagem
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Primeiro Nome</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{estudante.primeiroNome}</p>
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Ultimo Nome</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{estudante.ultimoNome}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Email</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{estudante.email}</p>
                  </div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-3">
                    <h5 className="mb-0">Departamento</h5>
                  </div>

                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{estudante.departamento}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstudantePerfil;
