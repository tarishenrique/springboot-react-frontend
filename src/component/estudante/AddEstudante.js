import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddEstudante = () => {

    const[estudante, setEstudante] = useState({
        primeiroNome: '',
        ultimoNome: '',
        email: '',
        departamento: ''
    })

    const {primeiroNome, ultimoNome, email, departamento} = estudante;

    const handleInputChange = (e)=>{
        setEstudante({...estudante, [e.target.name]: e.target.value});
    };

    const salvarEstudante = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:9192/estudantes", estudante);
    }

  return (
    <div className='col-sm-8 py-2 px-5'>
        <form onSubmit={(e) => salvarEstudante(e)}>
            <div className="input-group mb-5">
                <label className='input-group-text' htmlFor='primeiroNome'>
                    Primeiro Nome
                </label>
                <input className='form-control col-sm-6' type='text' name='primeiroNome' id='primeiroNome'
                value={primeiroNome} required 
                onChange={(e) => handleInputChange(e)}/>
            </div>
            <div className="input-group mb-5">
                <label className='input-group-text' htmlFor='ultimoNome'>
                    Ultimo Nome
                </label>
                <input className='form-control col-sm-6' type='text' name='ultimoNome' id='ultimoNome'
                value={ultimoNome} required 
                onChange={(e) => handleInputChange(e)}/>
            </div>
            <div className="input-group mb-5">
                <label className='input-group-text' htmlFor='email'>
                    Email
                </label>
                <input className='form-control col-sm-6' type='email' name='email' id='email'
                value={email} required
                onChange={(e) => handleInputChange(e)}/>
            </div>
            <div className="input-group mb-5">
                <label className='input-group-text' htmlFor='departamento'>
                    Departamento
                </label>
                <input className='form-control col-sm-6' type='text' name='departamento' id='departamento'
                value={departamento} required
                onChange={(e) => handleInputChange(e)}/>
            </div>

            <div className='row mb-5'>
                <div className='col-sm-2'>
                    <button type="submit" className="btn btn-outline-success btn-lg">Adicionar</button>
                </div>
                <div className='col-sm-2'>
                    <Link to={"/visualizar-estudantes"} type="submit" className="btn btn-outline-warning btn-lg">
                        Cancelar
                    </Link>
                </div>

            </div>

        </form>
      
    </div>
  )
}

export default AddEstudante
