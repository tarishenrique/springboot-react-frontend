import React from 'react'

const Pesquisa = ({pesquisa, setPesquisa}) => {
  return (
    <div className='col-sm-6 mb-4'>
        <form onSubmit={(e) => e.preventDefault()}>
            <input className='form-control'
            type='search' role='search' placeholder='Pesquise estudantes...'
            value={pesquisa} onChange={(e) => setPesquisa(e.target.value)}/>
        </form>
      
    </div>
  )
}

export default Pesquisa
