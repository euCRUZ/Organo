import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Banner from './componentes/Banner'
import Formulario from './componentes/Formulario'
import Time from './componentes/Time'
import Footer from './componentes/Footer'

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Fullstack',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Frontend',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Backend',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mobile',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Data Science',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'UX & UI',
      cor: '#FFEEDF'
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  function cadastrarTime(novoTime) {
    setTimes([ ...times, { ...novoTime, id: uuidv4() } ])
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    colaborador.id = uuidv4()
    setColaboradores([...colaboradores, colaborador])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
        return colaborador
      }
      return colaborador
    }))
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  return (
    <div className="App">
      
      <Banner />
      <Formulario 
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={aoNovoColaboradorAdicionado}
      />

      <section className='times'>  
        {times.map(time => 
          <Time 
          mudarCor={mudarCorDoTime}
          key={time.id}
          id={time.id} 
          nome={time.nome} 
          cor={time.cor} 
          corPrimaria={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
          />
        )}
      </section>
      
      <Footer />
    </div>
  )
}

export default App
